import { Container, PageLayout } from '../components';

const IndexPage = () => (
  <PageLayout>
    <Container>
      <p className="introduction">
        Hello! My name is Thanik Bhongbhibhat. I'm a front-end engineer at
        Pinterest with interest in Data Modeling and Large-scale Application
        Design. This is a collection of my personal posts about web development
        and programming.
      </p>
      <p>[List to come ...]</p>
    </Container>
    <style jsx>{`
      .introduction {
        margin-bottom: 2rem;
      }
    `}</style>
  </PageLayout>
);

export default IndexPage;
