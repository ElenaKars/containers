export default class ErrorRepository {
  constructor(){
    this.errors = new Map();

    this.addError(1, 'Error 1');
    this.addError(2, 'Error 2');
    this.addError(3, 'Error 3');
  }
  addError(code, message){
    this.errors.set(code, message);
  }
  translate(code){
    return this.errors.has(code) ? this.errors.get(code) : 'Unknown Error'
  }
}