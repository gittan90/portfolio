export default function Footer() {
  return (
    <footer id="contact" className="border-t border-gray-200 py-12 bg-white">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div>
            <p className="text-xs uppercase tracking-[0.28em] text-gray-500">
              Contact
            </p>
            <p className="mt-2 text-sm text-gray-900">ANNA DÖHMERS</p>
          </div>

          <div className="text-sm text-gray-700 space-y-1 md:text-right">
            <p>
              <a
                className="hover:text-gray-900"
                href="mailto:anna.dohmers@gmail.com"
              >
                anna.dohmers@gmail.com
              </a>
            </p>
            <p>
              <a className="hover:text-gray-900" href="tel:+46704066244">
                +46 70 406 62 44
              </a>
            </p>
          </div>
        </div>

        <div className="mt-10 text-xs text-gray-500">
          © {new Date().getFullYear()} Anna Döhmers
        </div>
      </div>
    </footer>
  );
}
