import React from "react";

export default function Footer() {
  return (
    <>
      <footer className="bg-gray-900 py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="text-gray-300">
            &copy; 2025 CookShare. All rights reserved.
          </p>
          <div className="mt-4 space-x-4">
            <a
              href="#"
              className="text-gray-300 hover:text-amber-400 transition"
            >
              Privacy
            </a>
            <a
              href="#"
              className="text-gray-300 hover:text-amber-400 transition"
            >
              Terms
            </a>
            <a
              href="#"
              className="text-gray-300 hover:text-amber-400 transition"
            >
              Contact
            </a>
          </div>
        </div>
      </footer>
    </>
  );
}
