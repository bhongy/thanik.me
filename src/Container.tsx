import type {ReactNode} from 'react';
import s from './Container.module.css';

// Container provides max-width and centralize children (content) within a wrapper
export function Container({children}: {children: ReactNode}) {
  return <div className={s.container}>{children}</div>;
}
