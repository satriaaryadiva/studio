import FadeIn, { FadeInStagger } from "./FadeIn";
import Border from "./Border";
import clsx from "clsx";

const List = ({ className, children }) => {
  return (
    <FadeInStagger>
      <ul role="list" className={clsx("text-base text-neutral-600", className)}>
        {children}
      </ul>
    </FadeInStagger>
  );
};

export const ListItem = ({ title, children }) => {
  return (
    <li className="group mt-10 first:mt-0">
      <FadeIn>
        <Border className="pt-10 group-first:pt-0 group-first:before:hidden group-first:after:hidden">
          <div className="transition-all duration-300 group-hover:translate-x-2">
            {title && (
              <strong className="font-semibold text-neutral-950 transition-colors duration-300 group-hover:text-neutral-700">{`${title}. `}</strong>
            )}
            {children}
          </div>
        </Border>
      </FadeIn>
    </li>
  );
};

export default List;
