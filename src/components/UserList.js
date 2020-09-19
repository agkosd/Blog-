import React, { useEffect } from "react";
import { connect } from "react-redux";

const UserList = (props) => {
  
  if (!props.user) {
    return null;
  }
  return <h1>{props.user.name}</h1>;
};

const mapStateToProps = (state, ownProps) => {
  return { user: state.users.find((user) => user.id === ownProps.uID) };
};

export default connect(mapStateToProps)(UserList);
