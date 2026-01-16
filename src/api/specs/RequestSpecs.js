import 'dotenv/config';

class RequestSpecs {
  static petStoreSpec() {
    return {
      baseURL: process.env.API_BASE_URL,
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
    };
  }
}

export default RequestSpecs;
