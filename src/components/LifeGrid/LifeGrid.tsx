import React, { useRef, useEffect, useState } from "react";

import styles from "./LifeGrid.module.scss";
import { Block } from "../Block/Block";

export const LifeGrid = ({ gridSize }: { gridSize: number }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [containerWidth, setContainerWidth] = useState(0);

  useEffect(() => {
    setContainerWidth(containerRef.current?.offsetWidth as number);

    const handleResize = () => {
      setContainerWidth(containerRef.current?.offsetWidth as number);
    };
    window.addEventListener("resize", handleResize);

    return () => {
      window.addEventListener("resize", handleResize);
    };
  }, [containerWidth]);

  const grid: number[][] = Array.from({ length: gridSize }, () =>
    Array(gridSize).fill(0)
  ); // Updated this line
  grid[0][1] = 1;
  grid[0][2] = 1;
  grid[29][2] = 1;
  grid[29][3] = 1;

  return (
    <div ref={containerRef} className={styles["life-container"]}>
      <div className={styles["life-grid"]}>
        {grid.map((row, rowIndex) => (
          <div key={rowIndex} className={styles["life-row"]}>
            {row.map((_, colIndex) => {
              return (
                <Block
                  key={colIndex}
                  position={{ x: rowIndex, y: colIndex }}
                  isAlive={grid[rowIndex][colIndex] === 1}
                  neighborStatus={{
                    north: colIndex === 0 ? 0 : grid[rowIndex][colIndex - 1],
                    south: colIndex === 29 ? 0 : grid[rowIndex][colIndex + 1],
                    east: rowIndex === 29 ? 0 : grid[rowIndex + 1][colIndex],
                    west: rowIndex === 0 ? 0 : grid[rowIndex - 1][colIndex],
                  }}
                />
              );
            })}
          </div>
        ))}
      </div>
    </div>
  );
};
