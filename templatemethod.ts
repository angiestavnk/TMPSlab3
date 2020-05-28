class BaseClass {
  public templateMethod(): void {
    this.actionA();
    this.actionB();
    this.actionC();
  }

  public actionA(): void {
    console.log('Base A action')
  };

  public actionB(): void {
    console.log('Base B action')
  }
  public actionC(): void {
    throw new Error('should be overwrited by Class A and B');
  }
}

class ConcreteAClass extends BaseClass {
    actionC(): void {
        console.log('Method C is overwrited by class A')
    }
}

class ConcreteBClass extends BaseClass {
    actionC(): void {
        console.log('Method C is overwrited by class B')
    }
}

(function main() {
  const a = new ConcreteAClass();
  const b = new ConcreteBClass();


  a.templateMethod();
  b.templateMethod();

})();