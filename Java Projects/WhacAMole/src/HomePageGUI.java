import javax.swing.*;
import java.awt.*;

public class HomePageGUI {
    private JFrame frame;
    private JPanel homePanel;
    private JLabel titleLabel;
    private JPanel buttonPanel;
    private JButton normalButton;
    private JButton mediumButton;
    private JButton hardButton;

    public HomePageGUI() {
        initializeUI();
    }

    private void initializeUI() {
        frame = new JFrame("Whac a Mole");
        frame.setSize(400, 200);
        frame.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);

        homePanel = new JPanel(new BorderLayout());
        frame.add(homePanel);

        titleLabel = new JLabel("Whac a Mole");
        titleLabel.setFont(new Font("Arial", Font.BOLD, 30));
        titleLabel.setHorizontalAlignment(JLabel.CENTER);
        homePanel.add(titleLabel, BorderLayout.NORTH);

        buttonPanel = new JPanel(new GridLayout(1, 3));
        homePanel.add(buttonPanel, BorderLayout.CENTER);

        normalButton = new JButton("Normal");
        normalButton.addActionListener(e -> startGame(Difficulty.NORMAL));
        buttonPanel.add(normalButton);

        mediumButton = new JButton("Medium");
        mediumButton.addActionListener(e -> startGame(Difficulty.MEDIUM));
        buttonPanel.add(mediumButton);

        hardButton = new JButton("Hard");
        hardButton.addActionListener(e -> startGame(Difficulty.HARD));
        buttonPanel.add(hardButton);

        frame.setLocationRelativeTo(null);
        frame.setVisible(true);
    }

    private void startGame(Difficulty difficulty) {
        frame.dispose(); // Close the home page GUI
        new WhacAMole(difficulty); // Start the WhacAMole game with the selected difficulty
    }

    public static void main(String[] args) {
        SwingUtilities.invokeLater(HomePageGUI::new);
    }

    enum Difficulty {
        NORMAL,
        MEDIUM,
        HARD
    }
}