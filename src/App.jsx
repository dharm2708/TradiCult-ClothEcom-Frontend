import React from "react";
import appRoutes from "./Routes/appRoutes";
import { smooth } from "./smooth";
import { useEffect } from "react";
const App = () => {
  useEffect(() => {
    smooth();
  }, []);
  return <>{appRoutes()}</>;
};

export default App;
