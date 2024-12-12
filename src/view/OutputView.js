import { Console } from '@woowacourse/mission-utils';

export default class OutputView {
  static printGreeting() {
    Console.print('다리 건너기 게임을 시작합니다.');
  }
  // 현재까지 이동한 다리의 상태를 정해진 형식에 맞춰 출력
  static printMap(map) {
    Console.print(`[ ${map.U.join(' | ')} ]`);
    Console.print(`[ ${map.D.join(' | ')} ]`);
  }

  // 게임의 최종 결과를 정해진 형식에 맞춰 출력
  static printResult(map, isSuccess, count) {
    const result = { true: '성공', false: '실패' };
    Console.print('\n최종 게임 결과');
    this.printMap(map);
    Console.print(`\n게임 성공 여부: ${result[isSuccess]}`);
    Console.print(`총 시도한 횟수: ${count}`);
  }

  static printError(message) {
    Console.print(message);
  }
}
