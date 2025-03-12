"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import type { NavItem } from "@/data/navigation"

interface MobileMenuProps {
  mainItems: NavItem[]
  authItems: NavItem[]
}

export function MobileMenu({ mainItems, authItems }: MobileMenuProps) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="md:hidden">
      <button onClick={() => setIsOpen(!isOpen)} className="p-2 text-[#12141d]" aria-label="Toggle menu">
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {isOpen && (
        <div className="fixed inset-0 z-50 bg-white">
          <div className="flex justify-end p-4">
            <button onClick={() => setIsOpen(false)} className="p-2 text-[#12141d]" aria-label="Close menu">
              <X size={24} />
            </button>
          </div>
          <nav className="flex flex-col items-center space-y-6 p-6">
            {mainItems.map((item) => (
              <Link
                key={item.title}
                href={item.href}
                className="text-xl font-medium text-[#12141d]"
                onClick={() => setIsOpen(false)}
              >
                {item.title}
              </Link>
            ))}
            <div className="flex flex-col space-y-4 w-full items-center pt-4">
              {authItems.map((item, index) => (
                <Link
                  key={item.title}
                  href={item.href}
                  className={
                    index === authItems.length - 1
                      ? "bg-[#043a53] text-white px-6 py-2 rounded-full font-medium w-full text-center"
                      : "text-xl font-medium text-[#12141d]"
                  }
                  onClick={() => setIsOpen(false)}
                >
                  {item.title}
                </Link>
              ))}
            </div>
          </nav>
        </div>
      )}
    </div>
  )
}

