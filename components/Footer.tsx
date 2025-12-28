export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-300 mt-auto">
      <div className="container mx-auto px-6 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Information */}
          <div className="mb-4 md:mb-0">
            <p className="text-sm">
              © {currentYear} Enzo.rc — Tous droits réservés
            </p>
          </div>

          {/* Liens sociaux ou additionnels (optionnel) */}
          <div className="flex space-x-6">
            <a 
              href="#" 
              className="text-gray-400 hover:text-blue-400 transition-colors text-sm"
            >
              Contact
            </a>
            <a 
              href="#" 
              className="text-gray-400 hover:text-blue-400 transition-colors text-sm"
            >
              Mentions légales
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}


