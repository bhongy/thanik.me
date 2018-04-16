import { Container } from './Container';

const uri = {
  twitter: 'https://twitter.com/bhongbhibhat',
  github: 'https://github.com/bhongy',
  frantic: 'http://frantic.im/writing/',
  nextjs: 'https://github.com/zeit/next.js',
};

const Credits = () => (
  <React.Fragment>
    <div className="credits">
      <Container>
        Site inspired by <a href={uri.frantic}>Alex Kotliarskyi's Website</a>
        {' • '}
        Site built with <a href={uri.nextjs}>Next.js</a>.
      </Container>
    </div>
    <style jsx>{`
      .credits {
        padding: 0.75rem 0;
        font-size: 0.75rem;
        text-align: center;
        background-color: #444;
        color: #ddd;
      }

      a {
        color: #fff;
        text-shadow: initial;
        background-image: initial;
      }
    `}</style>
  </React.Fragment>
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
