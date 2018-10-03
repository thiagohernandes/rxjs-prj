export class Funcoes {
  // vars
  var1: string;

  // constructor
  constructor(private va: string) {
    this.var1 = va;
    console.log(this.var1);
  }

  // methods
  sizeString(p: string): number {
      return p.length;
  }

}
