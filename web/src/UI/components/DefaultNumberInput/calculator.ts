class Calculator {

  private max:number;
  private min:number;

  constructor(max = 1000, min = 1) {
    this.max = max;
    this.min = min;
  }

  public add(quantity:number) {
    if(quantity === this.max) return quantity;
    return quantity + 1;
  }

  public subtract(quantity:number) {
    if(quantity === this.min) return quantity;
    return quantity - 1;
  }
}

export default Calculator;