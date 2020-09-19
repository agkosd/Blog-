import _, { forEach } from "lodash";
import jsonPlaceholder from "../apis/jsonPlaceholder";

export const fetchPostsandUsers = () => async(dispatch, getState)=>{
  await dispatch(fetchPosts());

  const userIds = _.uniq(_.map(getState().posts, 'userId'));
  userIds.forEach(id=>dispatch(fetchUsers(id)));
};

export const fetchPosts = () => {
  return async (dispatch, getState) => {
    const response = await jsonPlaceholder.get("/posts");
    dispatch({
      type: "FETCH_POSTS",
      payload: response.data,
    });
  };
};

export const fetchUsers = (id) => {
  return async (dispatch, getState) => {
    const response = await jsonPlaceholder.get(`/users/${id}`);
    dispatch({
      type: "FETCH_USERS",
      payload: response.data,
    });
  };
};


