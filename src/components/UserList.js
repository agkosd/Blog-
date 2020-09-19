import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchUsers } from "../actions";


const UserList = (props) => {
  useEffect(() => {
    props.fetchUsers(props.uID);
  }, []);
  if (!props.user) {
    return null;
  }
  return <h1>{props.user.name}</h1>;
};

const mapStateToProps = (state, ownProps) => {
    console.log(state)
  return { user: state.users.find((user)=>user.id===ownProps.uID) };
};

export default connect(mapStateToProps, { fetchUsers })(UserList);
