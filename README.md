TypeScript Transformer Log Source File Name and Line Automatically Demo
=============================================================

我们在log时有个痛点，输出信息时无法方便附带其被调用时所在文件和行信息，导致log多的时候难以快速定位。

是否可以利用typescript的AST transformer功能，在调用某个log函数时，自动把其所在的文件路径和行数以某种形式隐式传进去

```
npm install
npm run demo
```
