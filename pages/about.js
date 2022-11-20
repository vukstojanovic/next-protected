export default function About() {
  return (
    <div>
      <h1>About page</h1>
    </div>
  );
}

export async function getStaticProps() {
  return {
    props: {
      protected: true,
    },
  };
}
