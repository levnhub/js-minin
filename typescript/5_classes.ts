class TypeScript {
  version: string;

  constructor(version: string) {
    this.version = version;
  }

  info(name: string) {
    return `[${name}]: Typescript version is ${this.version}`;
  }
}

// Classic syntax
// class Car {
// 	readonly model: string
// 	readonly numberOfWheels: number = 4

// 	constructor(theModel: string) {
// 		this.model = theModel
// 	}
// }

// Simplest syntax
class Car {
  readonly numberOfWheels: number = 4;
  constructor(readonly model: string) {}
}

// ================

class Animal {
  protected voice: string = '';
  public color: string = 'black';

  constructor() {
    this.go(); // it is allowed
  }

  private go() {
    console.log('Go'); // Go
  }
}

class Cat extends Animal {
  public setVoice(voice: string): void {
    this.voice = voice;
    // this.go() // not allowed for "private" property
  }
}

const cat = new Cat();
// cat.voice // not allowed with "protected" property
cat.setVoice('test');
console.log(cat.color); // black

// ================

abstract class Component {
  abstract render(): void;
  abstract info(): string;
}

class AppComponent extends Component {
  render(): void {
    console.log('Component on render');
  }

  info(): string {
    return 'This is info';
  }
}

const appComponent = new AppComponent();

appComponent.render(); // Component on render
console.log(appComponent.info()); // This is info
