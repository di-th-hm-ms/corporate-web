import Head from "next/head";

const Contact = () => {
  return (
    <>
      <Head>
        <title>Contact Us - QR Menu Solutions</title>
      </Head>
      <main>
        <section className="py-8">
          <div className="container mx-auto text-center">
            <h1 className="text-4xl font-bold">Contact Us</h1>
            <p className="text-xl mt-4">
              We are here to help and answer any question you might have.
            </p>
            {/* Contact form or contact information */}
          </div>
        </section>
        {/* Additional sections for location, FAQ, etc., can be added here */}
      </main>
    </>
  );
};

export default Contact;
