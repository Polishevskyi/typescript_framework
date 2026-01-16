import BaseModel from './BaseModel.js';

class PetCategoryModel extends BaseModel {
  constructor({ id, name }) {
    super({
      id,
      name,
    });
  }
}

export default PetCategoryModel;
