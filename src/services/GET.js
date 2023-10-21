export class GET {
  static async getWord() {
    try {
      const resp = await fetch("http://itgirlschool.justmakeit.ru");
      const data = await resp.json();
      console.log(data);
      return data;
    } catch (e) {
      console.error(e);
    }
  }
}

export default GET;
