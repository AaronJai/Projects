import java.awt.*;  // classes for GUI
import java.awt.event.*;  // classes and interfaces for events within GUI
import javax.swing.*;   // for modern and feature-rich GUI (like aesthetics)

public class TicTacToe {
    private int boardWidth = 800;
    private int boardHeight = 700;
    private JFrame frame = new JFrame("Tic-Tac-Toe");
    private JLabel textLabel = new JLabel();
    private JPanel textPanel = new JPanel();
    private JPanel boardPanel = new JPanel();
    private JPanel scorePanel = new JPanel();
    private JButton resetButton = new JButton("Reset Game");
    private JButton[][] board = new JButton[3][3];
    private String playerX = "X";
    private String playerO = "O";
    private String currentPlayer = playerX;
    private boolean gameOver = false;
    private int turns = 0;
    private int playerXScore = 0;
    private int playerOScore = 0;

    public TicTacToe() {
        initializeGUI();
        initializeBoard();
    }

    private void initializeGUI() {
        try {
            UIManager.setLookAndFeel("javax.swing.plaf.nimbus.NimbusLookAndFeel");
        } catch (Exception e) {
            e.printStackTrace();
        }
        frame.setVisible(true);
        frame.setSize(boardWidth, boardHeight);
        frame.setLocationRelativeTo(null);
        frame.setResizable(false);
        frame.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
        frame.setLayout(new BorderLayout());

        textLabel.setBackground(Color.darkGray);
        textLabel.setForeground(Color.white);
        textLabel.setFont(new Font("Arial", Font.BOLD, 50));
        textLabel.setHorizontalAlignment(JLabel.CENTER);
        textLabel.setText("Tic-Tac-Toe");
        textLabel.setOpaque(true);

        textPanel.setLayout(new BorderLayout());
        textPanel.add(textLabel);

        resetButton.setFont(new Font("Arial", Font.BOLD, 16));
        resetButton.setFocusable(false);
        resetButton.addActionListener(e -> resetGame());

        JPanel bottomPanel = new JPanel(new BorderLayout());
        bottomPanel.add(scorePanel, BorderLayout.CENTER);
        bottomPanel.add(resetButton, BorderLayout.SOUTH);

        frame.add(textPanel, BorderLayout.NORTH);
        frame.add(bottomPanel, BorderLayout.SOUTH);
        boardPanel.setLayout(new GridLayout(3, 3));
        frame.add(boardPanel);
        boardPanel.setBackground(Color.darkGray);
    }

    private void initializeBoard() {
        for (int r = 0; r < 3; r++) {
            for (int c = 0; c < 3; c++) {
                JButton tile = new JButton();
                board[r][c] = tile;
                boardPanel.add(tile);
                tile.setBackground(Color.darkGray);
                tile.setForeground(Color.white);
                tile.setFont(new Font("Arial", Font.BOLD, 120));
                tile.setFocusable(false);

                tile.addActionListener(new ActionListener() {
                    public void actionPerformed(ActionEvent e) {
                        if (gameOver) return;
                        JButton tile = (JButton) e.getSource();
                        if (tile.getText().isEmpty()) {
                            tile.setText(currentPlayer);
                            turns++;
                            checkWinner();
                            if (!gameOver) {
                                currentPlayer = currentPlayer.equals(playerX) ? playerO : playerX;
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
    
        // Increment score only if the game is not already over
        if (!gameOver) {
            if (currentPlayer == playerX) {
                playerXScore++;
            } else {
                playerOScore++;
            }
            gameOver = true; // Set game over flag after updating the score
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