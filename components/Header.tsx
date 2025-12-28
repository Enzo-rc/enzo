import Link from 'next/link';

export default function Header() {
  return (
    <header className="bg-gradient-to-r from-blue-600 to-blue-800 text-white shadow-lg">
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo / Nom du site */}
          <Link href="/" className="text-2xl font-bold hover:text-blue-200 transition-colors">
            Enzo.rc
          </Link>

          {/* Menu de navigation */}
          <ul className="flex space-x-8">
            <li>
              <Link 
                href="/" 
                className="hover:text-blue-200 transition-colors font-medium"
              >
                Accueil
              </Link>
            </li>
            <li>
              <Link 
                href="/about" 
                className="hover:text-blue-200 transition-colors font-medium"
              >
                À propos
              </Link>
            </li>
            <li>
              <Link 
                href="/blog" 
                className="hover:text-blue-200 transition-colors font-medium"
              >
                Blog
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}


