import { Footer } from './Footer';
import s from './PageLayout.css';

const PageLayout = ({ children }) => (
  <>
    <div className={s.page}>
      <div className={s.pageContent}>{children}</div>
      <Footer />
    </div>
  </>
);

export { PageLayout };
