import React, { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import data from "../data.json";

const BoardCtx = React.createContext({
  addNewBoard: () => {},
  addTask: () => {},
  boards: [],
  deleteBoard: () => {},
  deleteTask: () => {},
  showAddBoard: Boolean,
  showAddTask: Boolean,
  showEditBoard: Boolean,
  showEditTask: Boolean,
  showItemActions: Boolean,
  showSidebar: Boolean,
  showTaskDetails: Boolean,
  changeTaskStatus: () => {},
  toggleAddBoardModal: () => {},
  toggleActiveBoard: () => {},
  toggleAddTaskModal: () => {},
  toggleEditBoardModal: () => {},
  toggleEditTaskModal: () => {},
  toggleMobileMenu: () => {},
  toggleSidebar: () => {},
  toggleTaskDetailsModal: () => {},
  updateTask: () => {},
  setIds: () => {},
  setShowItemActions: () => {},
  showDeleteBoard: Boolean,
  toggleDeleteBoard: () => {},
  showDeleteModal: Boolean,
  toggleDeleteItemModal: () => {},
  showBoardItemActions: Boolean,
  toggleBoardItemActions: () => {},
  ids: [],
  viewMobileMenu: Boolean,
});

export const BoardCtxProvider = ({ children }) => {
  const [boards, setBoards] = useState([]);
  const [showAddBoard, setShowAddBoard] = useState(false);
  const [showAddTask, setShowAddTask] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [showDeleteBoard, setShowDeleteBoard] = useState(false);
  const [showEditBoard, setShowEditBoard] = useState(false);
  const [showEditTask, setShowEditTask] = useState(false);
  const [showItemActions, setShowItemActions] = useState(false);
  const [showBoardItemActions, setBoardItemActions] = useState(false);
  const [showSidebar, setShowSidebar] = useState(false);
  const [showTaskDetails, setShowTaskDetails] = useState(false);
  const [viewMobileMenu, setViewMobileMenu] = useState(false);
  const [ids, setIds] = useState({});

  useEffect(() => {
    let boardWithIds = data.boards.map((board) => ({
      ...board,
      id: uuidv4(),
      columns: board.columns.map((column) => ({
        ...column,
        id: uuidv4(),
        tasks: column.tasks.map((task) => ({
          ...task,
          id: uuidv4(),
        })),
      })),
    }));

    setBoards(boardWithIds);
  }, []);

  function toggleAddBoardModal() {
    setShowAddBoard(!showAddBoard);
  }

  function toggleMobileMenu() {
    setViewMobileMenu((prev) => !prev);
  }

  function toggleBoardItemActions() {
    setBoardItemActions((prev) => !prev);
  }

  function toggleActiveBoard(id) {
    setIds({});
    setBoards((prevBoards) => {
      return prevBoards.map((board) => {
        if (board.id === id) return { ...board, isActive: true };
        else return { ...board, isActive: false };
      });
    });
  }

  function toggleAddTaskModal() {
    setShowAddTask((prev) => !prev);
  }

  function toggleSidebar() {
    setShowSidebar((prev) => !prev);
  }

  function toggleEditBoardModal() {
    setShowEditBoard((prev) => !prev);
  }

  function toggleEditTaskModal() {
    if (showEditTask === false) {
      setShowTaskDetails(false);
      setShowItemActions(false);
      setShowEditTask(true);
    } else setShowEditTask(false);
  }

  function toggleDeleteItemModal() {
    if (showDeleteModal === false) {
      setShowTaskDetails(false);
      setShowItemActions(false);
      setShowDeleteModal(true);
    } else setShowDeleteModal(false);
  }

  function toggleDeleteBoard() {
    setShowDeleteBoard((prev) => !prev);
  }

  function toggleTaskDetailsModal() {
    setShowTaskDetails((prev) => !prev);
  }

  console.log(boards);

  function addNewBoard(newBoard) {
    setBoards((prevBoards) => {
      return prevBoards.concat(newBoard);
    });
  }

  function addTask(task, columnId) {
    setBoards((prevBoards) => {
      return prevBoards.map((board) => {
        if (board.isActive) {
          return {
            ...board,
            columns: board.columns.map((column) => {
              if (column.id === columnId) {
                return { ...column, tasks: column.tasks.concat(task) };
              } else return { ...column };
            }),
          };
        } else return { ...board };
      });
    });
  }

  function updateTask(updatedTask, newColumnId) {
    let boardIndex = boards.findIndex((board) => board.isActive);
    let columnIndex = boards[boardIndex].columns.findIndex(
      (column) => column.id === ids.column
    );
    let taskIndex = boards[boardIndex].columns[columnIndex].tasks.findIndex(
      (task) => task.id === updatedTask.id
    );

    setBoards((prevBoards) => {
      let updatedBoards = [...prevBoards];
      updatedBoards[boardIndex].columns[columnIndex].tasks[taskIndex] =
        updatedTask;

      return updatedBoards;
    });

    if (newColumnId) changeTaskStatus(newColumnId);
  }

  function changeTaskStatus(newColumnId) {
    let activeBoard = boards.find((board) => board.isActive);

    let prevColumn = activeBoard.columns.find(
      (column) => column.id === ids.column
    );

    let newColumn = activeBoard.columns.find(
      (column) => column.id === newColumnId
    );

    if (prevColumn.id === newColumnId) {
      return;
    }

    let task = prevColumn.tasks.find((task) => task.id === ids.task);

    prevColumn = {
      ...prevColumn,
      tasks: prevColumn.tasks.filter((task) => task.id !== ids.task),
    };

    newColumn = { ...newColumn, tasks: newColumn.tasks.concat(task) };

    setIds((prevIds) => {
      return { ...prevIds, column: newColumn.id };
    });
    setBoards((prevBoards) => {
      return prevBoards.map((board) => {
        if (board.isActive) {
          return {
            ...board,
            columns: board.columns.map((column) => {
              if (column.id === prevColumn.id) return (column = prevColumn);
              if (column.id === newColumn.id) return (column = newColumn);
              return { ...column };
            }),
          };
        } else return { ...board };
      });
    });
  }

  function deleteTask(taskId) {
    let newTasks = boards
      .find((board) => board.isActive)
      .columns.find((column) => column.id === ids.column)
      .tasks.filter((task) => task.id !== taskId);

    setBoards((prevBoards) => {
      return prevBoards.map((board) => {
        if (board.isActive) {
          return {
            ...board,
            columns: board.columns.map((column) => {
              if (column.id === ids.column) {
                return { ...column, tasks: newTasks };
              } else return { ...column };
            }),
          };
        } else return { ...board };
      });
    });
    toggleDeleteItemModal();
  }

  function deleteBoard(id) {
    let newBoards = boards
      .filter((board) => {
        if (board.id === id) return false;
        return true;
      })
      .map((board, index) => {
        if (index === 0) return { ...board, isActive: true };
        else return { ...board };
      });

    setBoards(newBoards);
  }

  function changeBoardDetails(newBoard) {
    setBoards((prevBoards) => {
      return prevBoards.map((board) => {
        if (board.id === newBoard.id) {
          return (board = newBoard);
        } else return board;
      });
    });
  }

  return (
    <BoardCtx.Provider
      value={{
        addNewBoard,
        showAddBoard,
        toggleAddBoardModal,
        addTask,
        boards,
        changeTaskStatus,
        changeBoardDetails,
        deleteBoard,
        deleteTask,
        showAddTask,
        showEditBoard,
        showEditTask,
        showSidebar,
        showTaskDetails,
        toggleActiveBoard,
        toggleAddTaskModal,
        toggleEditBoardModal,
        toggleEditTaskModal,
        toggleMobileMenu,
        toggleSidebar,
        toggleTaskDetailsModal,
        viewMobileMenu,
        setIds,
        setShowItemActions,
        setShowTaskDetails,
        showDeleteBoard,
        toggleDeleteBoard,
        showDeleteModal,
        toggleDeleteItemModal,
        showBoardItemActions,
        toggleBoardItemActions,
        showItemActions,
        ids,
        updateTask,
      }}
    >
      {children}
    </BoardCtx.Provider>
  );
};

export default BoardCtx;
