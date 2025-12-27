export default function Navbar() {
  return (
    <header>
      {/* Top Info Bar */}
      <div className="bg-green-900 text-white text-sm px-6 py-2 flex justify-between">
        <span>+91 2584142142</span>
        <span>508 Laheriasarai Road Darbhanaga, Bihar, BR 846004</span>
      </div>

      {/* Main Navbar */}
      <div className="bg-green-800 px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="text-white font-bold text-lg">Your School</div>

        {/* Nav Links */}
        <nav className="hidden md:flex gap-8 text-white">
          <a href="#">About us</a>
          <a href="#">Admissions</a>
          <a href="#">Academics</a>
          <a href="#">Campus Life</a>
          <a href="#">News</a>
          <a href="#">Contacts</a>
        </nav>

        {/* CTA */}
        <button className="border border-white text-white px-4 py-2 rounded">
          Contact Us
        </button>
      </div>
    </header>
  );
}
