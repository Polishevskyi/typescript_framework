class RequestInterface {
  async get(url, config) {
    throw new Error('get method must be implemented');
  }

  async post(url, data, config) {
    throw new Error('post method must be implemented');
  }

  async put(url, data, config) {
    throw new Error('put method must be implemented');
  }

  async delete(url, config) {
    throw new Error('delete method must be implemented');
  }
}

export default RequestInterface;
