import tkinter
import random

ROWS = 25
COLS = 25
TILE_SIZE = 25

WINDOW_WIDTH = TILE_SIZE * COLS
WINDOW_HEIGHT = TILE_SIZE * ROWS


# used to store positions of snake and food
class Tile:
    def __init__(self, x, y):
        self.x = x
        self.y = y

# Game Window
window = tkinter.Tk()
window.title("Snake")
window.resizable(False, False)

canvas = tkinter.Canvas(window, bg="black", width=WINDOW_WIDTH, height=WINDOW_HEIGHT, borderwidth=0, highlightthickness=0)
canvas.pack()
window.update()

# center the window
window_width = window.winfo_width()
window_height = window.winfo_height()
screen_width = window.winfo_screenwidth()
screen_height = window.winfo_screenheight()

window_x = int((screen_width / 2) - (window_width / 2))
window_y = int((screen_height / 2) - (window_height / 2))

# format "(w)x(h)+(x)+(y)"
window.geometry(f"{window_width}x{window_height}+{window_x}+{window_y}")

# initialise game
snake = Tile(5 * TILE_SIZE, 5 * TILE_SIZE)  # single tile, snake's head
food = Tile(10 * TILE_SIZE, 10 * TILE_SIZE)
snake_body = [] # multiple snake tiles
velocityX = 0
velocityY = 0
game_over = False
score = 0
highScore = 0

def reset_game():
    global snake, snake_body, food, velocityX, velocityY, game_over, score

    # reset and randomise snake & food spawn
    snake = Tile(random.randint(0, COLS-1) * TILE_SIZE, random.randint(0, ROWS-1) * TILE_SIZE)
    food = Tile(random.randint(0, COLS-1) * TILE_SIZE, random.randint(0, ROWS-1) * TILE_SIZE)

    # Reset snake position (avoiding collision with food or snake body)
    # while True:
    #     snake = Tile(random.randint(0, COLS - 1) * TILE_SIZE, random.randint(0, ROWS - 1) * TILE_SIZE)
    #     if not any(part.x == snake.x and part.y == snake.y for part in snake_body):
    #         break

    # Reset food position (avoiding collision with snake)
    # while True:
    #     food = Tile(random.randint(0, COLS - 1) * TILE_SIZE, random.randint(0, ROWS - 1) * TILE_SIZE)
    #     if food.x != snake.x and food.y != snake.y:
    #         break

    # reset variables
    snake_body = []
    velocityX = 0
    velocityY = 0
    game_over = False
    score = 0

# def exit_game():
#     window.des

def change_direction(e): # e = event
    #print(e)
    #print(e.keysym)
    global velocityX, velocityY, game_over
    if (game_over):
        if e.keysym == "space":
            reset_game()
            return
        elif e.keysym == "Escape":
            window.destroy()

    if (e.keysym == "Up" and velocityY != 1):
        velocityX = 0
        velocityY = -1
    elif (e.keysym == "Down" and velocityY != -1):
        velocityX = 0
        velocityY = 1
    elif (e.keysym == "Left" and velocityX != 1):
        velocityX = -1
        velocityY = 0
    elif (e.keysym == "Right" and velocityX != -1):
        velocityX = 1
        velocityY = 0

def move():
    global snake, food, snake_body, game_over, score, highScore
    if (game_over):
        return
    
    if (snake.x < 0 or snake.x >= WINDOW_HEIGHT or snake.y < 0 or snake.y >= WINDOW_WIDTH):
        game_over = True
        return
    
    for tile in snake_body:
        if (snake.x == tile.x and snake.y == tile.y):
            game_over = True
            return

    # collision with food
    if (snake.x == food.x and snake.y == food.y):
        snake_body.append(Tile(food.x, food.y))
        food.x = random.randint(0, COLS -1) * TILE_SIZE
        food.y = random.randint(0, ROWS -1) * TILE_SIZE
        score += 1
        if (score > highScore):
            highScore = score

    # update snake body
    for i in range(len(snake_body)-1, -1, -1): # rmb non-nclusive, so stop at -1 is actually 0
        tile = snake_body[i]
        if (i == 0): # means it is the head of the snake
            tile.x = snake.x
            tile.y = snake.y
        else: # otherwise update segment based on previous segment (head)
            prev_tile = snake_body[i-1]
            tile.x = prev_tile.x
            tile.y = prev_tile.y

    snake.x += velocityX * TILE_SIZE # Moves by one tile over, rather than 1 pixel over.
    snake.y += velocityY * TILE_SIZE

blink_state = True  # Global variable to track blinking state

def blink_text(text_id):
    canvas.itemconfigure(text_id, state=tkinter.NORMAL if blink_state else tkinter.HIDDEN)

def draw():
    global snake, food, snake_body, game_over, score, highScore, blink_state
    move()

    canvas.delete("all") # clear frame after "drawing"

    # draw food first - Up here means we see snake over the food
    canvas.create_rectangle(food.x, food.y, food.x + TILE_SIZE, food.y + TILE_SIZE, fill="red")

    # draw snake
    canvas.create_rectangle(snake.x, snake.y, snake.x + TILE_SIZE, snake.y + TILE_SIZE, fill="lime green")
     
    for tile in snake_body:
        canvas.create_rectangle(tile.x, tile.y, tile.x + TILE_SIZE, tile.y + TILE_SIZE, fill = "lime green")

    if (game_over):
        gOver_text = canvas.create_text(WINDOW_WIDTH/2, 6 * TILE_SIZE, font = "Arial 30", text = "GAME OVER", fill = "white", justify='center')
        blink_text(gOver_text)
        canvas.create_text(WINDOW_WIDTH/2, WINDOW_HEIGHT/2, font = "Arial 20", text = f"Score: {score}\nHigh Score: {highScore}", fill = "white", justify='center')
        retry_text = canvas.create_text(WINDOW_WIDTH/4, 20 * TILE_SIZE, font = "Arial 25", text = "RETRY\n[SPACE BAR]", fill = "white", justify='center')
        blink_text(retry_text)
        exit_text = canvas.create_text(WINDOW_WIDTH*0.75, 20 * TILE_SIZE, font = "Arial 25", text = "EXIT\n[ESC]", fill = "white", justify='center')
        blink_text(exit_text)
        window.after(300)
    else:
        canvas.create_text(40, 20, font = "Arial 10", text = f"High Score: {highScore}\nScore: {score}", fill = "white")
    
    blink_state = not blink_state # Toggle blinking state

    window.after(100, draw)  # 100ms

draw()


window.bind("<KeyRelease>", change_direction)
window.mainloop()
