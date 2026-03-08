import { navigation } from "@/constants";
import Link from "next/link";

const FooterNavigation = () => {
  return (
    <nav>
      <ul role="list" className="grid grid-cols-2 gap-8 sm:grid-cols-3">
        {navigation.map((item) => (
          <li key={item.title}>
            <div className="font-display text-[10px] font-bold uppercase tracking-[0.2em] text-neutral-500">
              {item.title}
            </div>
            <ul role="list" className="mt-6 text-sm">
              {item.links.map((link) => (
                <li key={link.href} className="mt-3">
                  <Link
                    href={link.href}
                    className="text-neutral-400 transition hover:text-white"
                  >
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default FooterNavigation;
