import React from "react";
import appRoutes from "./Routes/appRoutes";
import { Provider } from "react-redux";
import { store } from "./Redux/Store/store";
const App = () => {
  return (
    <>
      <Provider store={store}>{appRoutes()}</Provider>
    </>
  );
};

export default App;
