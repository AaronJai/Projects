
TicTacToe Game
Made with a YouTube guide.
    Create a game of Tic Tac Toe in Java using the awt and swing graphics library. 
    Learnt how to create a graphical user interface (GUI) to display the Tic Tac Toe game, and check win or tie conditions using a 2D array.


After the guide I added further functionality to the game such as a Reset Button and a Score Board to keep track of player Scores.
    Though, cant figure out why score is incrementing by 3 instead of 1.
    using print statements its counting a win as 3 wins.


Problem is in checkwinner and setwinner.
    the reason the score goes up by 3 is also because of the for loop in checkwinner which calls setwinner 3 times because its designed to colour the squares that won the game. so, to setwinner it thinks playerx is incremented 3 times

