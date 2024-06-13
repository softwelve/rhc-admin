module.exports = {
  routes: [
    {
      method: 'POST',
      path: '/download-document',
      handler: 'document.downloadDocument',
      config: {
        auth: false, // You can set this to true if you need authentication
      },
    },
  ],
};
