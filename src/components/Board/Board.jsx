import React from "react";
import EmptyBoard from "./EmptyBoard/EmptyBoard";
import EditBoard from "../Actions/EditBoard/EditBoard";

function Board() {
  return (
    <>
      <EmptyBoard />
      <EditBoard />
    </>
  );
}

export default Board;
