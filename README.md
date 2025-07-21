# 🌻 Next.js 夏日练手项目

> 一个用来熟悉 Next.js 15 新特性的实验性项目，就像夏天里的一次技术探险

## 📖 项目初心

作为一个对新技术充满好奇的开发者，我总是想要第一时间体验最新的框架特性。这个项目就是我对 Next.js 15 的一次深度探索，从 App Router 到 Parallel Routes，从 Intercepting Routes 到 Server Components，我想要把这些概念都实践一遍。

项目虽小，但五脏俱全——包含了现代前端开发中常见的各种场景和模式。

## ✨ 技术特色

### 🏗️ 架构亮点
- **Next.js 15** - 体验最新的 App Router 和 React 19
- **Parallel Routes** - 实现复杂的页面布局和同时渲染多个页面
- **Intercepting Routes** - 优雅的模态框路由解决方案
- **Server Components** - 服务端渲染的组件架构
- **TypeScript** - 完整的类型支持

### 🎨 UI & 交互
- **Ant Design v5** - 企业级 UI 组件库
- **Sass/SCSS** - 灵活的样式预处理
- **主题切换** - 支持明暗主题动态切换
- **响应式设计** - 适配各种设备屏幕

### 🔧 工程化
- **Turbopack** - 极速的开发构建工具
- **ESLint** - 代码质量保证
- **Docker** - 容器化部署支持
- **Mock 数据** - 使用 Mock.js 生成测试数据

## 🗂️ 项目结构

```
src/
├── app/                        # App Router 路由目录
│   ├── (entry)/               # 路由组 - 主要页面入口
│   │   ├── @detailModal/      # 平行路由 - 详情模态框
│   │   ├── about/             # 关于页面
│   │   │   ├── @company1/     # 平行路由 - 公司1信息
│   │   │   └── @company2/     # 平行路由 - 公司2信息
│   │   ├── detail/[id]/       # 动态路由 - 详情页
│   │   └── home/              # 首页
│   ├── api_server_mock/       # 模拟 API 路由
│   └── login/                 # 登录页面
├── components/                # 全局组件
│   ├── header/               # 顶部导航
│   ├── sider/                # 侧边栏
│   ├── loading/              # 加载组件
│   └── themeModal/           # 主题切换模态框
├── common/                   # 静态资源
│   ├── images/              # 图片资源
│   └── styles/              # 全局样式
└── api/                     # API 相关
    ├── client.tsx           # 客户端 API
    └── server.tsx           # 服务端 API
```

## 🚀 快速开始

### 环境要求
- Node.js 18.18+ 
- npm 或 yarn 或 pnpm

### 安装依赖
```bash
npm install
# 或
yarn install
# 或
pnpm install
```

### 开发模式
```bash
npm run dev
```

项目将启动在 [http://localhost:3000](http://localhost:3000)

### 构建生产版本
```bash
# 构建项目
npm run build

# 启动生产服务
npm run start
```

### 代码检查
```bash
npm run lint
```

## 🐳 Docker 部署

项目提供了完整的 Docker 化部署方案：

### 构建镜像
```bash
# 先构建项目
npm run build

# 构建 Docker 镜像
docker build -f dockerfile-nodejs-ssr -t next-summer-project .
```

### 运行容器
```bash
# 使用 docker-compose (推荐)
docker-compose -f compose-nodejs-ssr.yaml up -d

# 或直接运行容器
docker run -p 3000:3000 next-summer-project
```

## 🎯 核心功能演示

### 🏠 首页 (`/home`)
- 展示文章列表
- 服务端渲染的数据获取
- 响应式卡片布局

### 📝 详情页面 (`/detail/[id]`)
- 动态路由参数
- 服务端预渲染
- 支持路由拦截的模态框显示

### ℹ️ 关于页面 (`/about`)
- 演示 Parallel Routes 的强大功能
- 同时展示多个独立的路由内容
- 嵌套布局的最佳实践

### 🌙 主题切换
- 全局主题状态管理
- CSS 变量动态切换
- 用户偏好持久化

## 🛠️ 技术栈详解

| 技术 | 版本 | 用途 |
|------|------|------|
| Next.js | 15.4.2 | React 全栈框架 |
| React | 19.1.0 | 前端框架 |
| TypeScript | 5.x | 类型系统 |
| Ant Design | 5.26.6 | UI 组件库 |
| Sass | 1.89.2 | CSS 预处理器 |
| Axios | 1.10.0 | HTTP 客户端 |
| Mock.js | 1.1.0 | 数据模拟 |

## 📚 学习收获

通过这个项目，我深入理解了：

1. **App Router** 的路由机制和最佳实践
2. **Parallel Routes** 如何优雅地处理复杂页面布局
3. **Intercepting Routes** 在用户体验优化中的应用
4. **Server Components** 与 **Client Components** 的协作模式
5. Next.js 15 的性能优化特性


## 🔗 相关链接

- [Next.js 官方文档](https://nextjs.org/docs)
- [Ant Design 组件库](https://ant.design)
- [React 19 新特性](https://react.dev)

---

*在代码的世界里，每一次探索都是一次成长。希望这个小项目能给同样热爱技术的你带来一些启发！* 🌟