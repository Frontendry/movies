// Components
import SubNavigationLink from "./SubNavigationLink";

const SubNavigation = ({ subItems }) => {
  return (
    <ul className="bg-slate-500 w-52 text-xs leading-5 absolute right-0">
      {subItems &&
        subItems.map((subItem, index) => (
          <SubNavigationLink
            key={`subLink_${index}_${subItem}`}
            name={subItem}
          />
        ))}
    </ul>
  );
};

export default SubNavigation;
