import React from 'react';

const Footer = () => {
  return (
    <footer className="border-t border-gray-200 py-6 bg-white text-center md:text-left">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
          {/* Branding Info */}
          <div>
            <h2 className="text-2xl font-bold text-gray-800">Job Portal</h2>
            <p className="text-sm text-gray-600">© JobPortal By Vinay Jadhav 2025. All rights reserved.</p>
          </div>

          {/* Social Links */}
          <div className="flex justify-center md:justify-end space-x-6">
            {/* Instagram */}
            <a
              href="https://www.instagram.com/vjadhav163_/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="text-gray-600 hover:text-gray-900 transition-colors"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2zm0 1.5A4.25 4.25 0 0 0 3.5 7.75v8.5A4.25 4.25 0 0 0 7.75 20.5h8.5a4.25 4.25 0 0 0 4.25-4.25v-8.5A4.25 4.25 0 0 0 16.25 3.5h-8.5zM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10zm0 1.5a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7zm5.25-.75a1.25 1.25 0 1 1-2.5 0 1.25 1.25 0 0 1 2.5 0z" />
              </svg>
            </a>

            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/in/vinay-jadhav"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="text-gray-600 hover:text-gray-900 transition-colors"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.327-.026-3.037-1.851-3.037-1.854 0-2.137 1.447-2.137 2.941v5.665h-3.554V9h3.414v1.561h.05c.476-.9 1.637-1.85 3.37-1.85 3.6 0 4.266 2.368 4.266 5.451v6.29zM5.337 7.433c-1.144 0-2.07-.927-2.07-2.07 0-1.144.926-2.07 2.07-2.07s2.07.926 2.07 2.07c0 1.143-.926 2.07-2.07 2.07zM7.119 20.452H3.553V9h3.566v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.543C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.272V1.729C24 .774 23.2 0 22.225 0z" />
              </svg>
            </a>

            {/* GitHub */}
            <a
              href="https://github.com/VinayJadhav163"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Github"
              className="text-gray-600 hover:text-gray-900 transition-colors"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.799 8.205 11.387.6.113.82-.261.82-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.24 1.839 1.24 1.07 1.834 2.807 1.304 3.492.997.108-.775.418-1.305.76-1.604-2.665-.303-5.466-1.332-5.466-5.932 0-1.311.468-2.381 1.236-3.221-.124-.303-.536-1.522.117-3.176 0 0 1.008-.322 3.3 1.23a11.5 11.5 0 0 1 6 0c2.29-1.552 3.297-1.23 3.297-1.23.655 1.654.243 2.873.12 3.176.77.84 1.235 1.91 1.235 3.221 0 4.61-2.804 5.625-5.475 5.921.43.372.823 1.104.823 2.222v3.293c0 .319.218.694.825.576C20.565 21.796 24 17.298 24 12c0-6.63-5.373-12-12-12z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
