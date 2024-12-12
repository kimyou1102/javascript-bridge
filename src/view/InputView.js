import { Console } from '@woowacourse/mission-utils';

export default class InputView {
  static async readBridgeSize() {
    const input = await InputView.getInput('다리의 길이를 입력해주세요.');
    return input;
  }

  static async readMoving() {
    const input = await InputView.getInput('이동할 칸을 선택해주세요. (위: U, 아래: D)');
    return input;
  }

  static async readGameCommand() {
    const input = await InputView.getInput(
      '게임을 다시 시도할지 여부를 입력해주세요. (재시도: R, 종료: Q)',
    );
    return input;
  }

  static async getInput(message) {
    try {
      return await Console.readLineAsync(`${message}\n`);
    } catch (error) {
      return '';
    }
  }
}
