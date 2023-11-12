import Head from "next/head";
import Link from "next/link";

const Services = () => {
  return (
    <>
      <Head>
        <title>Our Services - QR Menu Solutions</title>
      </Head>
      <main>
        <section className="py-8">
          <div className="container mx-auto text-center">
            <h1 className="text-4xl font-bold">Our Services</h1>
            <p className="text-xl mt-4">
              Explore how we can transform your dining experience.
            </p>
            {/* Details about each service offered */}
          </div>
        </section>
        {/* Additional sections or features can be added here */}
      </main>
    </>
  );
};

export default Services;
