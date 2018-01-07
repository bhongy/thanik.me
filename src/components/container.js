import React from 'react';
import s from './container.module.css';

const Container = ({ children }) => (
  <div className={s.container}>{children}</div>
);

export default Container;
