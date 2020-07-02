import React from "react";
import { contextMenu } from "react-contexify";
import { COLUMN } from "./types";

function RRBEHead({ head }) {
  const handleContext = (event, head) => {
    event.preventDefault();
    contextMenu.show({
      id: COLUMN,
      event,
      props: head,
    });
  };

  return <th onContextMenu={(e) => handleContext(e, head)}>{head.label}</th>;
}

export default RRBEHead;
