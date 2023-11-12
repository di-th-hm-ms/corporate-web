import Head from "next/head";

const About = () => {
  return (
    <>
      <Head>
        <title>About Us - QR Menu Solutions</title>
      </Head>
      <main>
        <section className="py-8">
          <div className="container mx-auto text-center">
            <h1 className="text-4xl font-bold">About Us</h1>
            <p className="text-xl mt-4">
              Learn more about our journey and mission.
            </p>
            {/* Information about the company, team, and mission */}
          </div>
        </section>
        {/* Additional sections for team, history, etc., can be added here */}
      </main>
    </>
  );
};

export default About;
