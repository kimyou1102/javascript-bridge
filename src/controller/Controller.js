import InputView from '../view/InputView.js';
import OutputView from '../view/OutputView.js';
import BridgeMaker from '../BridgeMaker.js';
import BridgeRandomNumberGenerator from '../BridgeRandomNumberGenerator.js';

export default class Controller {
  async start() {
    OutputView.printGreeting();
    const length = await InputView.readBridgeSize();
    const bridge = BridgeMaker.makeBridge(length, BridgeRandomNumberGenerator.generate);
  }
}
