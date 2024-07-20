## About DataTypes
 - `string` for words, phrases, or any alphanumeric data for presentation, not calculation.
- `char` for a single alphanumeric character.
- `int` for a whole number.
- `decimal` for a number with a fractional component.
- `bool` for a true/false value.

## What is a variable?
- A variable is a container for storing a type of value.
- Variables are important because their values can change, or vary, throughout the execution of a program.
- Variables can be assigned, read, and changed. You use variables to store values that you intend to use in your code.
- A variable name is a human-friendly label that the compiler assigns to a memory address.
- When you want to store or change a value in that memory address, or whenever you want to retrieve the stored value, you just use the variable name you created.

## What are implicitly typed local variables?
- An implicitly typed local variable is created by using the var keyword followed by a variable initialization. For example:
```cs
var message = "Hello world!";
```
- The `var` keyword tells the C# compiler that the data type is implied by the assigned value.
- After the type is implied, the variable acts the same as if the actual data type had been used to declare it.
- The var keyword is used to save on keystrokes when types are lengthy or when the type is obvious from the context.
> [!NOTE]
> - Other programming languages use the var keyword differently.
> - In C#, variables are assigned a type by the compiler regardless of whether you use the actual data type name or allow the compiler to imply the data type.
> - In other words, the type is locked in at the time of declaration and therefore will never be able to hold values of a different data type.
> - Variables using the var keyword must be initialized.

## Why use the var keyword?
- The var keyword has an important use in C#. Many times, the type of a variable is obvious from its initialization.
- In those cases, it's simpler to use the var keyword.
- The var keyword can also be useful when planning the code for an application.
- When you begin developing code for a task, you may not immediately know what data type to use.
- Using var can help you develop your solution more dynamically.

## Verbatim string literal
- A verbatim string literal will keep all whitespace and characters without the need to escape the backslash.
- To create a verbatim string, use the @ directive before the literal string.
```cs
Console.WriteLine(@"    c:\source\repos    
        (this is where your code goes)");
```
output: 
```text
c:\source\repos    
        (this is where your code goes)
```

> [!IMPORTANT]
> - Use character escape sequences when you need to insert a special character into a literal string, like a tab `\t`, new line `\n`, or a double quotation mark `\"`.
> - Use an escape character for the backslash `\\` when you need to use a backslash in all other scenarios.
> - Use the `@` directive to create a verbatim string literal that keeps all whitespace formatting and backslash characters in a string.
> - Use the `\u` plus a four-character code to represent Unicode characters (UTF-16) in a string.
> - Unicode characters may not print correctly depending on the application.

## Concatenate multiple variables and literal strings
- You can perform several concatenation operations in the same line of code.
```cs
string firstName = "Bob";
string greeting = "Hello";
string message = greeting + " " + firstName + "!";
Console.WriteLine(message);
```
output:
```
Hello Bob!
```
