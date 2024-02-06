import java.awt.*;  // classes for GUI
import java.awt.event.*;  // classes and interfaces for events within GUI
import javax.swing.*;   // for modern and feature-rich GUI (like aesthetics)

public class TicTacToe {
    int boardWidth = 800;
    int boardHeight = 700;  // 50px for text panel

    JFrame frame = new JFrame("Tic-Tac-Toe");
    JLabel textLabel = new JLabel();
    JPanel textPanel = new JPanel();
    JPanel boardPanel = new JPanel();
    JPanel scorePanel = new JPanel();
    JButton resetButton = new JButton("Reset Game");

    JButton[][] board = new JButton[3][3]; // creates buttons for board
    String playerX = "X";
    String playerO = "O";
    String currentPlayer = playerX;
    // check for winners
    boolean gameOver = false;
    // check for tie
    int turns = 0;
    int playerXScore = 0;
    int playerOScore = 0;


    TicTacToe() {

        // Nimbus to help make it work on Mac (visually)
        try {
            UIManager.setLookAndFeel("javax.swing.plaf.nimbus.NimbusLookAndFeel");
        } catch (Exception e) {
            e.printStackTrace();
        }
        
        frame.setVisible(true);
        frame.setSize(boardWidth, boardHeight);
        frame.setLocationRelativeTo(null); // Open in centre of screen
        frame.setResizable(false);
        frame.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
        frame.setLayout(new BorderLayout());

        textLabel.setBackground(Color.darkGray);
        textLabel.setForeground(Color.white); // Font Color
        textLabel.setFont(new Font("Arial", Font.BOLD, 50));
        textLabel.setHorizontalAlignment(JLabel.CENTER); // Center text
        textLabel.setText("Tic-Tac-Toe");
        textLabel.setOpaque(true);
        
        textPanel.setLayout(new BorderLayout());
        textPanel.add(textLabel); // adding label to panel (1)

        // Reset Button
        resetButton.setFont(new Font("Arial", Font.BOLD, 16));
        resetButton.setFocusable(false);
        resetButton.addActionListener(e -> resetGame());

        // Create a new panel for scores and reset button
        JPanel bottomPanel = new JPanel (new BorderLayout());
        bottomPanel.add(scorePanel, BorderLayout.CENTER);
        bottomPanel.add(resetButton, BorderLayout.SOUTH);

        // Add components to frame
        frame.add(textPanel, BorderLayout.NORTH); // add panel to frame. Second argument pushes text to the top (2)
        frame.add(boardPanel);
        frame.add(bottomPanel, BorderLayout.SOUTH);

        boardPanel.setLayout(new GridLayout(3, 3));
        boardPanel.setBackground(Color.darkGray);
        frame.add(boardPanel);

        // adding buttons
        for (int r = 0; r < 3; r++) {
            for (int c = 0; c < 3; c++) {
                JButton tile = new JButton();
                board[r][c] = tile;
                boardPanel.add(tile);

                tile.setBackground(Color.darkGray);
                tile.setForeground(Color.white);
                tile.setFont(new Font("Arial", Font.BOLD, 120));
                tile.setFocusable(false);
                // tile.setText(currentPlayer);

                tile.addActionListener(new ActionListener() {
                    public void actionPerformed(ActionEvent e) {
                        // don't let tiles update if game is over
                        if (gameOver) return;

                        // Figure out where action is coming from i.e., our buttons. e.getSource() itself comes as an error since it can come from
                        // different sources but since we know it'll be from buttons we cast the type to buttons with the '(Jbutton)'. 
                        JButton tile = (JButton) e.getSource();
                        if (tile.getText() == "") {
                            tile.setText(currentPlayer);
                            turns++;
                            checkWinner();
                            if (!gameOver) {
                                 // to alternate player
                                currentPlayer = currentPlayer == playerX ? playerO : playerX;
                                textLabel.setText(currentPlayer + "'s turn.");
                            }
                           
                        }

                    }
                });

            }
        }
    }

    void checkWinner() {
        // horizontal
        for (int r = 0; r < 3; r++) {
            if (board[r][0].getText() == "") continue;

            if (board[r][0].getText() == board[r][1].getText() && 
                board[r][1].getText() == board[r][2].getText()) {
                for (int i = 0; i < 3; i++) {
                    setWinner(board[r][i]);
                }
                gameOver = true;
                return;
            }
        }

        // vertical
        for (int c = 0; c < 3; c++) {
            if (board[0][c].getText() == "") continue;

            if (board[0][c].getText() == board[1][c].getText() && 
                board[1][c].getText() == board[2][c].getText()) {
                for (int i = 0; i < 3; i++) {
                    setWinner(board[i][c]);
                }
                gameOver = true;
                return;
            }
        }

        // diagonal
        if (board[0][0].getText() == board[1][1].getText() &&
            board[1][1].getText() == board[2][2].getText() &&
            board[0][0].getText() != "") {
            for (int i = 0; i < 3; i++) {
                setWinner(board[i][i]);
            }
            gameOver = true;
            return;
        }

        // anti-diagonal
        if (board[0][2].getText() == board[1][1].getText() &&
            board[1][1].getText() == board[2][0].getText() &&
            board[0][2].getText() != "") {
            for (int i = 0; i < 3; i++) {
                setWinner(board[i][2 - i]);
            }
            //setWinner(board[0][2]);
            //setWinner(board[1][1]);
            //setWinner(board[2][0]);
            gameOver = true;
            return;
        }

        // tie
        if (turns == 9 && !gameOver) {
            for (int r = 0; r < 3; r++) {
                for (int c = 0; c < 3; c++) {
                    setTie(board[r][c]);
                }
            }
            gameOver = true;
        }
    }

    void setWinner(JButton tile) {
        tile.setForeground(Color.green);
        tile.setBackground(Color.gray);
        textLabel.setText(currentPlayer + " is the winner!");
    
        // update score
        if (currentPlayer == playerX) {
            playerXScore++;
        } else {
            playerOScore++;
        }
    
        // Update scores after each win
        updateScores();
    }
    

    void setTie(JButton tile) {
        tile.setForeground(Color.orange);
        tile.setBackground(Color.gray);
        textLabel.setText("Tie!");

        // update scores
        updateScores();
    }

    void resetGame() {
        // Reset game board and state
        for (int r = 0; r < 3; r++) {
            for (int c = 0; c < 3; c++) {
                board[r][c].setText("");
                board[r][c].setBackground(Color.darkGray);
                board[r][c].setForeground(Color.white);
            }
        }

        // Switch starting player based on the winner of the previous game
        if (gameOver) {
            currentPlayer = (playerXScore > playerOScore) ? playerO : playerX;
        } else {
            currentPlayer = playerX;  // Default starting player if no winner yet
        }

        // reset game state variables
        gameOver = false;
        turns = 0;

        // update text label and scores
        textLabel.setText(currentPlayer + "'s turn.");
        updateScores();
    }

    void updateScores() {
        // display player scores in the text label
        textLabel.setText(currentPlayer + "'s turn. Scores: X - " + playerXScore + ", O - " + playerOScore);
    }
    
}