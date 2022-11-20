export default function Contact() {
  return (
    <div>
      <h1>Contact page</h1>
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
