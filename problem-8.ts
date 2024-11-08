{
  //problem-8:

  function validateKeys<T>(obj: T, keys: (keyof T)[]) {
    let result;
    for (const key of keys) {
      for (let a in obj) {
        if (key === a) {
          result = true;
        } else {
          result = false;
        }
      }
    }
    return result;
  }

  //   const person = { name: "Alice", age: 25, email: "alice@example.com" };
  //   console.log(validateKeys(person, ["name", "age", "email"]));
}
