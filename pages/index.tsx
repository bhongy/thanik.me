import { Container } from '../components';
import { learningMaterialEntries } from '../lib/learning-material';
import s from './index.css';

const Section = ({ children }) => (
  <section className={s.section}>{children}</section>
);

const Introduction = () => (
  <Section>
    <p>
      Hello! My name is Thanik Bhongbhibhat. I'm a front-end engineer at
      Pinterest with interest in Data Modeling and Large-scale Application
      Design. This is a collection of my personal posts about web development
      and programming.
    </p>
  </Section>
);

const Posts = () => <Section>[List to come ...]</Section>;

const LearningMaterial = () => (
  <Section>
    {/* TODO: design simple, clean header component */}
    <h3>Learning Material</h3>
    {/* TODO: style better component for list of entries */}
    <ul>
      {learningMaterialEntries.map(({ id, title, url }) => (
        <li key={id}>
          <a href={url}>{title}</a>
        </li>
      ))}
    </ul>
  </Section>
);

const IndexPage = () => (
  <Container>
    <Introduction />
    <Posts />
    <LearningMaterial />
  </Container>
);

export default IndexPage;
