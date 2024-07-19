> `.cs` is the extension for the C# programming language.
### `internal` access modifier:
- Members marked as internal are only accessible within the same assembly.
- An assembly is a unit of deployment that groups related code and resources. It's typically a single DLL (Dynamic Link Library) or EXE (executable) file.
- This means other classes in the same project can access the member, but classes in a different project (even if it references the same assembly) cannot.

### `protecteddd internal` access modifier:
- Members marked as protected internal combine the accessibility of protected and internal.
- They are accessible from:
 - Any code within the same assembly (like internal).
 - Derived classes in other assemblies (unlike internal).

---

### relationships:
- class - class => `is-a` relationship.
- object - class => `has-a` relationship.

---

### interface implementation: 
- observe the below sample code explaining the `interface` implementaion.
```cs
interface i1 {
  void hello();
}

interface i2 {
  void greeting();
}

public class c : i1, i2 {
  void hello() {
    Console.WriteLine("Hello");
  }
  void greeting() {
    Console.WriteLine("Greeting");
  }
  static void Main(string[] args) {
    c c1 = new c();
    c1.hello();
    c1.greeting();
  }
}
```




### 📓 note:
- interfaces cannot contain constructors and fields.
