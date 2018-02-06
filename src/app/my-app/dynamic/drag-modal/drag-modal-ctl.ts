export class ModalControl {
  private _resolve: (result?: any) => void;
  private _reject: (reason?: any) => void;

  result: Promise<any>;

  constructor() {
    this.result = new Promise((resolve, reject) => {
      this._resolve = resolve;
      this._reject = reject;
    });
    this.result.then(null, () => {});
  }

  /**
   * Can be used to close a modal, passing an optional result.
   */
  close(result?: any): void {
      this._resolve(result);
  }

  /**
   * Can be used to dismiss a modal, passing an optional reason.
   */
  dismiss(reason?: any): void {
    this._reject(reason);
  }
}
