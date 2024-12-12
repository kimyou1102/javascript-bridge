import OutputView from '../view/OutputView.js';

export default class Controller {
  async start() {
    OutputView.printGreeting();
  }
}
