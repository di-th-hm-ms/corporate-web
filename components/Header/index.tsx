import Link from "next/link";

const Header = () => {
  return (
    <header className="flex justify-between items-center p-4 bg-white shadow-md">
      <div className="logo">
        {/* Replace with your logo */}
        <Link href="/">Logo</Link>
      </div>
      <nav>
        <ul className="flex space-x-4">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/services">Services</Link>
          </li>
          <li>
            <Link href="/about">About Us</Link>
          </li>
          <li>
            <Link href="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
