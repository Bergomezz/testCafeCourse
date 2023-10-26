# testDafeCourse

## Most usable functions

```
  //Click
  await t.click('selector', { options });
  // Double Click
  await t.doubleClick('selector', { options });
  //Right Click
  await t.rightClick('selector', { options });
  //Drag Element
  await t.drag('selector', 200, 0, { options });
  // Houver
  await t.hover('selector', { options });
  //Select text
  await t.selectText('selector', { options });
  //Type text
  await t.typeText('seletor', 'text');
  //Press key on command
  await t.pressKey('especify key command');
  //Navigate
  await t.navigateTo('url');
  //Take screenshot
  await t.takeScreenshot();
  await t.takeElementScreenshot();
  //Resize windows
  await t.resizeWindow(800, 600);
```

## Most usable Asserts

```
//Deep Equal
await t.expect('foo').eql('foo', 'message', options);
//Not Deep Equal
await t.expect('foo').notEql('foo');
//OK
await t.expect().ok(true, 'message', options);
//Not OK
await t.expect(true).notOk();
//Contains
await t.expect([1, 2]).contains(3);
Not Contains
await t.expect('foo').notContains('hey');
//Gt (Greater Than)
await t.expect(5).gt(4);
await t.expect(5).gte(5);
//Lt (Lower than)
await t.expect(4).lt(5);
await t.expect(4).lte(4);
//Within
await t.expect({ x: 7 }).within(function () { return this.x > 5; }, 'custom message');
// Not Within
await t.expect(10).notWithin(5, 50);
//Match
await t.expect('foobar').match(/^f/i);
//Not Match
await t.expect('foobar').notMatch(/^b/i);
//Truthy
await t.expect(null).truthy();
//Falsy
await t.expect(undefined).falsy();
//Type of
await t.expect([]).typeOf('array');
//Not Type Of
await t.expect('test').notTypeOf('object');
//Length Of Array
await t.expect(['foo', 'bar']).lengthOf(2);
//Property Of Object
await t.expect({ foo: 'bar' }).property('foo', 'bar');
//Not Property Of Object
await t.expect({ foo: 'baz' }).notProperty('foo', 'bar');
//Nested Properties
await t.expect({ a: { b: { c: 'd' }}}).nestedProperty('a.b.c', 'd);

```

- [Zero Bank Site](https://zero.webappsecurity.com/index.html) - Site that simulate the bank account
