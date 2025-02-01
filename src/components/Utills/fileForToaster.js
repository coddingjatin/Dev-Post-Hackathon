//just to provide an promise to toaster
const simulateSaveSettings = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, 1000);
  });
};
export default simulateSaveSettings;
