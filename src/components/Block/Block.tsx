import styles from "./Block.module.scss";
import React, { memo } from "react";

export const Block = memo(function Block({ blockNum }: { blockNum: number[] }) {
  return <div className={styles.block}></div>;
});
