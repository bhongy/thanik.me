import type {ReactNode} from 'react';
import {Footer} from './Footer';
import s from './Page.module.css';

export function Page({children}: {children: ReactNode}) {
  return (
    <div className={s.page}>
      <main className={s.pageContent}>{children}</main>
      <Footer />
    </div>
  );
}
