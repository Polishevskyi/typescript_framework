class ResponseSpecification {
  constructor(expectedStatus) {
    this.expectedStatus = expectedStatus;
  }

  validate(response) {
    if (!response) {
      throw new Error('Response is null or undefined');
    }
    const status = typeof response.status === 'function' ? response.status() : response.status;
    if (status !== this.expectedStatus) {
      throw new Error(`Expected status ${this.expectedStatus}, but got ${status}`);
    }
    return response;
  }
}

class ResponseSpecs {
  static requestReturnsOKSpec() {
    return new ResponseSpecification(200);
  }

  static requestReturnsCreatedSpec() {
    return new ResponseSpecification(201);
  }

  static requestReturnsNoContentSpec() {
    return new ResponseSpecification(204);
  }
}

const HTTP_STATUS = {
  OK: 200,
  CREATED: 201,
  NO_CONTENT: 204,
  BAD_REQUEST: 400,
  NOT_FOUND: 404,
};

export { HTTP_STATUS, ResponseSpecs, ResponseSpecification };
