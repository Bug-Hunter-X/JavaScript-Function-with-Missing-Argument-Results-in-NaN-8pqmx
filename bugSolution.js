function foo(a, b) {  if (b === undefined) {    return a; // Or handle the missing argument appropriately  }  return a + b;}console.log(foo(2, 3)); // 5console.log(foo(2)); // 2