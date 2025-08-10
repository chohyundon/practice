export interface InputItem {
  id: string;
  label: string;
  placeholder: string;
  type: "text" | "number" | "email" | "password" | "tel" | "url" | "search";
}

export const inputItem: InputItem[] = [
  {
    id: "input",
    label: "인풋",
    placeholder: "인풋 입력",
    type: "text",
  },
  {
    id: "input2",
    label: "인풋2",
    placeholder: "인풋2 입력",
    type: "text",
  },
  {
    id: "input3",
    label: "인풋3",
    placeholder: "인풋3 입력",
    type: "text",
  },
  {
    id: "input4",
    label: "인풋4",
    placeholder: "인풋4 입력",
    type: "password",
  },
  {
    id: "input5",
    label: "인풋5",
    placeholder: "인풋5 입력",
    type: "password",
  },
];
