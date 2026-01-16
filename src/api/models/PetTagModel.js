import BaseModel from './BaseModel.js';

class PetTagModel extends BaseModel {
  constructor({ id, name }) {
    super({
      id,
      name,
    });
  }
}

export default PetTagModel;
