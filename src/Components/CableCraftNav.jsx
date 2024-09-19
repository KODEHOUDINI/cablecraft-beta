import { useEffect, useState } from "react";
import { Navbar, Collapse, Typography, IconButton } from "@material-tailwind/react";
import { HiMenu, HiOutlineX } from "react-icons/hi";
import { state } from "../../store";

const handlePlayReversal = () => {
  state.glassbgDisplay = true;
  state.targetPosZ = -10.829 + 0.4;
  state.showManual = false;
  state.groupActive = 1;
  state.currentToolIndex = 0;
  state.startTraining = false;
  state.playCrimpAnim = false;
};

const handleTutorials = () => {
  state.glassbgDisplay = false;
  state.targetPosZ = -9.829 - 5;
  state.currentToolIndex = 0;
  state.startTraining = false;
  state.playCrimpAnim = false;
  setTimeout(() => {
    state.showManual = true;
  }, 1000);
};

const handlePractice = () => {
  state.glassbgDisplay = false;
  state.targetPosZ = -9.829 - 5;
  state.groupActive = 1;
  state.currentToolIndex = 0;
  state.startTraining = true;
  state.playCrimpAnim = false;
  state.showManual = false;
};

const handleColorCode = () => {
  state.glassbgDisplay = false;
  state.targetPosZ = -9.829 - 5;
  state.currentToolIndex = 12;
  state.startTraining = false;
  state.playCrimpAnim = false;
  setTimeout(() => {
    state.showManual = true;
  }, 1000);
};

function NavList() {
  return (
    <ul className="my-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      <Typography as="li" variant="small" color="white" className="p-1 font-medium">
        <a
          href="#"
          onClick={handlePlayReversal}
          className="flex items-center hover:text-[#dda15e] transition-colors border-b-2 border-[#dda15e] py-2 md:py-1 "
        >
          Home
        </a>
      </Typography>
      <Typography as="li" variant="small" color="white" className="p-1 font-medium">
        <a
          href="#"
          onClick={handleTutorials}
          className="flex items-center hover:text-[#dda15e] transition-colors border-b-2 border-[#dda15e] py-2 md:py-1 "
        >
          Tutorials
        </a>
      </Typography>
      <Typography as="li" variant="small" color="white" className="p-1 font-medium">
        <a
          href="#"
          onClick={handlePractice}
          className="flex items-center hover:text-[#dda15e] transition-colors border-b-2 border-[#dda15e] py-2 md:py-1"
        >
          Practice
        </a>
      </Typography>
      <Typography as="li" variant="small" color="white" className="p-1 font-medium">
        <a
          href="#"
          className="flex items-center hover:text-[#dda15e] transition-colors border-b-2 border-[#dda15e] py-2 md:py-1"
          onClick={handleColorCode}
        >
          Color Coding
        </a>
      </Typography>
    </ul>
  );
}

const CableCraftNav = () => {
  const [openNav, setOpenNav] = useState(false);

  const handleWindowResize = () => window.innerWidth >= 960 && setOpenNav(false);

  useEffect(() => {
    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  return (
    <>
      <Navbar
        color="transparent"
        className="mx-auto max-w-screen-[2000px] md:w-[80rem] px-6 py-3 inset-x-0 absolute z-50"
      >
        <div className="flex items-center justify-between text-blue-gray-900">
          <Typography
            variant="h6"
            color="white"
            className="mr-4 cursor-pointer py-1.5 hover:text-[#dda15e]"
            onClick={handlePlayReversal}
          >
            <img src="/cablecraft.svg" alt="" className="w-[7rem]" />
          </Typography>
          <div className="hidden lg:block">
            <NavList />
          </div>
          <IconButton
            variant="text"
            className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
            ripple={false}
            onClick={() => setOpenNav(!openNav)}
          >
            {openNav ? (
              <HiOutlineX className="h-6 w-6" strokeWidth={3} color="white" />
            ) : (
              <HiMenu className="h-6 w-6" strokeWidth={1} color="white" />
            )}
          </IconButton>
        </div>
        <Collapse open={openNav}>
          <NavList />
        </Collapse>
      </Navbar>
    </>
  );
};

export default CableCraftNav;
