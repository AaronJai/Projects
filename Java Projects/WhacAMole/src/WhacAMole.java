import java.awt.BorderLayout;

import javax.swing.*;



public class WhacAMole {
    int boardWidth = 600;
    int boardHeight = 650;
    
    JFrame frame = new JFrame("WhacAMole");
    JLabel textLabel = new JLabel();
    JPanel textPanel = new JPanel();

    WhacAMole() {
        frame.setVisible(true);
        frame.setSize(boardWidth, boardHeight);
        frame.setLocationRelativeTo(null);
        frame.setResizable(false);
        frame.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
        frame.setLayout(new BorderLayout());
    }

}
