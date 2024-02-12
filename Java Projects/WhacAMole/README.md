
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

Functionalities to add:
    


Maybe add?
    option to select game difficulty - easy, medium, hard.
    - for this create a start to prompt user - like games do.
    Highscore for each game mode saved - for same playthrough
    
Notes:
    Noticed adding encapsulation allowed better maintainability of code for example by simply calling a method instead of rewriting code.