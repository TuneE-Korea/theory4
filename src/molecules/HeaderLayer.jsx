import LogoBox from "../Atom/LogoBox";
import MenuButton from "../Atom/MenuButton";

const HeaderLayer = () => {
  return (
    <>
      <div className="flex justify-between w-11/12">
        <LogoBox />
        <MenuButton></MenuButton>
      </div>
    </>
  );
};

export default HeaderLayer;
