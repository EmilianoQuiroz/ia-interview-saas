"use client";

import { Button } from "@/components/UI/button";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { links } from "../Navbar.data";

export function NavbarMobile() {
  {
    /*Hook para abrir y cerrar el menu*/
  }
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex md:hidden">
      <Button
        className="text-black"
        variant="outline"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </Button>
      {isOpen && (
        <div className="absolute top-full right-4 mt-2 bg-white text-black rounded-lg shadow-lg p-4 flex flex-col gap-3">
          {/* Mapeamos los enlaces */}
          {links.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
