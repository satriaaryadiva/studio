import { navigation } from "@/constants";
import Link from "next/link";

const FooterNavigation = () => {
  return (
    <nav>
      <ul role="list" className="grid grid-cols-2 gap-8 sm:grid-cols-3">
        {navigation.map((item) => (
          <li key={item.title}>
            <div className="font-sans text-[10px] font-black uppercase tracking-[0.3em] text-theme-3 mb-6">
              {item.title}
            </div>
            <ul role="list" className="space-y-4">
              {item.links.map((link) => (
                <li key={typeof link.title === 'string' ? link.title : link.href}>
                  <Link
                    href={link.href}
                    className="text-sm font-sans font-medium text-theme-2 transition-all duration-300 hover:text-theme hover:translate-x-1 inline-block"
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
