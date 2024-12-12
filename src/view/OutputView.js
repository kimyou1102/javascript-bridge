import { Console } from '@woowacourse/mission-utils';

export default class OutputView {
  static printGreeting() {
    Console.print('다리 건너기 게임을 시작합니다.\n');
  }
  // 현재까지 이동한 다리의 상태를 정해진 형식에 맞춰 출력
  static printMap() {}

  // 게임의 최종 결과를 정해진 형식에 맞춰 출력
  static printResult() {}

  static printError(message) {
    Console.print(message);
  }
}
