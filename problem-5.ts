{
  //problem-5:

  function getProperty<T, k extends keyof T>(obj: T, key: k): T[k] {
    return obj[key];
  }

  const person = { name: "Alice", age: 30 };
  // console.log(getProperty(person, "name"));
}
