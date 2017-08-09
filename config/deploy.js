module.exports = function(deployTarget) {  
  return {
    pagefront: {
      app: 'cdikinderland',
      key: process.env.PAGEFRONT_KEY
    }
  };
};
