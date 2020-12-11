function getImage(json) {
  return { type: 'GET_IMAGE', payload: json.message };
}

function requestImage() {
  return { type: 'REQUEST_IMAGE' };
}

function failedRequest(error) {
  return { type: 'FAILED_REQUEST', payload: error };
}

export default function fetchDogAction() {
  return (dispatch) => {
    dispatch(requestImage());
    return fetch('https://dog.ceo/api/breeds/image/random')
      .then((resolve) => resolve.json()
        .then(
          (json) => dispatch(getImage(json)),
          (error) => dispatch(failedRequest(error)),
        ));
  };
}
