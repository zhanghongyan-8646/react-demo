# React + TypeScript + Vite

- 创建项目
```bash
npm create vite@latest
```
- 安装依赖
```bash
npm install
```
- 启动项目
```bash
npm run dev

- 打包项目
```bash
npm run build
```
- 预览打包后的项目
```bash
npm run preview
```
- 安装tailwindcss
```bash
npm install -D tailwindcss postcss autoprefixer
```
- 初始化tailwindcss
```bash
npx tailwindcss init -p

```
- 配置tailwindcss
```bash
// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{html,js,ts,jsx,tsx}",  // 新增这一行
  ]
}
- 配置postcss
```bash
// postcss.config.js
module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
}

## 安装shadcn/ui
```bash
npm install @shadcn/ui
```

- 配置tsconfig.json
```bash
  "compilerOptions": {
    "baseUrl": ".",
    "paths": {
      "@/*": ["./src/*"]
    }
  }

- 配置tsconfig.app.json 
```bash
 "compilerOptions": {
    // ...
    "baseUrl": ".",
    "paths": {
      "@/*": [
        "./src/*"
      ]
    }
    // ...
  }

- pnpm add -D @types/node

####### vite-config.ts

import path from "path"
import tailwindcss from "@tailwindcss/vite"
import react from "@vitejs/plugin-react"
import { defineConfig } from "vite"

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
})


## 安装json-server
```bash
npm install -g json-server
```
- package.json 启动json-server
```bash
json-server --watch db.json --port 3001
```
