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
    }
  }
}
