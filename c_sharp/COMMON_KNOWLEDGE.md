## What is a programming language?
- Programming languages like C# let you write instructions that you want the computer to carry out.
- Each programming language has its own syntax, but after learning your first programming language and attempting to learn another one, you'll quickly realize that they all share many similar concepts.
- A programming language's job is to allow a human to express their intent in a human-readable and understandable way.
- The instructions you write in a programming language are called "source code" or just "code". Software developers write code.
At this point, a developer can update and change the code, but the computer can't understand the code. The code first must be compiled into a format that the computer can understand.

## What is compilation?
- A special program called a compiler converts your source code into a different format that the computer's central processing unit (CPU) can execute. 
- When you used the green Run button in the previous unit, the code you wrote was first compiled, then executed.

> [!IMPORTANT]
> Why does code need to be compiled? Although most programming languages seem cryptic at first, they can be more easily understood by humans than the computer's preferred language.
> The CPU understands instructions that are expressed by turning thousands or millions of tiny switches either on or off.
> Compilers bridge these two worlds by translating your human-readable instructions into a computer-understandable set of instructions.

## What is syntax?
- The rules for writing C# code is called syntax. 
- Just like human languages have rules regarding punctuation and sentence structure, computer programming languages also have rules.
- Those rules define the keywords and operators of C# and how they are put together to form programs.

--- 
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
> Other programming languages use the var keyword differently. In C#, variables are assigned a type by the compiler regardless of whether you use the actual data type name or allow the compiler to imply the data type. In other words, the type is locked in at the time of declaration and therefore will never be able to hold values of a different data type.
> Variables using the var keyword must be initialized.
## Why use the var keyword?
- The var keyword has an important use in C#. Many times, the type of a variable is obvious from its initialization.
- In those cases, it's simpler to use the var keyword.
- The var keyword can also be useful when planning the code for an application.
- When you begin developing code for a task, you may not immediately know what data type to use.
- Using var can help you develop your solution more dynamically.
--- 
<!-- > [!IMPORTANT]
> Hello important

> [!TIP]
> Hello tip -->
