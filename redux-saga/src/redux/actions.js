import {
  CREATE_POST,
  // FETCH_POSTS,
  HIDE_LOADER,
  REQUEST_POSTS,
  SHOW_ALERT,
  SHOW_LOADER,
} from './types';

export function createPost(post) {
  return {
    type: CREATE_POST,
    payload: post,
  };
}

export function showLoader() {
  return {
    type: SHOW_LOADER,
  };
}

export function hideLoader() {
  return {
    type: HIDE_LOADER,
  };
}

export function showAlert(text) {
  return (dispatch) => {
    dispatch({
      type: SHOW_ALERT,
      payload: text,
    });

    setTimeout(() => {
      dispatch(hideAlert());
    }, 3000);
  };
}

export function hideAlert() {
  return {
    type: SHOW_ALERT,
    payload: null,
  };
}

// Single store logic
// export function fetchedPosts() {
//   return async (dispatch) => {
//     try {
//       dispatch(showLoader()); // dispatch here!
//       const response = await fetch(
//         'https://jsonplaceholder.typicode.com/posts?_limit=5'
//       );
//       const json = await response.json();
//       dispatch({ type: FETCH_POSTS, payload: json });
//       dispatch(hideLoader());
//     } catch (error) {
//       dispatch(showAlert('Что-то пошло нет так'));
//       dispatch(hideLoader());
//     }
//   };
// }

// Side effect function
export function fetchedPosts() {
  return {
    type: REQUEST_POSTS,
  };
}
