import clsx from "clsx";
import Link from "next/link";

const Logo = ({ invert, href, className, children, ...props }) => {
  const inner = <span className="relative">{children}</span>;
  if (href) {
    return (
      <Link
        href={href}
        className={clsx(
          "cursor-pointer text-2xl font-black tracking-tighter uppercase font-freight duration-300",
          invert ? "text-white hover:text-[#9E8976]" : "text-theme hover:text-[#9E8976]",
          className
        )}
        {...props}
      >
        {inner}
      </Link>
    );
  }
  return (
    <h2
      className={clsx(
        "cursor-pointer text-2xl font-black tracking-tighter uppercase font-freight duration-300",
        invert ? "text-white hover:text-[#9E8976]" : "text-theme hover:text-[#9E8976]",
        className
      )}
      {...props}
    >
      {inner}
    </h2>
  );
};

export default Logo;
