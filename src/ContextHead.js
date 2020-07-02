import React from "react";
import { Menu, Item, Separator, Submenu } from "react-contexify";
import { COLUMN, ADD_COLUMN } from "./types";

function ContextHead({ dispatch }) {
  const onClick = ({ props }) => {
    console.log("props", props);

    switch (props.action) {
      case ADD_COLUMN:
        dispatch({ type: ADD_COLUMN, payload: props });
        break;

      default:
        break;
    }
  };

  return (
    <Menu id={COLUMN}>
      <Submenu label="Добавить">
        <Item data={{ action: ADD_COLUMN, count: 1 }} onClick={onClick}>
          1 колонку
        </Item>
        <Item data={{ action: ADD_COLUMN, count: 2 }} onClick={onClick}>
          2 колонки
        </Item>
        <Item data={{ action: ADD_COLUMN, count: 3 }} onClick={onClick}>
          3 колонки
        </Item>
        <Item data={{ action: ADD_COLUMN, count: 4 }} onClick={onClick}>
          4 колонки
        </Item>
        <Item data={{ action: ADD_COLUMN, count: 5 }} onClick={onClick}>
          5 колонок
        </Item>
      </Submenu>
      <Separator />
      <Item onClick={onClick}>Удалить колонку</Item>
    </Menu>
  );
}
export default ContextHead;
