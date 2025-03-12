import Link from "next/link"
import type { NavItem } from "@/data/navigation"

interface AuthNavProps {
  items: NavItem[]
}

export function AuthNav({ items }: AuthNavProps) {
  return (
    <div className="flex items-center space-x-4">
      {items.map((item, index) => (
        <Link
          key={item.title}
          href={item.href}
          className={
            index === items.length - 1
              ? "bg-[#043a53] text-white px-6 py-2 rounded-full font-medium hover:bg-[#032a3d] transition-colors"
              : "text-[#12141d] hover:text-[#043a53] font-medium"
          }
        >
          {item.title}
        </Link>
      ))}
    </div>
  )
}

