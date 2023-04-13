import React, { useContext } from "react";
import Columns from "./Columns/Columns";
import EmptyBoard from "./EmptyBoard/EmptyBoard";
import BoardCtx from "../../context/boardctx";

function Board() {
  const { boards } = useContext(BoardCtx);

  return (
    <>
      {!boards && <EmptyBoard />}
      {boards && <Columns />}
    </>
  );
}

export default Board;
