# JavaScript data 301
## Understanding immutabilty comes down to understanding how data is stored in memory.

**DEFINTION OF IMMUTABILITY**
Primitive data types are immutable. Immutabily means that whenever a variable is declared, it lives at a unique address in memory and if it is later reinitialized (e.g. reassigned), it will live at a new, unique address. If a variable is initialized by reference, instead of by value, its unique address points to the referred address.

**LIST OF PRIMITIVE DATA TYPES**
* strings
* booleans 
* numbers
* null
* undefined

**EXAMPLE**
```
let age = 32; // initializes by value, it gets a unique address (e.g. Hx78)    <-- this is an address example 
let marysAge= age; // initalizes by refrence, it gets a unique address (e.g. Rw33) but this doesn't hold a value, it simply points to Hx78 (the original address) 
age = 33 // with reinitialization the new value is stored at a new adress (e.g. Xa15)
  
    "you cannot keep a new value with the same name and keep the same address. If you get a new value with the same variable name you're going to get a new address"
```
**DEFINTION OF MUTABILITY**
Collections of primitive data types are mutable, which means that when they are modified or updated, the data is not stored at a new address but remains at the original address when the variable was first declared. 

**LIST OF COLLECTIONS**
* arrays 
* objects 
