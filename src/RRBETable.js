import React, { useReducer } from "react";
import { initialState, reducer } from "./reducer";
import RRBEHead from "./RRBEHead";

import "./index.scss";
import "react-contexify/dist/ReactContexify.min.css";
import ContextHead from "./ContextHead";

function RRBETable() {
  const [state, dispatch] = useReducer(reducer, initialState);
  console.log("state", state);
  return (
    <div className="rrbe__table">
      <table>
        <thead>
          <tr>
            {state.headers.map((head, key) => (
              <RRBEHead key={key} head={head} />
            ))}
          </tr>
        </thead>
      </table>
      <ContextHead dispatch={dispatch} />
    </div>
  );
}

export default RRBETable;
