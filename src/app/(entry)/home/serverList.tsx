import { Suspense } from 'react';

import Link from 'next/link';
import Card from 'antd/es/card/Card';
import Loading from '@/components/loading';
import { apiReqs } from '@/api/server';
import styles from './serverList.module.scss';

type ItemType = {
  id: number;
  title: string;
};

export default async function ServerList() {
  const List = async () => {
    const response = await apiReqs.getArticleList();
    if (response.success) {
      return response.data.list.map((item: ItemType, index: number) => {
        return (
          <div className={styles['item-con']} key={item.id}>
            <div className={styles['col-id']}>{item.id}</div>
            <div className={styles['col-title']}>
              <Link href={{ pathname: '/detail' + item.id }}>{item.title}</Link>
            </div>
          </div>
        );
      });
    }
    return response.message;
  };
  return (
    <Card className={styles['M-serverList']} title="服务端获取数据列表">
      <Suspense fallback={<Loading />}>
        <List />
      </Suspense>
    </Card>
  );
}
