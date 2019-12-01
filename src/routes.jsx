import React from "react";

import TodoList from "./components/TodoList";
import Add from "./components/Todo";

const routes = {
  "/": () => <TodoList />,
  "/add": () => <Add />
};

export default routes;
