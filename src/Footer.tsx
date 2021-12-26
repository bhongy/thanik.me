import {Container} from './Container';
import s from './Footer.module.css';

export function Footer() {
  return (
    <footer>
      <Social />
      <Credits />
    </footer>
  );
}

const uri = {
  twitter: 'https://twitter.com/bhongbhibhat',
  github: 'https://github.com/bhongy',
  frantic: 'http://frantic.im',
  nextjs: 'https://github.com/zeit/next.js',
};

const Social = () => (
  <section className={s.social}>
    <Container>
      See what I&apos;m upto on <a href={uri.twitter}>Twitter</a> and{' '}
      <a href={uri.github}>Github</a>.
    </Container>
  </section>
);

const Credits = () => (
  <section className={s.credits}>
    <Container>
      Site inspired by <a href={uri.frantic}>Alex Kotliarskyi&apos;s Website</a>
      {' • '}
      Site built with <a href={uri.nextjs}>Next.js</a>.
    </Container>
  </section>
);
