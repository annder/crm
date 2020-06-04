class ChartDataGenterate {
  genterateDay() {
    let dayLen = 0;
    // 判断大小月
    const bigMonth = [1, 3, 5, 7, 8, 10, 12];
    const smallMonth = [4, 6, 8, 9, 11];

    // 判断闰年
    const getMonth = new Date().getMonth();
    const getYear = new Date().getFullYear();
    const isLeapYear = getYear % 4 == 0 && getYear % 100 !== 0 ? true : false;

    if (bigMonth.includes(getMonth)) {
      dayLen = 31;
    } else if (smallMonth.includes(getMonth)) {
      dayLen = 30;
    } else {
      isLeapYear ? (dayLen = 29) : (dayLen = 28);
    }
    return Array.from({ length: dayLen }).map((v, i) => `${i + 1}日`);
  }
  /**
   * @return {Array}
   * */

  get moth() {
    return Array.from({ length: 12 }).map((v, i) => `${i + 1}月`);
  }
  /**
   * @return {Array}
   * */

  get day() {
    return this.genterateDay();
  }
}

export default new ChartDataGenterate();
