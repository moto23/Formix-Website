const Footer = () => {
  return (
    <footer id="contact" className="bg-primary text-primary-foreground py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="flex items-center justify-center space-x-2 mb-8">
            <div className="w-8 h-8 bg-primary-foreground rounded-lg flex items-center justify-center">
              <div className="w-3 h-3 bg-primary rounded-sm"></div>
            </div>
            <span className="text-2xl font-bold">Formix</span>
          </div>
          
          <p className="text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
            Ready to transform your design workflow? Get unlimited design work for a simple monthly rate. 
            No hourly billing, no surprises — pause or cancel whenever you need.
          </p>
          
          <div className="text-sm text-primary-foreground/60">
            <p>© 2024 Formix. All rights reserved.</p>
            <p className="mt-2">
              Built with ❤️ for startups, founders, and growing businesses.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;