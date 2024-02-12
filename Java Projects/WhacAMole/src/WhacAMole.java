import java.awt.*;
import java.awt.event.*;
import java.util.Random;
import javax.swing.*;

public class WhacAMole {
    private static final int BOARD_WIDTH = 600;
    private static final int BOARD_HEIGHT = 700;

    private ImageIcon moleIcon;
    private ImageIcon plantIcon;
    private JFrame frame;
    private JLabel textLabel;
    private JPanel textPanel;
    private JPanel boardPanel;
    private JButton[] board;
    private JButton currMoleTile;
    private JButton currPlantTile;
    private JButton currPlantTile2;
    private JButton resetButton;
    private JButton exitButton;
    private Random random;
    private Timer moleTimer;
    private Timer plantTimer;
    private Timer secondPlantTimer;
    private int score;
    private int highScore;

    public WhacAMole() {
        random = new Random(); // Initialise the random object
        initializeUI();
        initialiseTimers();
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
        textLabel.setFont(new Font("Arial", Font.PLAIN, 20));
        textLabel.setHorizontalAlignment(JLabel.CENTER);
        textLabel.setText("High Score: 0    Score: 0");

        textPanel = new JPanel();
        textPanel.setLayout(new BorderLayout());
        textPanel.add(textLabel, BorderLayout.CENTER);
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
    
        // Add reset button
        resetButton = new JButton("Reset Game");
        resetButton.addActionListener(new ActionListener() {
            public void actionPerformed(ActionEvent e) {
                resetGame();
            }
        });

        // Add exit button
        exitButton = new JButton("Exit Game");
        exitButton.addActionListener(new ActionListener() {
            public void actionPerformed(ActionEvent e) {
                System.exit(0);
            }
        });

        JPanel buttonPanel = new JPanel();
        buttonPanel.setLayout(new FlowLayout());
        buttonPanel.add(resetButton);
        buttonPanel.add(exitButton);
        frame.add(buttonPanel, BorderLayout.SOUTH);
    }

    private void initialiseTimers() {
        moleTimer = new Timer(500, e -> setMole());
        plantTimer = new Timer(800, e -> setPlant());
        secondPlantTimer = new Timer(1000, e -> setSecondPlant());
    }

    private void startGame() {
        moleTimer.start();
        plantTimer.start();
        secondPlantTimer.start();
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
        } while (tile == currPlantTile || tile == currPlantTile2);
    
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
        } while (tile == currMoleTile || tile == currPlantTile2);
    
        // Set tile to plant
        currPlantTile = tile;
        currPlantTile.setIcon(plantIcon);

        //System.out.println("Plant placed at tile: " + num);
    }

    private void setSecondPlant() {
        // Remove plant from current tile
        if (currPlantTile2 != null) {
            currPlantTile2.setIcon(null);
            currPlantTile2 = null;
        }
    
        // Randomly select another tile
        int num;
        JButton tile;
        do {
            num = random.nextInt(9);
            tile = board[num];
        } while (tile == currMoleTile || tile == currPlantTile);
    
        // Set tile to plant
        currPlantTile2 = tile;
        currPlantTile2.setIcon(plantIcon);

        //System.out.println("Second plant placed at tile: " + num);
    }
    

    private void handleTileClick(JButton tile) {
        if (tile == currMoleTile) {
            score++;
            updateScores();
            moleTimer.restart();
            setMole();
        } else if (tile == currPlantTile) {
            endGame();
        }
    }
    
    private void updateScores() {
        // Update high score if needed
        if (score > highScore) {
            highScore = score;
        }
        // Update text label with current scores
        textLabel.setText("High Score: " + highScore + "\nScore: " + score);
    }
    
    private void endGame() {
        textLabel.setText("Game Over\nHigh Score: " + highScore + "\nScore: " + score);
        moleTimer.stop();
        plantTimer.stop();
        for (JButton button : board) {
            button.setEnabled(false);
        }
    }
    
    private void resetGame() {
        score = 0;
        textLabel.setText("High Score: " + highScore + "\nScore: " + score);
        moleTimer.start();
        plantTimer.start();
        for (JButton button : board) {
            button.setEnabled(true);
        }
    }    
}
