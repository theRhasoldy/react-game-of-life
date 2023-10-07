import styles from "./Block.module.scss";
import React, { memo, useEffect, useState } from "react";

type Block = {
  position: {
    x: number;
    y: number;
  };
  isAlive: boolean;
  neighborStatus: {
    north: number;
    south: number;
    east: number;
    west: number;
  };
};

export const Block = memo(function Block({
  position,
  isAlive,
  neighborStatus,
}: Block) {
  // const [alive, setAlive] = useState<boolean>(false);
  //
  // const handleAlive = () => {
  //   setAlive((cur) => !cur);
  //   console.log(position, alive);
  // };
  // useEffect(() => {
  //   console.log(position);
  // }, []);

  if (isAlive) {
    console.log(position, isAlive, neighborStatus);
  }

  return (
    <div
      className={styles.block}
      style={{
        backgroundColor: isAlive ? "#40E4D6" : "transparent",
      }}
    // onClick={handleAlive}
    ></div>
  );
});
