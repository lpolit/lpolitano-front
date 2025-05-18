const Data = (() => {
  let serverName = "https://localhost:3000"; 
  return {
    getServerName: () => serverName,
  };
})();

export default Data;
