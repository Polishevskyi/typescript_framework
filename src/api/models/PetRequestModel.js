import BaseModel from './BaseModel.js';
import PetCategoryModel from './PetCategoryModel.js';
import PetTagModel from './PetTagModel.js';

class PetRequestModel extends BaseModel {
  constructor({ id, category, name, photoUrls, tags, status } = {}) {
    super({
      id,
      category: category ? (category instanceof PetCategoryModel ? category : new PetCategoryModel(category)) : null,
      name,
      photoUrls,
      tags: tags ? tags.map((tag) => (tag instanceof PetTagModel ? tag : new PetTagModel(tag))) : null,
      status,
    });
  }

  static fromJson(json) {
    return new PetRequestModel(json);
  }
}

export default PetRequestModel;
