
Whack a Mole Game

Created game using:
    -built-in swing awt graphics libary,
    -click handlers to whack the mole,
    -randomly spawn mole and piranha plant using Timer and Random modules

Functionalities added:
    -Encapsulation
    -Game reset and exit game
    -Added a second plant with delayed spawn
        -Created a second setPlant function, 
        -separate variable to represent a second plant tile to handle plant tiles indepedently. Without this the original plant would say its spawning in but not visible or clickable.
        - Added a visible bar to show time required for player to make a move, slowly gets faster as score increases.
        - created home panel to introduce game with difficulty levels (normal, medium, hard).
        initially adding home panel to frame would conflict with the game (they would overlap) so i instead separated them into two GUI's

Possible functionalities to add:
    - Highscore for each game mode saved 
    would have to be for same playthrough
    - difficulty level didn't change rate of progress bar decrease.
    
Notes:
    Noticed adding encapsulation allowed better maintainability of code for example by simply calling a method instead of rewriting code.