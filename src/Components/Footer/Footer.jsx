function Footer() {
  return (
    <footer className="bg   w-100   text-white py-4" style={{ backgroundColor: '#1A1618' }}>
      <div className="container mx-auto text-center">
        <p className="text-sm">
      Copyright    &copy; {new Date().getFullYear()}  All rights reserved
        </p>
        <p className="text-xs ">
          Built with ❤️ using React and Bootstrap by <a href="https://github.com/ahmed-elbedewy" target="_blank" rel="noopener noreferrer" className="text-one">ahmed elbedewy</a>
        </p>
      </div>
    </footer>
  );
}
export default Footer;