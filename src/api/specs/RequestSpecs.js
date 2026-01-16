class RequestSpecs {
  static getDefaultHeaders() {
    return {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    };
  }

  static getTimeout() {
    return 30000;
  }

  static getRetryConfig() {
    return {
      retries: 3,
      retryDelay: 1000,
    };
  }
}

export default RequestSpecs;
