export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200 mt-10">
      <div className="container mx-auto px-4 py-5 text-center text-sm text-gray-500">
        <p>© {new Date().getFullYear()} Bluebird Group. All rights reserved.</p>
        <p className="mt-1">Built by Frontend Engineer</p>
      </div>
    </footer>
  );
}
