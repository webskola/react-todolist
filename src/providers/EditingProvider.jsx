import React, { useState } from "react";

const DEFAULT_VALUE = {
  isEditing: false,
  setEditing: () => undefined,
  newTaskId: undefined,
};

export const EditingContext = React.createContext(DEFAULT_VALUE);

export const EditingProvider = ({ children }) => {
  const [isEditing, setEditing] = useState(false);
  const [newTaskId, setNewTaskId] = useState();
  return (
    <EditingContext.Provider value={{ isEditing, setEditing, newTaskId, setNewTaskId }}>
      {children}
    </EditingContext.Provider>
  );
};
