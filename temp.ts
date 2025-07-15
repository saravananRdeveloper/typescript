class Temperature {
  private _celsius: number = 0;
 
  constructor(celsius: number) {
    this.celsius = celsius;
  }
 
  set celsius(value: number) {
    if (value < -273.15) {
      console.log("Error: Temperature can't be below absolute zero (-273.15°C)");
    } else {
      this._celsius = value;
    }
  }
 

  get fahrenheit(): number {
    return this._celsius * 9 / 5 + 32;
  }
 
  show(): void {
    console.log(`Celsius: ${this._celsius}°C`);
    console.log(`Fahrenheit: ${this.fahrenheit}°F`);
  }
}
 

 
const temp1 = new Temperature(25);
temp1.show();
 
console.log("\nSetting temperature to -300°C (invalid):");
temp1.celsius = -300; 
 
console.log("\nSetting temperature to 100°C:");
temp1.celsius = 100;
temp1.show();