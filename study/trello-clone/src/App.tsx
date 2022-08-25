import React from "react";
import { Column } from "./Column";
import { Card } from "./Card";
import { AppContainer } from "./styles";
import { AddNewItem } from "./AddNewItem";
import { useAppState } from "./AppStateContext";

function App() {
  const { state } = useAppState();
  return (
    <AppContainer>
      {state.lists.map((list, i) => (
        <Column text={list.text}></Column>
      ))}
      <AddNewItem
        toggleButtonText="+Add another list"
        onAdd={console.log}
      ></AddNewItem>
    </AppContainer>
  );
}

export default App;
