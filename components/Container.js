const Container = ({ children }) => (
  <React.Fragment>
    <div className="container">{children}</div>
    <style jsx>{`
      .container {
        margin: 0 auto;
        padding: 0 2rem;
        max-width: 45rem;
      }
    `}</style>
  </React.Fragment>
);

export { Container };
