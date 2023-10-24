export class Foo {
  private bar = this.settings.key;

  constructor(private settings: { key: string }) {}

  getBar() {
    console.log(this.bar)
    return this.bar;
  }
}
