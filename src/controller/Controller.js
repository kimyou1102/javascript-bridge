import InputView from '../view/InputView.js';
import OutputView from '../view/OutputView.js';
import BridgeMaker from '../BridgeMaker.js';
import BridgeRandomNumberGenerator from '../BridgeRandomNumberGenerator.js';
import BridgeGame from '../BridgeGame.js';

export default class Controller {
  async start() {
    OutputView.printGreeting();
    const length = await InputView.readBridgeSize();
    const bridge = BridgeMaker.makeBridge(length, BridgeRandomNumberGenerator.generate);
    const bridgeGame = new BridgeGame(bridge);
    await this.crossBridge(bridgeGame, bridge, length);
  }

  async crossBridge(bridgeGame, bridge, length) {
    for (let i = 0; i < length; i++) {
      const moving = await InputView.readMoving();
      const isMove = bridgeGame.move(moving, bridge[i]);
      this.printProcess(bridge, bridgeGame, i);
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
