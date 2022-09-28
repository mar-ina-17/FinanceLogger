import { FormatterInterface } from "../interfaces/FormatterInterface";

export class Payment implements FormatterInterface {
  constructor(
    readonly recipient: string,
    private details: string,
    public amount: number
  ) {}

  format() {
    return `${this.recipient} is owed £ ${this.amount}`;
  }
}
