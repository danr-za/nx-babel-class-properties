import { Foo } from './Foo';

describe('Foo', () => {
  it('fails', () => {
    const foo = new Foo({ key: 'key' });
    expect(foo.getBar()).toBe('key');
  });
});
