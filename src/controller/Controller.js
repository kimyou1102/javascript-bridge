import InputView from '../view/InputView.js';
import OutputView from '../view/OutputView.js';

export default class Controller {
  async start() {
    OutputView.printGreeting();
    const length = await InputView.readBridgeSize();
  }
}
