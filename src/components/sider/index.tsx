'use client';
import { useState } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import { Layout, Menu } from 'antd';
import type { MenuProps } from 'antd/lib';
import {
  HomeOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UserOutlined,
} from '@ant-design/icons';

import './sider.scss';

const AntdSider = Layout.Sider;
type MenuItem = Required<MenuProps>['items'][number];

export default function Sider() {
  // 当前路由地址
  const pathname = usePathname();
  // 路由hook
  const router = useRouter();

  // 左侧导航的开合状态
  const [collapsed, setCollapsed] = useState(false);

  const items: MenuItem[] = [
    {
      label: '首页',
      key: '/home',
      icon: <HomeOutlined />,
    },
    {
      label: '关于我们',
      key: '/about',
      icon: <UserOutlined />,
    },
  ];

  // Menu中每个item的点击事件
  const onItemClick: MenuProps['onClick'] = (item) => {
    // 路由跳转
    router.push(item.key);
  };

  // 切换左侧导航开合状态
  const onCollapse = () => {
    setCollapsed(!collapsed);
  };

  // 左侧导航展开时的宽度
  const fullWidth = 200;
  // 左侧导航收起时的宽度
  const collapsedWidth = 49;

  return (
    <AntdSider
      className="M-sider"
      trigger={null}
      collapsed={collapsed}
      collapsible
      collapsedWidth={collapsedWidth}
      width={fullWidth}
    >
      <div className="sider-main">
        <Menu
          mode="inline"
          selectedKeys={[pathname]}
          items={items}
          className="sider-menu"
          onClick={onItemClick}
        ></Menu>
        <div
          className="sider-footer"
          onClick={onCollapse}
          style={{ color: '#ffffff' }}
        >
          {collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
        </div>
      </div>
    </AntdSider>
  );
}
