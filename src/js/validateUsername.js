export default class Validator {
  constructor(userName) {
    this.userName = userName;
  }

  validateUsername() {
    const name = String(this.userName);
    const regex = /^[^\d\s_-][\w\s-]+[^\d\s_-]$/i;
    const exeptThreeNums = /\d{4,}/;
    if (regex.test(name) && !exeptThreeNums.test(name)) {
      return true;
    }
    return false;
  }
}
