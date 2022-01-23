const quotes = [
  {
    quote: "오늘날 개발자들은 필요 이상으로 많지만, 좋은 개발자는 부족하다.",
    author: "-피트 맥브린-",
  },
  {
    quote:
      "그것은 이전까지 알려지지 않았던 봉우리를 정복하는 것이 아닌, 그 봉우리에 이르는 새로운 길을 한 걸음 한 걸음 따라가는 문제다.",
    author: "-구스타프 말러-",
  },
  {
    quote:
      "어떤 일이든 간에 사랑하지 않고서는 정말로 잘 할 수가 없다. 그리고 당신이 해킹을 사랑한다면 필연적으로 자신만의 프로젝트를 하게 될 것이다.",
    author: "-폴 그레이엄-",
  },
  {
    quote:
      "인위적인 제한에 걸려 있을 때, 우리는 자신의 능력을 한계까지 밀어붙이는 ‘장난감’프로그램을 만듦으로써 종종 효험을 볼 수 있다.",
    author: "-도널드 커누스-",
  },
  {
    quote:
      "지식을 가진 것, 그리고 그 지식을 써서 소프트웨어를 만들어 내는 역량과 실무 능력을 갖춘 것은 다르다. 여기에 장인정신의 역할이 있다.",
    author: "-피트 맥브린-",
  },
  {
    quote:
      "모르는 것을 배우는 일이, 어떻게 하는지 이미 아는 일을 행하는 것보다 더 중요할 때가 흔히 있다.",
    author: "-짐 하이스미스-",
  },
  {
    quote:
      "정말로 프로그래밍을 잘 하게 된다는 것은 일생의 과업이며, 지속적인 배움과 연습으로 이루어가는 대담한 계획이다.",
    author: "-론 제프리즈-",
  },
  {
    quote:
      "무참한 실패를 맛본 적이 한 번도 없다면, 당신은 뭔가 가치 있는 일을 시도했던 적이 한 번도 없다고 봐야한다.",
    author: "-크리스토퍼 호킨스-",
  },
  {
    quote:
      "대개 발걸음 하나하나마다 새로 시작한다는 느낌이 들어야한다. 이것이 초심이며, '되고 있음'의 상태다.",
    author: "-순류 스즈키-",
  },
  {
    quote:
      "스스로 만족하기 위해서가 아니라 현실 사람들이 당면한 현실적인 문제와 씨름할 때 기량은 연마되는 것입니다.",
    author: "-켄 아우어-",
  },
];

const quote = document.querySelector("#quote-div span:first-child");
const author = document.querySelector("#quote-div span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;
