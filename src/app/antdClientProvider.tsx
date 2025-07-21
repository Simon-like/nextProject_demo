'use client';

/**
 * @ant-design/v5-patch-for-react-19是一个 为 React 19 提供兼容性补丁的客户端运行代码。
 * 在运行时动态修改 React 的内部 API 或 hook 行为，避免崩溃或报错，不能在服务端打包阶段执行，只能在浏览器运行。
 * npm install @ant-design/v5-patch-for-react-19 --save
 * @ant-design/nextjs-registry 用来处理 Antd 样式的服务端注入和客户端同步问题。
 * 它的主要作用：
 * 在 SSR 时收集组件样式&#x20;
 * 在客户端 hydration 时将样式注入`<script>`标签中
 * 避免样式闪烁或丢失
 * AntdRegistry 依赖于浏览器的环境和 React 的客户端能力进行样式注入和同步，所以不能在纯服务端组件里使用。
 */
import '@ant-design/v5-patch-for-react-19';
import { AntdRegistry } from '@ant-design/nextjs-registry';
import { ConfigProvider, theme } from 'antd';
import zhCN from 'antd/locale/zh_CN';

import { useTheme } from '@/components/themeContext';

const { darkAlgorithm, defaultAlgorithm } = theme;

export default function AntdClientProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const { dark, colorPrimary } = useTheme();

  const antdTheme: Parameters<typeof ConfigProvider>[0]['theme'] = {
    algorithm: dark ? darkAlgorithm : defaultAlgorithm,
    token: colorPrimary ? { colorPrimary } : undefined,
  };
  return (
    <AntdRegistry>
      <ConfigProvider locale={zhCN} theme={antdTheme}>
        {children}
      </ConfigProvider>
    </AntdRegistry>
  );
}
