import React from "react";

import styles from "./lifegrid.module.scss";
import { Block } from "../Block/Block";

export const LifeGrid = ({ gridSize }: { gridSize: number }) => {
  const width = Array.from({ length: gridSize }, () => 0);

  return (
    <div className={styles["life-grid"]}>
      {width.map((_, i) => {
        return (
          <div key={i}>
            {width.map((_, k) => {
              return <Block key={k} blockNum={[i, k]} />;
            })}
          </div>
        );
      })}
    </div>
  );
};
