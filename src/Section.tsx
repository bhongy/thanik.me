import type {ReactNode} from 'react';
import s from './Section.module.css';

export function Wrapper({children}: {children: ReactNode}) {
  return <section className={s.wrapper}>{children}</section>;
}

export function Title({children}: {children: ReactNode}) {
  return <h3 className={s.title}>{children}</h3>;
}

export function Description({children}: {children: ReactNode}) {
  return <p className={s.description}>{children}</p>;
}
