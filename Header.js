function Header() {
  return (
    <header className="bg-blue-900 text-white py-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-3xl font-bold">La_IT Consultant</h1>
        <nav>
          <ul className="flex space-x-6">
            <li><a href="#home" className="hover:text-blue-300">Home</a></li>
            <li><a href="#schedule" className="hover:text-blue-300">Schedule</a></li>
            <li><a href="#pricing" className="hover:text-blue-300">Pricing</a></li>
            <li><a href="#contact" className="hover:text-blue-300">Contact</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;