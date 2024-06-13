module.exports = {
  routes: [
    {
      method: 'GET',
      path: '/download-document',
      handler: 'document.downloadDocument',
      config: {
        auth: false, // You can set this to true if you need authentication
      },
    },
  ],
};
