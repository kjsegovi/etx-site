import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { navLinks } from "../data/content";
import { Button } from "../components/ui/Button";
import { Logo } from "../components/ui/Logo";

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="sticky top-0 z-50">
      {/* ASU maroon top rule */}
      <div className="h-1.5 w-full bg-ember-500" />

      <div
        className={`bg-white transition-shadow duration-200 ${
          scrolled ? "shadow-md" : "border-b border-nebula-2"
        }`}
      >
        <div className="etx-container flex h-[68px] items-center justify-between">
          <Logo />

          <nav className="hidden items-center gap-7 md:flex">
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                className={({ isActive }) =>
                  `relative py-1 font-display text-[0.95rem] font-bold transition-colors ${
                    isActive
                      ? "text-ember-500 after:absolute after:-bottom-0.5 after:left-0 after:h-1 after:w-full after:rounded after:bg-aqua-500 after:content-['']"
                      : "text-star hover:text-ember-500"
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}
            <Button to="/quick-start" size="md">
              Quick start
            </Button>
          </nav>

          <button
            type="button"
            aria-label="Toggle menu"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="flex h-10 w-10 items-center justify-center rounded border border-nebula-2 text-star md:hidden"
          >
            <span className="sr-only">Menu</span>
            <div className="space-y-1.5">
              <span
                className={`block h-0.5 w-5 bg-current transition-transform ${
                  open ? "translate-y-2 rotate-45" : ""
                }`}
              />
              <span
                className={`block h-0.5 w-5 bg-current transition-opacity ${
                  open ? "opacity-0" : ""
                }`}
              />
              <span
                className={`block h-0.5 w-5 bg-current transition-transform ${
                  open ? "-translate-y-2 -rotate-45" : ""
                }`}
              />
            </div>
          </button>
        </div>

        {open && (
          <div className="border-t border-nebula-2 bg-white md:hidden">
            <nav className="etx-container flex flex-col gap-1 py-4">
              {navLinks.map((link) => (
                <NavLink
                  key={link.to}
                  to={link.to}
                  onClick={() => setOpen(false)}
                  className={({ isActive }) =>
                    `rounded px-3 py-3 font-display text-base font-bold ${
                      isActive
                        ? "bg-space text-ember-500"
                        : "text-star hover:bg-space"
                    }`
                  }
                >
                  {link.label}
                </NavLink>
              ))}
              <div className="px-3 pt-3">
                <Button to="/quick-start" size="md" className="w-full">
                  Quick start
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
