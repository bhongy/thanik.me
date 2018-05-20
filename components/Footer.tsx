import { Container } from './Container';
import s from './Footer.css';

const uri = {
  twitter: 'https://twitter.com/bhongbhibhat',
  github: 'https://github.com/bhongy',
  frantic: 'http://frantic.im/writing/',
  nextjs: 'https://github.com/zeit/next.js',
};

const Credits = () => (
  <>
    <div className={s.credits}>
      <Container>
        Site inspired by <a href={uri.frantic}>Alex Kotliarskyi's Website</a>
        {' • '}
        Site built with <a href={uri.nextjs}>Next.js</a>.
      </Container>
    </div>
  </>
);

const Footer = () => (
  <footer>
    <Container>
      <p>
        See what I'm upto on <a href={uri.twitter}>Twitter</a> and{' '}
        <a href={uri.github}>Github</a>.
      </p>
    </Container>
    <Credits />
  </footer>
);

export { Footer };
