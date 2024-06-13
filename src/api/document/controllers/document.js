const axios = require('axios');

module.exports = {
  async downloadDocument(ctx) {
    try {
      const { document_name, token } = ctx.query;

      if (!document_name) {
        return ctx.throw(400, 'document_name query parameter is required');
      }

      if (!token) {
        return ctx.throw(400, 'token query parameter is required');
      }

      const url = `https://riyadhholding.sharepoint.com/sites/Shamil/_layouts/download.aspx?SourceUrl=https://riyadhholding.sharepoint.com/sites/Shamil/Assets/${document_name}`;

      console.log('Requesting URL:', url);

      // Download the file from SharePoint
      const response = await axios({
        url,
        method: 'GET',
        responseType: 'arraybuffer', // This will handle the binary data
        headers: {
          'Authorization': `Bearer ${token}`,
        },
        maxRedirects: 0, // Prevent automatic redirection
      }).catch(error => {
        if (error.response && error.response.status === 302) {
          console.error('Redirection detected, possibly due to authentication issues.');
          ctx.throw(401, 'Unauthorized: Token may be invalid or expired.');
        }
        throw error;
      });

      if (response.status >= 400) {
        // If the response status indicates an error, log the status and data for debugging
        console.error('Error response from server:', response.status, response.data.toString());
        return ctx.throw(response.status, 'Failed to download document');
      }

      // Process the downloaded file data if needed
      const fileData = response.data;

      // Send the data through the pipeline
      ctx.set('Content-Type', response.headers['content-type']);
      ctx.set('Content-Disposition', response.headers['content-disposition']);
      ctx.body = fileData;

    } catch (error) {
      console.error('Error downloading document:', error);
      ctx.throw(500, 'Failed to download document');
    }
  },
};
