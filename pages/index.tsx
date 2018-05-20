import { Container } from '../components';
import s from './index.css';

const IndexPage = () => (
  <Container>
    <p className={s.introduction}>
      Hello! My name is Thanik Bhongbhibhat. I'm a front-end engineer at
      Pinterest with interest in Data Modeling and Large-scale Application
      Design. This is a collection of my personal posts about web development
      and programming.
    </p>
    <p>[List to come ...]</p>
  </Container>
);

export default IndexPage;
