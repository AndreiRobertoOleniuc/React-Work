import React, { useState, useEffect, useRef } from 'react'
import Grid from "./Grid"
import "./style.css";

function App() {
    const [grid, setgrid] = useState(Grid);
    const [direction, setDirection] = useState("up");
    useEffect(() => {
        gameLoop();
        document.addEventListener('keydown', function (event) {
            const key = event.key;
            switch (key) {
                case "w":
                    setDirection("up")
                    break;
                case "s":
                    setDirection("down")
                    break;
                case "a":
                    setDirection("left")
                    break;
                case "d":
                    setDirection("right")
                    break;
                default:
                    break;
            }
        });
    }, [])
    /*
    useInterval(() => {
        console.log(direction)
    }, 10000);
    */
    const gameLoop = () => {
        let pos = new Array();
        grid.map((item, key) => {
            grid[key].map((innerItem, keyinner) => {
                if (innerItem === false) {
                    pos.push({
                        y: key,
                        x: keyinner,
                    })
                }
            })
        })
        switch (direction) {
            case "up":
                let array = grid;
                array[pos[0].y][pos[0].x] = true;
                grid.map((item, key) => {
                    grid[key].map((innerItem, innerKey) => {
                        if (key === pos[0].y + 1 && key === pos[0].x) {
                            console.log(key, innerKey)
                        }
                    })
                })
                console.log(array);
                break;
            case "down":
                break;
            case "right":
                break;
            case "left":
                break;
            default:
                break;
        }
    }

    /*
    let array = grid;
        grid.map((item, key) => {
            grid[key].map((innerItem, innerKey) => {
                if (pos1[0] === key && pos1[1] === innerKey) {
                    array[key][innerKey] = true;
                } else if (pos2[0] === key && pos2[1] === innerKey) {
                    array[key][innerKey] = false;
                } else {
                    array[key][innerKey] = innerItem;
                }
            })
        })
        console.log(array);
    */
    return (
        <div className="screen">
            {grid[0].map((item, key) => {
                if (item) {
                    return (
                        <div className="field" key={key}></div>
                    )
                } else {
                    return (
                        <div className="snake" key={key}></div>
                    )
                }
            })}
            {grid[1].map((item, key) => {
                if (item) {
                    return (
                        <div className="field" key={key}></div>
                    )
                } else {
                    return (
                        <div className="snake" key={key}></div>
                    )
                }
            })}
            {grid[2].map((item, key) => {
                if (item) {
                    return (
                        <div className="field" key={key}></div>
                    )
                } else {
                    return (
                        <div className="snake" key={key}></div>
                    )
                }
            })}
            {grid[3].map((item, key) => {
                if (item) {
                    return (
                        <div className="field" key={key}></div>
                    )
                } else {
                    return (
                        <div className="snake" key={key}></div>
                    )
                }
            })}
            {grid[4].map((item, key) => {
                if (item) {
                    return (
                        <div className="field" key={key}></div>
                    )
                } else {
                    return (
                        <div className="snake" key={key}></div>
                    )
                }
            })}
            {grid[5].map((item, key) => {
                if (item) {
                    return (
                        <div className="field" key={key}></div>
                    )
                } else {
                    return (
                        <div className="snake" key={key}></div>
                    )
                }
            })}
            {grid[6].map((item, key) => {
                if (item) {
                    return (
                        <div className="field" key={key}></div>
                    )
                } else {
                    return (
                        <div className="snake" key={key}></div>
                    )
                }
            })}{grid[7].map((item, key) => {
                if (item) {
                    return (
                        <div className="field" key={key}></div>
                    )
                } else {
                    return (
                        <div className="snake" key={key}></div>
                    )
                }
            })}
            {grid[8].map((item, key) => {
                if (item) {
                    return (
                        <div className="field" key={key}></div>
                    )
                } else {
                    return (
                        <div className="snake" key={key}></div>
                    )
                }
            })}
            {grid[9].map((item, key) => {
                if (item) {
                    return (
                        <div className="field" key={key}></div>
                    )
                } else {
                    return (
                        <div className="snake" key={key}></div>
                    )
                }
            })}
        </div>
    )
}

function useInterval(callback, delay) {
    const savedCallback = useRef();
    // Remember the latest function.
    useEffect(() => {
        savedCallback.current = callback;
    }, [callback]);
    // Set up the interval.
    useEffect(() => {
        function tick() {
            savedCallback.current();
        }
        if (delay !== null) {
            let id = setInterval(tick, delay);
            return () => clearInterval(id);
        }
    }, [delay]);
}

export default App

