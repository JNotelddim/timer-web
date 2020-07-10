import { ERROR } from "src/actions/actionTypes";

export const handleError = (error: { response: { data: string } }) => {
  const data = error.response ? error.response.data : error;
  return {
    type: ERROR,
    payload: data,
  };
};

export default { handleError };
