export default class Validator {
  constructor(userName) {
    this.userName = userName;
  }

  validateUsername() {
    const name = String(this.userName);
    const regex1 = /^[^\d\s_-][\w\s-]+[^\d\s_-]$/i;
    const regex2 = /\d{4,}/;
    if (regex1.test(name) && !regex2.test(name)) {
      return true;
    }
    return false;
  }
}
