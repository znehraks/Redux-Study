import React from "react";
import { connect } from "react-redux";
import { useParams } from "react-router-dom";

const Detail = ({ toDos }) => {
  const myId = useParams().id;
  const toDo = toDos.find((toDo) => toDo.id === +myId);
  return (
    <>
      <h1>Detail</h1>
      <h4>text: {toDo.text}</h4>
      <h4>date: {toDo.id}</h4>
    </>
  );
};

function mapStateToProps(state, ownProps) {
  return { toDos: state };
}
export default connect(mapStateToProps)(Detail);
