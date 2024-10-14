import React from "react";
import EventApp from "./components/Event";
import UseStateApp from "./components/useState";
import SetStateApp from "./components/setState";
import SetStateAsyncApp from "./components/setState/async";
import SetStatePromiseApp from "./components/setState/promise";
import BatchedUpdatesApp from "./components/batchedUpdates";
import AutomaticApp from "./components/batching/Automatic";
import EmptyComponent from "./components/EmptyComponent";

function App() {
  return (
    <div>
      {/* <EventApp /> */}
      {/* <UseStateApp /> */}
      {/* <SetStateApp /> */}
      {/* <BatchedUpdatesApp /> */}
      {/* <AutomaticApp /> */}
      {/* <EmptyComponent /> */}
      {/* <SetStateAsyncApp /> */}
      <SetStatePromiseApp />
    </div>
  );
}

export default App;
