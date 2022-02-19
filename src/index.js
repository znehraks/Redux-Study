import { createStore } from "redux";

const form = document.querySelector("form");
const input = document.querySelector("input");
const ul = document.querySelector("ul");

const ADD_TODO = "ADD_TODO";
const DELETE_TODO = "DELETE_TODO";
const addToDo = (text) => {
  return {
    type: ADD_TODO,
    text,
  };
};
const deleteToDo = (id) => {
  return {
    type: DELETE_TODO,
    id,
  };
};
const reducer = (state = [], action) => {
  console.log(state, action);
  switch (action.type) {
    case ADD_TODO:
      return [{ text: action.text, id: Date.now() }, ...state];
    case DELETE_TODO:
      return state.filter((elem) => elem.id !== action.id);
    default:
      return state;
  }
};
const store = createStore(reducer);

const dispatchAddToDo = (text) => {
  store.dispatch(addToDo(text));
};
const dispatchDeleteToDo = (e) => {
  const id = Number(e.target.parentNode.id);
  store.dispatch(deleteToDo(id));
};
const onSubmit = (e) => {
  e.preventDefault();
  const toDo = input.value;
  input.value = "";
  dispatchAddToDo(toDo);
};
store.subscribe(() => console.log(store.getState()));

const paintToDos = () => {
  const toDos = store.getState();
  ul.innerHTML = "";
  toDos.forEach((toDo) => {
    const li = document.createElement("li");
    const button = document.createElement("button");
    button.innerText = "DELETE";
    button.addEventListener("click", dispatchDeleteToDo);
    li.id = toDo.id;
    li.innerText = toDo.text;
    li.appendChild(button);
    ul.appendChild(li);
  });
};
store.subscribe(paintToDos);

form.addEventListener("submit", onSubmit);

// import { createStore } from "redux";

// const add = document.getElementById("add");
// const minus = document.getElementById("minus");
// const number = document.querySelector("span");
// const ADD = "ADD";
// const MINUS = "MINUS";
// const countModifier = (count = 0, action) => {
//   console.log(count, action);
//   switch (action.type) {
//     case ADD:
//       return count + 1;
//     case MINUS:
//       return count - 1;
//     default:
//       return count;
//   }
// };
// const countStore = createStore(countModifier);
// const onChange = () => {
//   number.innerText = countStore.getState();
// };
// countStore.subscribe(onChange);

// const handleAdd = () => {
//   countStore.dispatch({ type: ADD });
// };
// const handleMinus = () => {
//   countStore.dispatch({ type: MINUS });
// };
// add.addEventListener("click", handleAdd);
// minus.addEventListener("click", handleMinus);

// countStore.dispatch({ type: "ADD" });
// countStore.dispatch({ type: "ADD" });
// countStore.dispatch({ type: "ADD" });
// countStore.dispatch({ type: "ADD" });
// countStore.dispatch({ type: "ADD" });
// countStore.dispatch({ type: "ADD" });
// countStore.dispatch({ type: "MINUS" });
// countStore.dispatch({ type: "MINUS" });
// console.log(countStore.getState());
// let count = 0;
// number.innerText = count;

// const updateText = () => {
//   number.innerText = count;
// };
// const handleAdd = () => {
//   count += 1;
//   updateText();
// };
// const handleMinus = () => {
//   count -= 1;
//   updateText();
// };
