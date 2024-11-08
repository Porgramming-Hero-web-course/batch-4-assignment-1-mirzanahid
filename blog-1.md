# The significance of union and intersection types in Typescript.

Union and intersection types are used for multiple use cases and type-checking. These types are very useful and flexible for types defined in typescript.


## 1. Union Types (|):


### 1. Type Flexibility:

Union types allow to define a variable or parameter to get values from multiple types. Where each type is separated by a pipe (|) sign. It's very useful when a variable or parameter value varies on multiple types. Also, it's giving flexibility to types defined. 

For Example:
```
let result: number | string;
result = 2;
result = "two";

// In the Avobe example, there are two types defined for the result variable. result variable can take one type, like a number or string, as a value at a time.

```

### 2. Ensure Type Safety:

Union Types prevent runtime errors. When API's return multiple types, the Typescript compiler catches invalid assignments at compile times. It's very useful when using API's or third party libraries.

### 3. Control Over Input and Return Types:

Union types give control over what a function can take as an input and retrun. Thus, a function can be used in multiple cases with multiple input types and return types.

For Example :

```
function add(x: number| string, y: number| string): number|string{
return x+y;
}

//Case 1:
input: add(5,5);
return: 10;
//Case 2: 
input: add("First Name","Last Name")
return: "First Name Last Name"

//Here we can see that add() function can used for multiple cases with multiple types.
```



<br>
<br>


## 2. Intersection Types (&):

### 1. Combining Types:

Intersection types used For combined multiple types in one. Combined type will get all the properties from single types. These types are combined by and(&) sign. Intersection types can make very complex and useful types for different case. 

For Example:

```
type Name = { name: string };
type Age = { age: number };

type Person = Name & Age;

const person: Person = {
  name: "Alice",
  age: 30,
};

 // in the above example Person type combined with Name And Age types. Thus Person Type has all the propertise from Name type and Age type. 
```

### 2. Use in Generics:

Intersection types are often utilized in generics to consolidate constraints, particularly in complicated contexts that include various interfaces or types.


### 3. Increase Reusability:

Intersection types can decrease duplication of declaring types. It can combined simple types and can use simple types properties. Thus it can use in different use case.

### 4. Useful Complex Cases:

Intersection types can make very complex types. In different use cases, when we need more complex types, intersection can be useful. It's combined simple types into one and can make complex and multiple use case types. 