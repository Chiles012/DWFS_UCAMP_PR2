export default class BaseModel {

    constructor() {
        if (this.constructor === BaseModel) {
            throw new Error('Cannot instantiate abstract class');
        }
    }

    static fromJson(json) {
        return Object.assign(new this(), json);
    }

    toJson() {
        return JSON.parse(JSON.stringify(this));
    }

}