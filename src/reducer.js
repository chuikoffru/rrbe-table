import { ADD_COLUMN } from "./types";

export const generateId = () => "_" + Math.random().toString(36).substr(2, 9);

export const initialState = {
  selectedRow: null,
  headers: [
    {
      name: generateId(),
      label: "ID",
    },
    {
      name: generateId(),
      label: "Имя",
    },
    {
      name: generateId(),
      label: "Возраст",
    },
  ],
};

export const reducer = (state, action) => {
  switch (action.type) {
    case ADD_COLUMN:
      // Получаем данные колонки
      const { count, name } = action.payload;
      // Получаем индекс в текущем состоянии
      const columnIndex = state.headers.findIndex((x) => x.name === name);
      // Добавляем указанное количество после колонки
      const newColumns = Array(count).fill({ name: generateId(), label: "Колонка" });
      // Вставляем в середину новый массив
      state.headers.splice(columnIndex + 1, 0, ...newColumns);
      return { ...state, headers: state.headers };
    default:
      return state;
  }
};
