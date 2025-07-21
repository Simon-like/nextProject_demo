/**
 * 以客户端渲染方式的 <AntdClientProvider> 组件，不会导致通过插槽方式内嵌的 children 变成客户端渲染
 * <AntdClientProvider> 的唯一职责是决定 children 最终会被放置在何处。
 * 在父服务端组件中（layout.tsx），可以同时导入客户端组件和服务端组件，并将服务端组件通过插槽方式作为客户端的子组件传递。
 * 通过这种方法，客户端组件和服务端组件是解耦的，各自独立渲染，并且服务端组件先于客户端组件渲染。
 * 但是，在客户端组件通过import导入服务端组件的方式，会导致服务端组件强制转化为客户端组件，甚至报错
 * 如果服务端组件中有无法基于浏览器运行的方法，将导致报错
 */

import type { Metadata } from 'next';

import '@/common/styles/frame.scss';
import AntdClientProvider from './antdClientProvider';

export const metadata: Metadata = {
  title: 'Simon Next_App',
  description: 'Next.js 练习项目',
  keywords: 'Next.js, React, 前端',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <AntdClientProvider>{children}</AntdClientProvider>
      </body>
    </html>
  );
}
