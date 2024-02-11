import java.awt.*;
import java.awt.event.*;
import java.util.Random;
import javax.swing.*;

public class WhacAMole {
    private static final int BOARD_WIDTH = 600;
    private static final int BOARD_HEIGHT = 650;

    private ImageIcon moleIcon;
    private ImageIcon plantIcon;
    private JFrame frame;
    private JLabel textLabel;
    private JPanel textPanel;
    private JPanel boardPanel;
    private JButton[] board;
    private JButton currMoleTile;
    private JButton currPlantTile;
    private Random random;
    private Timer moleTimer;
    private Timer plantTimer;
    private int score;

    public WhacAMole() {
        random = new Random(); // Initialise the random object
        initializeUI();
        initializeTimers();
        startGame();
    }

    private void initializeUI() {
        try {
            // Use the native macOS look and feel
            UIManager.setLookAndFeel(UIManager.getSystemLookAndFeelClassName());
        } catch (Exception e) {
            e.printStackTrace();
        }

        frame = new JFrame("WhacAMole");
        frame.setSize(BOARD_WIDTH, BOARD_HEIGHT);
        frame.setLocationRelativeTo(null);
        frame.setResizable(false);
        frame.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
        frame.setLayout(new BorderLayout());
        frame.setVisible(true);

        textLabel = new JLabel();
        textLabel.setFont(new Font("Arial", Font.PLAIN, 50));
        textLabel.setHorizontalAlignment(JLabel.CENTER);
        textLabel.setText("Score: 0");
        textLabel.setOpaque(true);

        textPanel = new JPanel();
        textPanel.setLayout(new BorderLayout());
        textPanel.add(textLabel);
        frame.add(textPanel, BorderLayout.NORTH);

        boardPanel = new JPanel();
        boardPanel.setLayout(new GridLayout(3, 3));
        frame.add(boardPanel);
        boardPanel.setBackground(Color.BLACK);

        // Load icons
        Image plantImg = new ImageIcon(getClass().getResource("piranha.png")).getImage();
        plantIcon = new ImageIcon(plantImg.getScaledInstance(150, 150, java.awt.Image.SCALE_SMOOTH));
        Image moleImg = new ImageIcon(getClass().getResource("monty.png")).getImage();
        moleIcon = new ImageIcon(moleImg.getScaledInstance(150, 150, java.awt.Image.SCALE_SMOOTH));

        board = new JButton[9];
        for (int i = 0; i < 9; i++) {
            JButton tile = new JButton();
            board[i] = tile;
            boardPanel.add(tile);
            tile.setFocusable(false);
            tile.addActionListener(new ActionListener() {
                public void actionPerformed(ActionEvent e) {
                    handleTileClick((JButton) e.getSource());
                }
            });
        }
    }

    private void initializeTimers() {
        moleTimer = new Timer(1000, e -> setMole());
        plantTimer = new Timer(1500, e -> setPlant());
    }

    private void startGame() {
        moleTimer.start();
        plantTimer.start();
    }

    private void setMole() {
        // Remove mole from current tile
        if (currMoleTile != null) {
            currMoleTile.setIcon(null);
            currMoleTile = null;
        }
    
        // Randomly select another tile
        int num;
        JButton tile;
        do {
            num = random.nextInt(9);
            tile = board[num];
        } while (tile == currPlantTile);
    
        // Set tile to mole
        currMoleTile = tile;
        currMoleTile.setIcon(moleIcon);
    }
    
    private void setPlant() {
        // Remove plant from current tile
        if (currPlantTile != null) {
            currPlantTile.setIcon(null);
            currPlantTile = null;
        }
    
        // Randomly select another tile
        int num;
        JButton tile;
        do {
            num = random.nextInt(9);
            tile = board[num];
        } while (tile == currMoleTile);
    
        // Set tile to plant
        currPlantTile = tile;
        currPlantTile.setIcon(plantIcon);
    }
    

    private void handleTileClick(JButton tile) {
        if (tile == currMoleTile) {
            score++;
            textLabel.setText("Score: " + score);
        } else if (tile == currPlantTile) {
            textLabel.setText("Game Over: " + score);
            moleTimer.stop();
            plantTimer.stop();
            for (JButton button : board) {
                button.setEnabled(false);
            }
        }
    }
}
