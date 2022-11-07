# Simple reusable component with Vite-React-TS

If you haven't `pnpm`, install it with :

└─ $ ▶ npm install -g pnpm

└─ $ ▶ pnpm create vite

`>` react

`>` typescript

└─ $ ▶ cd vite-project/

└─ $ ▶ pnpm install

---

## Testing

└─ $ ▶ pnpm install -D vitest

└─ $ ▶ pnpm install -D jsdom @testing-library/react

└─ $ ▶ pnpm install -D react-test-renderer

└─ $ ▶ pnpm run test

└─ $ ▶ pnpm run coverage

---

 % Coverage report from c8
-------------------|---------|----------|---------|---------|-------------------
File               | % Stmts | % Branch | % Funcs | % Lines | Uncovered Line #s 
-------------------|---------|----------|---------|---------|-------------------
All files          |   98.86 |    83.33 |     100 |   98.86 |                   
 src               |     100 |      100 |     100 |     100 |                   
  App.tsx          |     100 |      100 |     100 |     100 |                   
 src/components    |   98.46 |       80 |     100 |   98.46 |                   
  Button.tsx       |   97.14 |    66.66 |     100 |   97.14 | 16                
  Header.tsx       |     100 |      100 |     100 |     100 |                   
  TogetherComp.tsx |     100 |      100 |     100 |     100 |                   
-------------------|---------|----------|---------|---------|-------------------