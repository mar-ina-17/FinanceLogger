import { FormatterInterface } from "../interfaces/FormatterInterface";

export class Invoice implements FormatterInterface {
  constructor(
    readonly client: string,
    private details: string,
    public amount: number
  ) {}

  format() {
    return `${this.client} owes £ ${this.amount}`;
  }
}
