export const isDevEnv = () => {
  if (process.env.NODE_ENV?.trim() == "development") {
    return true;
  }
  return false;
};
