import React, { useRef, useEffect, useState } from "react";

import styles from "./LifeGrid.module.scss";
import { Block } from "../Block/Block";

export const LifeGrid = ({ gridSize }: { gridSize: number }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [containerWidth, setContainerWidth] = useState(1080);

  useEffect(() => {
    const handleResize = () => {
      setContainerWidth(containerRef.current?.offsetWidth as number);
    };
    window.addEventListener("resize", handleResize);

    return () => {
      window.addEventListener("resize", handleResize);
    };
  }, [containerWidth]);

  const width = Array.from({ length: containerWidth / 16 }, () => 0);
  const height = Array.from(
    { length: gridSize },

    () => 0
  );

  return (
    <div ref={containerRef} className={styles["life-container"]}>
      <div className={styles["life-grid"]}>
        {width.map((_, i) => {
          return (
            <div key={i}>
              {height.map((_, k) => {
                return <Block key={k} blockNum={[i, k]} />;
              })}
            </div>
          );
        })}
      </div>
    </div>
  );
};
