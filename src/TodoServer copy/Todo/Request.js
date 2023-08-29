const request = async (url, obj, error) => {  //ithu normal function
  try {
    const response = await fetch(url, obj);
    if (!response) {
      throw "Error in request";
    }
  } catch (error) {
    error = error.Message;
  } finally {
    return error;
  }
};

export default request;
