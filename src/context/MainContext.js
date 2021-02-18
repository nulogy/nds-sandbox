import React from "react";

/* This MainContext file holds context available to the entire app. 
   Add data to this state for anything you need to reference across the application,
   for data that is accessed on a per page, or per component basis use useState */

/* TO ADD NEW STATE: 
   1. Add a property to INITIAL_STATE (this will be the starting value when the app loads)
   2. Add a MAIN_ACTION_TYPE that will be references when updating the new data
   3. Add a case  for the new Action type in mainReducer,
      the return value tells the state how to update in reponse the the new action type

   You can follow the code commented below as a template */

const INITIAL_STATE = {
  user: undefined
  // newData: someValue
};

const MainStateContext = React.createContext();
const MainDispatchContext = React.createContext();

export const MAIN_ACTION_TYPES = {
  LOG_IN: "log in",
  LOG_OUT: "log out"
  // NEW_DATA_UPDATE: "new data update name that appears in the console",
};

const mainReducer = (state, action) => {
  console.log("MAIN_ACTION", action);
  switch (action.type) {
    case MAIN_ACTION_TYPES.LOG_IN: {
      return { ...state, user: action.data };
    }
    case MAIN_ACTION_TYPES.LOG_OUT: {
      return { ...state, user: undefined };
    }
    // case MAIN_ACTION_TYPES.NEW_DATA_UPDATE: {
    //   return { ...state, newData: action.data}
    // }
    default: {
      throw new Error(`Unhandled action type: ${action.type}. Please add it to mainReducer and MAIN_ACTION_TYPES.`);
    }
  }
};

/* MainProvider: Wraps the whole application, so every component has access to main state.
  There is no need to import this anywhere else */

const MainProvider = ({ children }) => {
  const [state, dispatch] = React.useReducer(mainReducer, INITIAL_STATE);
  return (
    <MainStateContext.Provider value={state}>
      <MainDispatchContext.Provider value={dispatch}>{children}</MainDispatchContext.Provider>
    </MainStateContext.Provider>
  );
};

/* useMainState: Import wherever you would like to USE the Main State
   
  USAGE:
  To display the current user 
  `const state = useMainState();`
   `<Text>{state.user}<Text>`
*/

const useMainState = () => {
  const context = React.useContext(MainStateContext);
  if (context === undefined) {
    throw new Error("useMainState must be used within a MainProvider");
  }
  return context;
};

/* useMainDispatch: Import wherever you would like to UPDATE the Main State
   
  USAGE:
  For a log in action call the log in action and pass the new user as data
  `const dispatch = useMainDispatch();`
   `onClick = {() => dispatch({type: MAIN_ACTION_TYPES.LOG_IN, data: user@nulogy.com }) }`
*/

const useMainDispatch = () => {
  const context = React.useContext(MainDispatchContext);
  if (context === undefined) {
    throw new Error("useMainDispatch must be used within a MainProvider");
  }
  return context;
};

export { MainProvider, useMainState, useMainDispatch };
