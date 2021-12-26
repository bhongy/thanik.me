import * as Section from '@/Section';
import {Container} from '@/Container';
import {learningMaterialEntries} from '@/data/learning-material';
import {inspiringVideosEntries} from '@/data/inspiring-videos';

export default function Home() {
  return (
    <Container>
      <Introduction />
      <Posts />
      <LearningMaterial />
      <InspiringVideos />
    </Container>
  );
}

const Introduction = () => (
  <Section.Wrapper>
    Hello! My name is Thanik Bhongbhibhat. I&apos;m a full-stack engineer with
    interest in Data Modeling and Large-scale Application Design. This is a
    collection of my personal posts about web development and programming.
  </Section.Wrapper>
);

const Posts = () => <Section.Wrapper>[List to come ...]</Section.Wrapper>;

const LearningMaterial = () => (
  <Section.Wrapper>
    <Section.Title>Learning Material</Section.Title>
    <ul>
      {learningMaterialEntries.map(({id, title, url}) => (
        <li key={id}>
          <a href={url}>{title}</a>
        </li>
      ))}
    </ul>
  </Section.Wrapper>
);

const InspiringVideos = () => (
  <Section.Wrapper>
    <Section.Title>Inspiring Videos</Section.Title>
    <Section.Description>
      Some videos that made the most profound impact on the way I think about
      software development.
    </Section.Description>
    <ul>
      {inspiringVideosEntries.map(({id, title, url}) => (
        <li key={id}>
          <a href={url}>{title}</a>
        </li>
      ))}
    </ul>
  </Section.Wrapper>
);
