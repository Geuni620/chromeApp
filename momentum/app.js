const calculator = {
  add: function (a, b) {
    return a + b;
  },
  sub: function (a, b) {
    return a - b;
  },
  muti: function (a, b) {
    return a * b;
  },
  divide: function (a, b) {
    return a / b;
  },
  sud: function (a, b) {
    return a ** b;
  },
};

//서로가 서로를 의존하고 있음(서로 연결되어 있음)
const plusResult = calculator.add(2, 3);
const subResult = calculator.sub(plusResult, 10);
const mutiResult = calculator.muti(10, subResult);
const divideResult = calculator.divide(mutiResult, plusResult);
const sudResult = calculator.sud(divideResult, subResult);
