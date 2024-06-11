import React, { useState, useEffect, useRef } from 'react';
import { FaBowlFood } from "react-icons/fa6";
const BOARD_SIZE = 20;
const INITIAL_SNAKE = [{ x: 10, y: 10 }];
const INITIAL_DIRECTION = { x: 1, y: 0 };

const getRandomPosition = () => ({
  x: Math.floor(Math.random() * BOARD_SIZE),
  y: Math.floor(Math.random() * BOARD_SIZE),
});

const Snake = () => {
  const [snake, setSnake] = useState(INITIAL_SNAKE);
  const [direction, setDirection] = useState(INITIAL_DIRECTION);
  const [food, setFood] = useState(getRandomPosition());
  const [obstacles, setObstacles] = useState([getRandomPosition(), getRandomPosition()]);
  const [gameOver, setGameOver] = useState(false);
  const boardRef = useRef();

  useEffect(() => {
    const handleKeyDown = (e) => {
      switch (e.key) {
        case 'ArrowUp':
          setDirection({ x: 0, y: -1 });
          break;
        case 'ArrowDown':
          setDirection({ x: 0, y: 1 });
          break;
        case 'ArrowLeft':
          setDirection({ x: -1, y: 0 });
          break;
        case 'ArrowRight':
          setDirection({ x: 1, y: 0 });
          break;
        default:
          break;
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  useEffect(() => {
    if (gameOver) return;

    const moveSnake = () => {
      setSnake((prevSnake) => {
        const newSnake = [...prevSnake];
        const head = { ...newSnake[0] };
        head.x += direction.x;
        head.y += direction.y;

        if (
          head.x < 0 ||
          head.x >= BOARD_SIZE ||
          head.y < 0 ||
          head.y >= BOARD_SIZE ||
          newSnake.some((segment) => segment.x === head.x && segment.y === head.y) ||
          obstacles.some((obstacle) => obstacle.x === head.x && obstacle.y === head.y)
        ) {
          setGameOver(true);
          return prevSnake;
        }

        newSnake.unshift(head);

        if (head.x === food.x && head.y === food.y) {
          setFood(getRandomPosition());
          setObstacles([...obstacles, getRandomPosition()]);
        } else {
          newSnake.pop();
        }

        return newSnake;
      });
    };

    const interval = setInterval(moveSnake, 200);
    return () => clearInterval(interval);
  }, [direction, food, obstacles, gameOver]);

  const resetGame = () => {
    setSnake(INITIAL_SNAKE);
    setDirection(INITIAL_DIRECTION);
    setFood(getRandomPosition());
    setObstacles([getRandomPosition(), getRandomPosition()]);
    setGameOver(false);
  };

  return (
    <div className="game-container">
      <div ref={boardRef} className="board">
        {Array.from({ length: BOARD_SIZE }).map((_, y) =>
          Array.from({ length: BOARD_SIZE }).map((_, x) => {
            const isSnake = snake.some((segment) => segment.x === x && segment.y === y);
            const isFood = food.x === x && food.y === y;
            const isObstacle = obstacles.some((obstacle) => obstacle.x === x && obstacle.y === y);
            return (
              <div
                key={`${x}-${y}`}
                className={`cell ${isSnake ? 'snake' : ''} ${isObstacle ? 'obstacle' : ''}`}
              >
                {isFood && <FaBowlFood />}
              </div>
            );
          })
        )}
      </div>
      {gameOver && (
        <div className="game-over-container">
          <div className="game-over">Game Over</div>
          <button className="restart-button" onClick={resetGame}>Restart Game</button>
        </div>
      )}
    </div>
  );
};

export default Snake;