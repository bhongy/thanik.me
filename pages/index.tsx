import { Container } from '../components';
import { learningMaterialEntries } from '../lib/learning-material';
import { inspiringVideosEntries } from '../lib/inspiring-videos';
import s from './index.css';

const Section = ({ children }) => (
  <section className={s.Section}>{children}</section>
);

Section.Title = ({ children }) => (
  <h3 className={s.Section__Title}>{children}</h3>
);

Section.Description = ({ children }) => (
  <p className={s.Section__Description}>{children}</p>
);

const Introduction = () => (
  <Section>
    <p>
      Hello! My name is Thanik Bhongbhibhat. I'm a full-stack engineer with
      interest in Data Modeling and Large-scale Application Design. This is a
      collection of my personal posts about web development and programming.
    </p>
  </Section>
);

const Posts = () => <Section>[List to come ...]</Section>;

const LearningMaterial = () => (
  <Section>
    <Section.Title>Learning Material</Section.Title>
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

const InspiringVideos = () => (
  <Section>
    <Section.Title>Inspiring Videos</Section.Title>
    <Section.Description>
      Some videos that made the most profound impact on the way I think about
      software development.
    </Section.Description>
    <ul>
      {inspiringVideosEntries.map(({ id, title, url }) => (
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
    <InspiringVideos />
  </Container>
);

export default IndexPage;
