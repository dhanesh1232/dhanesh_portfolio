import Link from "next/link";
import { FaGithub, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";

const socialLinks = [
  { name: "GitHub", icon: FaGithub, href: "https://github.com/dhanesh1232" },
  {
    name: "LinkedIn",
    icon: FaLinkedin,
    href: "https://www.linkedin.com/in/dhanesh-mekalthuru-5baa9323b/",
  },
  {
    name: "Instagram",
    icon: FaInstagram,
    href: "https://www.instagram.com/erix.__.after17_59/",
  },
];

export function Footer() {
  return (
    <footer className="border-t border-slate-800 bg-slate-900 py-8">
      <div className="max-w-7xl mx-auto px-8 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-slate-400 text-sm">
          © {new Date().getFullYear()} Dhanesh. All rights reserved.
        </p>

        <div className="flex gap-6">
          {socialLinks.map(({ name, icon: Icon, href }) => (
            <a
              key={name}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-cyan-400 transition"
              aria-label={name}
            >
              <Icon size={20} />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
