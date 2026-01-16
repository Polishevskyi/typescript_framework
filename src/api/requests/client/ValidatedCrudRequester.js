import CrudRequester from './CrudRequester.js';

class ValidatedCrudRequester extends CrudRequester {
  constructor(requestContext) {
    super(requestContext);
  }

  async request(endpointKey, { data = null, config = {}, pathParams = {} } = {}) {
    return super.request(endpointKey, { data, config, pathParams });
  }
}

export default ValidatedCrudRequester;
