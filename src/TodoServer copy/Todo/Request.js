const request = async (url, obj, error) => {
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
