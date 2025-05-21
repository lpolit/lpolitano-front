const Data = (() => {
  let serverName = "http://localhost:3000"; 
  return {
    getServerName: () => serverName,
  };
})();

export default Data;
