"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { navLinks } from "@/data/site";
import { ChevronDownIcon } from "@/components/icons";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobileTreatmentsOpen, setIsMobileTreatmentsOpen] = useState(false);
  const pathname = usePathname();
  const dropdownTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const openDropdown = () => {
    if (dropdownTimer.current) clearTimeout(dropdownTimer.current);
    setIsDropdownOpen(true);
  };

  const closeDropdown = () => {
    dropdownTimer.current = setTimeout(() => setIsDropdownOpen(false), 120);
  };

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  useEffect(() => {
    if (!isMenuOpen) return;
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setIsMenuOpen(false);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isMenuOpen]);

  // Close dropdown on route change
  useEffect(() => {
    setIsDropdownOpen(false);
    setIsMenuOpen(false);
  }, [pathname]);

  return (
    <header className="absolute top-0 left-0 right-0 z-50 px-5">
      <div className="mx-auto flex h-[111px] max-w-[1400px] items-center gap-6">
        {/* Logo — top-left corner */}
        <Link href="/" className="relative z-10 block shrink-0">
          <Image
            src="/images/logo.png"
            alt="Your Health First Clinic"
            width={488}
            height={328}
            priority
            className="h-auto w-[120px] object-contain lg:w-[155px]"
          />
        </Link>

        {/* Push nav + CTA to the right */}
        <div className="flex-1" />

        {/* Desktop nav */}
        <nav className="hidden lg:block">
          <ul className="flex h-[38px] items-center rounded-[5px] border-[0.8px] border-white/33 bg-black/80 backdrop-blur-sm px-2">
            {navLinks.map((link) => {
              const isActive =
                pathname === link.href ||
                (link.dropdown && pathname.startsWith("/treatments"));

              if (link.dropdown) {
                return (
                  <li
                    key={link.label}
                    className="relative h-[35px]"
                    onMouseEnter={openDropdown}
                    onMouseLeave={closeDropdown}
                  >
                    <button
                      type="button"
                      className={`flex h-[38px] items-center gap-1 px-[12px] font-nav text-[15px] leading-[22px] font-medium tracking-[-0.4px] uppercase transition-colors hover:text-white ${
                        isActive ? "text-white" : "text-tan"
                      }`}
                    >
                      {link.label}
                      <ChevronDownIcon
                        className={`h-3 w-3 transition-transform duration-200 ${
                          isDropdownOpen ? "rotate-180" : ""
                        }`}
                      />
                    </button>

                    {/* Mega-dropdown panel */}
                    <div
                      onMouseEnter={openDropdown}
                      onMouseLeave={closeDropdown}
                      className={`absolute left-1/2 top-[calc(100%+6px)] -translate-x-1/2 w-[860px] rounded-[8px] border-[0.8px] border-tan/30 bg-[#0c0c0c] shadow-2xl transition-all duration-200 ${
                        isDropdownOpen
                          ? "pointer-events-auto translate-y-0 opacity-100"
                          : "pointer-events-none -translate-y-2 opacity-0"
                      }`}
                    >
                      {/* Gold top accent line */}
                      <div className="h-[2px] w-full rounded-t-[8px] bg-gradient-to-r from-transparent via-tan to-transparent" />

                      <div className="grid grid-cols-4 gap-8 p-8">
                        {link.dropdown.map((group) => (
                          <div key={group.category}>
                            <p className="mb-4 border-b border-tan/30 pb-3 font-display text-[13px] font-medium tracking-[2px] text-tan uppercase">
                              {group.category}
                            </p>
                            <ul className="flex flex-col gap-[10px]">
                              {group.items.map((item) => (
                                <li key={item.href}>
                                  <Link
                                    href={item.href}
                                    className="block font-nav text-[15px] font-medium leading-[1.4] text-white/75 tracking-[-0.3px] transition-colors duration-150 hover:text-tan"
                                  >
                                    {item.label}
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </div>

                      {/* Footer strip — view all link */}
                      <div className="border-t border-white/10 px-8 py-4">
                        <Link
                          href="/treatments"
                          className="font-nav text-[14px] font-medium tracking-[1px] text-tan/70 uppercase transition-colors hover:text-tan"
                        >
                          View all treatments →
                        </Link>
                      </div>
                    </div>
                  </li>
                );
              }

              return (
                <li key={link.href} className="h-[35px]">
                  <Link
                    href={link.href}
                    className={`flex h-[38px] items-center px-[12px] font-nav text-[15px] leading-[22px] font-medium tracking-[-0.4px] uppercase transition-colors hover:text-white ${
                      isActive ? "text-white" : "text-tan"
                    }`}
                  >
                    {link.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        {/* Desktop CTA */}
        <Link
          href="/#book"
          className="hidden shrink-0 items-center justify-center rounded-[6px] bg-tan px-5 py-2.5 font-nav text-[13px] font-semibold tracking-[-0.2px] text-forest transition-opacity hover:opacity-90 lg:inline-flex"
        >
          Book a Consultation
        </Link>

        {/* Mobile hamburger */}
        <button
          type="button"
          aria-label="Open menu"
          aria-expanded={isMenuOpen}
          onClick={() => setIsMenuOpen(true)}
          className="relative z-10 flex h-12 w-12 shrink-0 items-center justify-center bg-rust text-white lg:hidden"
        >
          <span className="sr-only">Open menu</span>
          <svg width="22" height="16" viewBox="0 0 22 16" fill="none" aria-hidden="true">
            <rect width="22" height="2" fill="currentColor" />
            <rect y="7" width="22" height="2" fill="currentColor" />
            <rect y="14" width="22" height="2" fill="currentColor" />
          </svg>
        </button>
      </div>

      {/* Mobile overlay */}
      <div
        onClick={() => setIsMenuOpen(false)}
        aria-hidden="true"
        className={`fixed inset-0 z-40 bg-black/50 transition-opacity duration-300 ease-in-out lg:hidden ${
          isMenuOpen
            ? "pointer-events-auto opacity-100"
            : "pointer-events-none opacity-0"
        }`}
      />

      {/* Mobile off-canvas panel */}
      <div
        role="dialog"
        aria-modal="true"
        aria-label="Mobile navigation"
        className={`fixed top-0 right-0 z-50 h-full w-full overflow-y-auto bg-cream transition-transform duration-300 ease-in-out lg:hidden ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex justify-end p-6">
          <button
            type="button"
            aria-label="Close menu"
            onClick={() => setIsMenuOpen(false)}
            className="flex h-12 w-12 shrink-0 items-center justify-center bg-rust text-white"
          >
            <span className="sr-only">Close menu</span>
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
              <line x1="1" y1="1" x2="17" y2="17" stroke="currentColor" strokeWidth="2" />
              <line x1="17" y1="1" x2="1" y2="17" stroke="currentColor" strokeWidth="2" />
            </svg>
          </button>
        </div>

        <nav className="flex flex-col px-8 pb-12 pt-4">
          <ul className="flex flex-col gap-0 divide-y divide-black/10">
            {navLinks.map((link) => {
              const isActive =
                pathname === link.href ||
                (link.dropdown && pathname.startsWith("/treatments"));

              if (link.dropdown) {
                return (
                  <li key={link.label}>
                    <button
                      type="button"
                      onClick={() => setIsMobileTreatmentsOpen((v) => !v)}
                      className="flex w-full items-center justify-between py-5 font-nav text-[18px] font-semibold tracking-[-0.7px] uppercase text-forest"
                    >
                      <span className={isActive ? "text-rust" : ""}>
                        {link.label}
                      </span>
                      <ChevronDownIcon
                        className={`h-4 w-4 text-rust transition-transform duration-200 ${
                          isMobileTreatmentsOpen ? "rotate-180" : ""
                        }`}
                      />
                    </button>

                    {/* Mobile accordion */}
                    <div
                      className={`overflow-hidden transition-all duration-300 ${
                        isMobileTreatmentsOpen ? "max-h-[1000px]" : "max-h-0"
                      }`}
                    >
                      <div className="flex flex-col gap-6 pb-6 pl-2">
                        {link.dropdown.map((group) => (
                          <div key={group.category}>
                            <p className="mb-2 font-display text-[10px] font-medium tracking-[2px] text-rust uppercase">
                              {group.category}
                            </p>
                            <ul className="flex flex-col gap-2">
                              {group.items.map((item) => (
                                <li key={item.href}>
                                  <Link
                                    href={item.href}
                                    onClick={() => setIsMenuOpen(false)}
                                    className="font-nav text-[15px] font-medium text-forest/80 tracking-[-0.3px] transition-colors hover:text-rust"
                                  >
                                    {item.label}
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </div>
                    </div>
                  </li>
                );
              }

              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    onClick={() => setIsMenuOpen(false)}
                    className={`block py-5 font-nav text-[18px] font-semibold tracking-[-0.7px] uppercase ${
                      isActive ? "text-rust" : "text-forest"
                    }`}
                  >
                    {link.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    </header>
  );
}
