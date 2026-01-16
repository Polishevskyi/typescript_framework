import BaseModel from '../models/BaseModel.js';

class RequestInterface {
  async post(model) {
    throw new Error('post method must be implemented');
  }

  async get(id) {
    throw new Error('get method must be implemented');
  }

  async put(model) {
    throw new Error('put method must be implemented');
  }

  async delete(id) {
    throw new Error('delete method must be implemented');
  }
}

export default RequestInterface;
