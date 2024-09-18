import { useEffect, useState } from "react";
import Draggable from "react-draggable";
import toast from "react-hot-toast";
import { useSnapshot } from "valtio";
import { state } from "../../../store";

const ConfiguratorScreen = () => {
  const snap = useSnapshot(state);
  const [selectedColorIndex, setSelectedColorIndex] = useState(snap.colorIndex);
  const [userColors, setUserColors] = useState(snap.storedUserColors);

  const handleColorChange = (index) => {
    setSelectedColorIndex(index);
    state.colorIndex = index;
    const newColors = [...snap.storedUserColors];
    const color = snap.colors[index];
    // Group 1
    if (snap.groupActive === 1) {
      newColors[0] = color.solid;
      newColors[1] = color.striped;
    }
    // Group 2
    if (snap.groupActive === 2) {
      newColors[2] = color.solid;
      newColors[3] = color.striped;
    }
    // Group 3
    if (snap.groupActive === 3) {
      newColors[4] = color.solid;
      newColors[5] = color.striped;
    }
    // Group 4
    if (snap.groupActive === 4) {
      newColors[6] = color.solid;
      newColors[7] = color.striped;
    }
    // Group 5
    if (snap.groupActive === 5) {
      newColors[8] = color.solid;
      newColors[9] = color.striped;
    }

    // Group 6
    if (snap.groupActive === 6) {
      newColors[10] = color.solid;
      newColors[11] = color.striped;
    }
    // Group 7
    if (snap.groupActive === 7) {
      newColors[12] = color.solid;
      newColors[13] = color.striped;
    }
    // Group 8
    if (snap.groupActive === 8) {
      newColors[14] = color.solid;
      newColors[15] = color.striped;
    }
    // setUserColors(newColors);
    state.storedUserColors = [...newColors];
  };

  const areArraysEqual = (arr1, arr2) => {
    if (arr1.length !== arr2.length) return false;
    return arr1.every((value, index) => value === arr2[index]);
  };

  useEffect(() => {
    if (snap.colorScheme == "T568A") {
      if (areArraysEqual(snap.T568A, snap.storedUserColors)) {
        toast("Great Work Crimper!, Keep it up", {
          icon: "👏",
        });
      }
    } else if (snap.colorScheme == "T568B") {
      if (areArraysEqual(snap.T568B, snap.storedUserColors)) {
        toast("Great Work Crafter, Keep it up", {
          icon: "👏",
        });
      }
    }
  }, [snap.storedUserColors]);

  const prevActiveGroup = () => {
    state.groupActive = snap.groupActive === 1 ? 8 : snap.groupActive - 1;
  };

  const nextActiveGroup = () => {
    state.groupActive = snap.groupActive === 8 ? 1 : snap.groupActive + 1;
  };

  const colorSchemeA = () => {
    state.colorScheme = "T568A";
  };
  const colorSchemeB = () => {
    state.colorScheme = "T568B";
  };

  const crimp = () => {
    state.playCrimpAnim = true;
  };

  // Reset Colors
  const resetColors = () => {
    state.storedUserColors = snap.resetUserColors;
    state.groupActive = 0;
  };

  const resetCrimp = () => {
    state.startTraining = true;
    state.playCrimpAnim = false;
  };

  return (
    <>
      {snap.startTraining && (
        <Draggable>
          <div className="flex flex-col justify-between items-center w-[30rem] config">
            {/* Color Scheme */}
            <div className="flex flex-col items-center">
              <p className="text-blue-500">Choose Color Scheme (Defaults to T568A)</p>
              <div>
                <label className="cursor-pointer mx-2">
                  <input
                    type="radio"
                    name="color scheme"
                    onClick={colorSchemeA}
                    className="cursor-pointer"
                  />
                  <span className="ml-1 text-blue-600">T568A</span>
                </label>
                <label className="cursor-pointer mx-2">
                  <input
                    type="radio"
                    name="color scheme"
                    onClick={colorSchemeB}
                    className="cursor-pointer"
                  />
                  <span className="ml-1 text-blue-600">T568B</span>
                </label>
              </div>
            </div>
            {/* Wire Selectors */}
            <div className="config-inner mb-3 bg-black w-full flex flex-row items-center justify-center">
              <div className="mx-1 hover:cursor-pointer">
                {/* Prev Wire */}
                <button
                  type="button"
                  className="bg-white scale-[0.6] text-center w-48 rounded-2xl h-14 relative font-sans text-black text-xl font-semibold group"
                >
                  <div
                    onClick={prevActiveGroup}
                    className="bg-green-400 rounded-xl h-12 w-1/4 flex items-center justify-center absolute left-1 top-[4px] group-hover:w-[184px] z-10 duration-500"
                  >
                    <svg
                      width="25px"
                      height="25px"
                      viewBox="0 0 1024 1024"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill="#000000"
                        d="M224 480h640a32 32 0 1 1 0 64H224a32 32 0 0 1 0-64z"
                      ></path>
                      <path
                        fill="#000000"
                        d="m237.248 512 265.408 265.344a32 32 0 0 1-45.312 45.312l-288-288a32 32 0 0 1 0-45.312l288-288a32 32 0 1 1 45.312 45.312L237.248 512z"
                      ></path>
                    </svg>
                  </div>
                  <p className="translate-x-2">Prev Wire</p>
                </button>
              </div>
              <div className="bg-white flex justify-center items-center w-[6rem] p-1 rounded-[0.35rem] h-[2rem] text-black text-lg font-semibold ">
                Wire {snap.groupActive}
              </div>
              <div className="mx-1 hover:cursor-pointer">
                {/* Next Wire */}
                <button
                  type="button"
                  className="bg-white text-center scale-[0.6] w-48 rounded-2xl h-14 relative font-sans text-black text-xl font-semibold group"
                >
                  <div
                    onClick={nextActiveGroup}
                    className="bg-green-400 rounded-xl rotate-180 h-12 w-1/4 flex items-center justify-center absolute right-1 top-[4px] group-hover:w-[184px] z-10 duration-500"
                  >
                    <svg
                      width="25px"
                      height="25px"
                      viewBox="0 0 1024 1024"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill="#000000"
                        d="M224 480h640a32 32 0 1 1 0 64H224a32 32 0 0 1 0-64z"
                      ></path>
                      <path
                        fill="#000000"
                        d="m237.248 512 265.408 265.344a32 32 0 0 1-45.312 45.312l-288-288a32 32 0 0 1 0-45.312l288-288a32 32 0 1 1 45.312 45.312L237.248 512z"
                      ></path>
                    </svg>
                  </div>
                  <p className="-translate-x-5">Next Wire</p>
                </button>
              </div>
            </div>
            {/* Colors */}
            <div className="flex bg-[#bebebe] rounded-[0.5rem] justify-between align-middle p-3  ">
              {/* B1 */}

              {/* B2 */}
              <div
                style={{
                  background: `linear-gradient(to bottom, ${snap.colors[0].solid} 50%, ${snap.colors[0].striped} 50%)`,
                }}
                className="mx-3 w-6 h-6 rounded-full hover:cursor-pointer "
                onClick={() => handleColorChange(0)}
              ></div>

              {/* B3 */}
              <div
                style={{
                  background: `linear-gradient(to bottom, ${snap.colors[1].solid} 50%, ${snap.colors[1].striped} 50%)`,
                }}
                className="mx-3 w-6 h-6 rounded-full hover:cursor-pointer"
                onClick={() => handleColorChange(1)}
              ></div>

              {/* B4 */}
              <div
                style={{
                  background: `linear-gradient(to bottom, ${snap.colors[2].solid} 50%, ${snap.colors[2].striped} 50%)`,
                }}
                className="mx-3 w-6 h-6 rounded-full hover:cursor-pointer"
                onClick={() => handleColorChange(2)}
              ></div>

              {/* B5 */}
              <div
                style={{
                  background: `linear-gradient(to bottom, ${snap.colors[3].solid} 50%, ${snap.colors[3].striped} 50%)`,
                }}
                className="mx-3 w-6 h-6 rounded-full hover:cursor-pointer"
                onClick={() => handleColorChange(3)}
              ></div>

              {/* B6 */}
              <div
                style={{
                  background: `linear-gradient(to bottom, ${snap.colors[4].solid} 50%, ${snap.colors[4].striped} 50%)`,
                }}
                className="mx-3 w-6 h-6 rounded-full hover:cursor-pointer"
                onClick={() => handleColorChange(4)}
              ></div>

              {/* B7 */}
              <div
                style={{
                  background: `linear-gradient(to bottom, ${snap.colors[5].solid} 50%, ${snap.colors[5].striped} 50%)`,
                }}
                className="mx-3 w-6 h-6 rounded-full hover:cursor-pointer"
                onClick={() => handleColorChange(5)}
              ></div>

              {/* B8 */}
              <div
                style={{
                  background: `linear-gradient(to bottom, ${snap.colors[6].solid} 50%, ${snap.colors[6].striped} 50%)`,
                }}
                className="mx-3 w-6 h-6 rounded-full hover:cursor-pointer"
                onClick={() => handleColorChange(6)}
              ></div>

              {/* B9 */}
              <div
                style={{
                  background: `linear-gradient(to bottom, ${snap.colors[7].solid} 50%, ${snap.colors[7].striped} 50%)`,
                }}
                className="mx-3 w-6 h-6 rounded-full hover:cursor-pointer"
                onClick={() => handleColorChange(7)}
              ></div>
            </div>
            {/* Crimp Button */}
            <div className="flex justify-between  w-[15rem]">
              <button className="text-blue-600" onClick={resetCrimp}>
                Reset Crimp
              </button>
              <button className="text-blue-600" onClick={resetColors}>
                Reset Colors
              </button>
              <div onClick={crimp} className="rotate-90 hover:cursor-pointer">
                <img color="red" src={"/ethernet.svg"} width={70} height={70} alt="crimp" />
              </div>
            </div>
          </div>
        </Draggable>
      )}
    </>
  );
};

export default ConfiguratorScreen;
