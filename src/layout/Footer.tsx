import { Link } from "react-router-dom";
import { brand, navLinks } from "../data/content";
import { Logo } from "../components/ui/Logo";

const legalLinks = [
  { label: "Copyright and Trademark", href: "https://www.asu.edu/about/copyright-trademark" },
  { label: "Accessibility", href: "https://www.asu.edu/accessibility" },
  { label: "Privacy", href: "https://www.asu.edu/about/privacy" },
  { label: "Terms of Use", href: "https://www.asu.edu/about/terms-of-use" },
  { label: "Emergency", href: "https://www.asu.edu/emergency" },
  { label: "Jobs", href: "https://www.asu.edu/asujobs" },
];

export function Footer() {
  return (
    <footer className="bg-star text-white">
      {/* Gold accent rule, ASU-style */}
      <div className="h-1.5 w-full bg-aqua-500" />

      <div className="etx-container py-14">
        <div className="flex flex-col gap-12 md:flex-row md:justify-between">
          <div className="max-w-sm">
            <Logo variant="light" />
            <p className="mt-5 text-sm leading-relaxed text-white/70">
              {brand.tagline}
            </p>
          </div>

          <div className="flex flex-wrap gap-14">
            <div>
              <h3 className="font-display text-sm font-bold uppercase tracking-wider text-aqua-500">
                Explore
              </h3>
              <ul className="mt-4 space-y-3">
                {navLinks.map((link) => (
                  <li key={link.to}>
                    <Link
                      to={link.to}
                      className="text-sm text-white/80 transition-colors hover:text-aqua-500"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="font-display text-sm font-bold uppercase tracking-wider text-aqua-500">
                Get in touch
              </h3>
              <ul className="mt-4 space-y-3">
                <li>
                  <a
                    href={`mailto:${brand.email}`}
                    className="text-sm text-white/80 transition-colors hover:text-aqua-500"
                  >
                    {brand.email}
                  </a>
                </li>
                <li className="text-sm text-white/80">{brand.parent}</li>
                <li>
                  <a
                    href="https://etx.asu.edu"
                    target="_blank"
                    rel="noreferrer"
                    className="text-sm text-white/80 transition-colors hover:text-aqua-500"
                  >
                    etx.asu.edu
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Legal bar */}
      <div className="border-t border-white/15">
        <div className="etx-container flex flex-col gap-4 py-6 lg:flex-row lg:items-center lg:justify-between">
          <ul className="flex flex-wrap gap-x-5 gap-y-2 text-xs text-white/70">
            {legalLinks.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  target="_blank"
                  rel="noreferrer"
                  className="transition-colors hover:text-aqua-500"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <p className="text-xs text-white/60">
            © {new Date().getFullYear()} {brand.parent}. Concept site — successor to etx.asu.edu.
          </p>
        </div>
      </div>
    </footer>
  );
}
