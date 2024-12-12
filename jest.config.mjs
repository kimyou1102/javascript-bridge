export default {
  transform: {
    '^.+\\.js$': 'babel-jest', // Babel을 사용해 ES6+ 문법 변환
  },
  testEnvironment: 'node', // Node 환경 설정
};
