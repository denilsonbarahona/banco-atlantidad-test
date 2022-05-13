const defaultOptions = {
  enableHightAccuracy: true,
};

const getLatAndLon = () => {
  return new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        resolve(position);
      },
      () => {
        reject(new Error("we could not get the current position"));
      },
      defaultOptions
    );
  });
};

const getCurrentPosition = async () => {
  const {
    coords: { latitude, longitude },
  } = await getLatAndLon();
  return { latitude, longitude };
};

export default getCurrentPosition;
