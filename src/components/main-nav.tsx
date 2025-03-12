import Link from "next/link"
import type { NavItem } from "@/data/navigation"

interface MainNavProps {
  items: NavItem[]
}

export function MainNav({ items }: MainNavProps) {
  return (
    <div className="hidden md:flex items-center space-x-8">
      {items.map((item) => (
        <Link key={item.title} href={item.href} className="text-[#12141d] hover:text-[#043a53] font-medium">
          {item.title}
        </Link>
      ))}
    </div>
  )
}

