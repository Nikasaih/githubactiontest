export const notAuthorized = (
  msg: string = "you're not authorized to proceed"
) => {
  return new Error(msg);
};

export const jwtError = (
  msg: string = "some problem in your jwt please logout"
) => {
  return new Error(msg);
};

export const entityNotFound = (msg: string = "404") => {
  return new Error(msg);
};
