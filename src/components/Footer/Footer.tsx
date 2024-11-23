const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="mb-4 md:mb-0">
          <h3 className="text-lg font-bold">Contact Us</h3>
          <p>Address: 123 Placeholder Street, City</p>
          <p>Phone: (123) 456-7890</p>
          <p>Email: info@example.com</p>
        </div>
        <div className="flex space-x-4">
          <a href="#" className="text-white hover:text-blue-400">
            <i className="fab fa-linkedin"></i>
          </a>
          <a href="#" className="text-white hover:text-blue-400">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="#" className="text-white hover:text-blue-400">
            <i className="fab fa-facebook"></i>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
