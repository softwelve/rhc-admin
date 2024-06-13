const axios = require('axios');

module.exports = {
  async downloadDocument(ctx) {
    try {
      const { document_name,token } = ctx.query;

      if (!document_name) {
        return ctx.throw(400, 'document_name query parameter is required');
      }

      const url = `https://riyadhholding.sharepoint.com/sites/Shamil/_layouts/download.aspx?SourceUrl=https://riyadhholding.sharepoint.com/sites/Shamil/Assets/${document_name}`;

      // Download the file from SharePoint
      const response = await axios({
        url,
        method: 'GET',
        responseType: 'arraybuffer', // This will handle the binary data
        headers: {
          // Add any required headers here, such as authentication
          'Authorization': `Bearer `+token,
        },
      });

      // Process the downloaded file data if needed
      const fileData = response.data;

      // Send the data through the pipeline
      // You can replace the following line with your pipeline logic
      // For example, you can send the data to another service or process it
      // Here we simply return the data as a response
      ctx.send(fileData, response.headers);

    } catch (error) {
      console.error('Error downloading document:', error);
      ctx.throw(500, 'Failed to download document');
    }
  },
};
