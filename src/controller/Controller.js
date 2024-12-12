import InputView from '../view/InputView.js';
import OutputView from '../view/OutputView.js';
import BridgeMaker from '../BridgeMaker.js';
import BridgeRandomNumberGenerator from '../BridgeRandomNumberGenerator.js';
import BridgeGame from '../BridgeGame.js';

export default class Controller {
  // eslint-disable-next-line max-lines-per-function
  async start() {
    OutputView.printGreeting();
    const length = await InputView.readBridgeSize();
    const bridge = BridgeMaker.makeBridge(length, BridgeRandomNumberGenerator.generate);
    const bridgeGame = new BridgeGame(bridge);
    await this.crossBridge(bridgeGame, bridge, length);
    const { result, tryCount } = bridgeGame.getGameResult();
    const isSuccess = result.length === length;
    const map = this.printHelper(bridge, result);
    OutputView.printResult(map, isSuccess, tryCount);
  }

  async crossBridge(bridgeGame, bridge, length) {
    for (let i = 0; i < length; i++) {
      const moving = await InputView.readMoving();
      const isMove = bridgeGame.move(moving, bridge[i]);
      this.printProcess(bridge, bridgeGame, i);
      if (!isMove) {
        return await this.isRetry(bridgeGame, bridge, length);
      }
    }
  }

  async isRetry(bridgeGame, bridge, length) {
    const gameCommand = await InputView.readGameCommand();
    if (gameCommand === 'R') {
      bridgeGame.retry();
      return await this.crossBridge(bridgeGame, bridge, length);
    }
    if (gameCommand === 'Q') {
      return;
    }
  }

  printProcess(bridge, bridgeGame, index) {
    const bridgePosition = bridge.slice(0, index + 1);
    const map = this.printHelper(bridgePosition, bridgeGame.getResult());
    OutputView.printMap(map);
  }

  // eslint-disable-next-line max-lines-per-function
  printHelper(bridgePosition, userPosition) {
    const map = { U: [], D: [] };
    const Opposition = { U: 'D', D: 'U' };
    userPosition.forEach((position, index) => {
      map[Opposition[position]].push(' ');
      if (bridgePosition[index] === position) {
        map[position].push('O');
      }
      if (bridgePosition[index] !== position) {
        map[position].push('X');
      }
    });
    return map;
  }
}
