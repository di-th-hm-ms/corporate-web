import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Header from "../components/Header";
import Footer from "../components/Footer";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>QR Menu Solutions for Restaurants</title>
        <meta
          name="description"
          content="Innovative QR code-based digital menu solutions for restaurants and cafes in Japan."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <main>
        <section className="hero bg-gray-100 p-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold">
              Transforming Dining Experiences with Digital Menus
            </h1>
            <p className="text-xl my-4">
              Innovative and customizable QR code-based menu solutions for your
              restaurant.
            </p>
            <Link href="/services">
              <span className="bg-blue-500 text-white py-2 px-4 rounded">
                Discover Our Services
              </span>
            </Link>
          </div>
          {/* Optionally include an image or illustration */}
        </section>

        <section className="features py-8">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold text-center">
              Why Choose Our Digital Menu?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
              {/* Feature 1 */}
              {/* Feature 2 */}
              {/* Feature 3 */}
            </div>
          </div>
        </section>

        <section className="testimonials bg-gray-100 py-8">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold text-center">
              Hear From Our Clients
            </h2>
            {/* Testimonials carousel or grid */}
          </div>
        </section>

        <section className="call-to-action py-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold">
              Ready to Modernize Your Menu?
            </h2>
            <Link href="/contact">
              <span className="bg-green-500 text-white py-2 px-4 rounded mt-4">
                Get Started Today
              </span>
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Home;
