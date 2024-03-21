import Logo from "./Logo";
import Navlinks from "./Navlinks";

const Navbar = () => {
  return (
    <nav className="px-12 py-4 flex justify-between items-center bg-neutral-100 shadow-md">
      <Logo />
      <Navlinks />
    </nav>
  );
};

export default Navbar;
