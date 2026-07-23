import { useEffect, useRef, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { navLinks } from "../data/content";
import { Button } from "../components/ui/Button";
import { Logo } from "../components/ui/Logo";

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const mobileMenuRef = useRef<HTMLElement>(null);
  const { pathname } = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!open) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
        menuButtonRef.current?.focus();
      }
    };

    document.addEventListener("keydown", onKeyDown);
    const focusFrame = window.requestAnimationFrame(() => {
      mobileMenuRef.current
        ?.querySelector<HTMLElement>("a")
        ?.focus();
    });

    return () => {
      document.removeEventListener("keydown", onKeyDown);
      window.cancelAnimationFrame(focusFrame);
    };
  }, [open]);

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

          <nav
            className="hidden items-center gap-7 md:flex"
            aria-label="Primary navigation"
          >
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                className={({ isActive }) =>
                  `relative py-1 font-display text-[0.95rem] font-bold transition-colors after:absolute after:-bottom-0.5 after:left-0 after:h-1 after:w-full after:origin-left after:rounded after:bg-aqua-500 after:transition-transform after:duration-200 after:content-[''] hover:after:scale-x-100 focus-visible:after:scale-x-100 ${
                    isActive
                      ? "text-ember-500 after:scale-x-100"
                      : "text-star after:scale-x-0 hover:text-ember-500"
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
            ref={menuButtonRef}
            type="button"
            aria-label={open ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={open}
            aria-controls="mobile-navigation"
            onClick={() => setOpen((v) => !v)}
            className="flex h-10 w-10 items-center justify-center rounded border-2 border-nebula-2 text-star transition-colors hover:border-ember-500 hover:text-ember-500 md:hidden"
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
            <nav
              id="mobile-navigation"
              ref={mobileMenuRef}
              aria-label="Mobile navigation"
              className="etx-container flex flex-col gap-1 py-4"
            >
              {navLinks.map((link) => (
                <NavLink
                  key={link.to}
                  to={link.to}
                  onClick={() => setOpen(false)}
                  className={({ isActive }) =>
                    `rounded px-3 py-3 font-display text-base font-bold ${
                      isActive
                        ? "bg-space text-ember-500"
                        : "text-star hover:bg-space focus-visible:bg-space"
                    }`
                  }
                >
                  {link.label}
                </NavLink>
              ))}
              <div className="px-3 pt-3">
                <Button
                  to="/quick-start"
                  size="md"
                  className="w-full"
                  onClick={() => setOpen(false)}
                >
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
