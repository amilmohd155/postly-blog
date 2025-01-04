"use client";

import {
  createContext,
  PropsWithChildren,
  useContext,
  useReducer,
  useState,
} from "react";

type Action = { type: "set"; payload: Record<number, boolean> };
type Dispatch = (action: Action) => void;
type State = {
  hovered: Record<number, boolean>;
  isAnyHovered: boolean;
};

const HoverContext = createContext<{ state: State; dispatch: Dispatch }>(
  undefined!,
);

const hoverReducer = (state: State, action: Action) => {
  switch (action.type) {
    case "set":
      const isAnyHovered = Object.values(action.payload).some((value) => value);
      return { hovered: action.payload, isAnyHovered };
    default:
      throw new Error(`Unhandled action type: ${action.type}`);
  }
};

export const HoverPorvider = ({ children }: PropsWithChildren) => {
  const [state, dispatch] = useReducer(hoverReducer, {
    hovered: {},
    isAnyHovered: false,
  });

  return (
    <HoverContext.Provider
      value={{
        state,
        dispatch,
      }}
    >
      {children}
    </HoverContext.Provider>
  );
};

export const useHover = () => {
  const context = useContext(HoverContext);
  if (!context) {
    throw new Error("useHover must be used within a HoverProvider");
  }
  return context;
};
