import s from './Container.css';

const Container = ({ children }) => (
  <div className={s.container}>{children}</div>
);

export { Container };
