import { useEffect, useState } from "react";
import Draggable from "react-draggable";
import toast from "react-hot-toast";
import { useSnapshot } from "valtio";
import { state } from "../../../store";
import Joyride from "react-joyride";
import EthernetSvg from "./EthernetSvg";

import { Button } from "@material-tailwind/react";

const ConfiguratorScreen = () => {
  const snap = useSnapshot(state);
  const [selectedColorIndex, setSelectedColorIndex] = useState(snap.colorIndex);

  useEffect(() => {
    switch (snap.level) {
      case 1: {
        state.storedUserColors = snap?.levelOBJ.L1;
        break;
      }
      case 2: {
        state.storedUserColors = snap?.levelOBJ.L2;
        break;
      }
      case 3: {
        state.storedUserColors = snap?.levelOBJ.L3;
        break;
      }
    }
  }, [snap.level]);

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
      if (snap.groupActive === 3) {
        if (snap.storedUserColors[4] !== "#fff") {
          if (snap.T568A[4] !== snap.storedUserColors[4]) {
            toast.error("Oops! Incorrect Color Coding. Click the help button for assistance", {
              duration: 4000,
            });
          } else {
            toast("Nice work! Keep going", {
              icon: "✅",
              duration: 4000,
            });
          }
        }
      }
      if (snap.groupActive === 6) {
        if (snap.storedUserColors[10] !== "#fff") {
          if (snap.T568A[10] !== snap.storedUserColors[10]) {
            toast.error("Oops! Incorrect Color Coding. Click the help button for assistance", {
              duration: 4000,
            });
          } else {
            toast("Wow! You're doing great", {
              icon: "✅🔥🔥",
              duration: 4000,
            });
          }
        }
      }
      // Well Done Message
      if (areArraysEqual(snap.T568A, snap.storedUserColors) && snap.level < 3) {
        toast("Great Work Crafter! Practice makes perfect.Moving on to the next level", {
          icon: "👏",
          duration: 4000,
        });
        // state.equalArrays = true;
        if (snap.level == 1) {
          state.level = 2;
          state.groupActive = 1;
        } else if (snap.level == 2) {
          state.level = 3;
          state.groupActive = 1;
        }
      } else if (areArraysEqual(snap.T568A, snap.storedUserColors) && snap.level == 3) {
        toast("Great Work Crafter! You can now use the Crimper", {
          icon: "👏",
          duration: 4000,
        });
        state.equalArrays = true;
      }
    } else if (snap.colorScheme == "T568B") {
      if (snap.groupActive === 3) {
        if (snap.storedUserColors[4] !== "#fff") {
          if (snap.T568B[4] !== snap.storedUserColors[4]) {
            toast.error("Oops! Incorrect Color Coding. Click the help button for assistance", {
              duration: 4000,
            });
          } else {
            toast("Nice work! Keep going", {
              icon: "✅",
              duration: 4000,
            });
          }
        }
      }
      if (snap.groupActive === 6) {
        if (snap.storedUserColors[10] !== "#fff") {
          if (snap.T568B[10] !== snap.storedUserColors[10]) {
            toast.error("Oops! Incorrect Color Coding. Click the help button for assistance", {
              duration: 4000,
            });
          } else {
            toast("Wow! You're doing great", {
              icon: "✅🔥🔥",
              duration: 4000,
            });
          }
        }
      }

      // Sucess Message
      if (areArraysEqual(snap.T568B, snap.storedUserColors) && snap.level < 3) {
        toast("Great Work Crafter! Practice makes perfect. Moving on to the next level", {
          icon: "👏",
          duration: 4000,
        });
        // state.equalArrays = true;
        if (snap.level == 1) {
          state.level = 2;
          state.groupActive = 1;
        } else if (snap.level == 2) {
          state.level = 3;
          state.groupActive = 1;
        }
      } else if (areArraysEqual(snap.T568B, snap.storedUserColors) && snap.level == 3) {
        toast("Great Work Crafter! You can now use the Crimper", {
          icon: "👏",
          duration: 4000,
        });
        state.equalArrays = true;
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
    state.level = 1;
    state.groupActive = 1;
  };
  const colorSchemeB = () => {
    state.colorScheme = "T568B";
    state.level = 1;
    state.groupActive = 1;
  };

  const crimp = () => {
    state.playCrimpAnim = true;
    state.equalArrays = false;
  };

  // Reset Colors
  const resetColors = () => {
    // state.storedUserColors = snap.resetUserColors;
    switch (snap.level) {
      case 1: {
        state.storedUserColors = snap?.levelOBJ.L1;
        state.groupActive = 1;
        break;
      }
      case 2: {
        state.storedUserColors = snap?.levelOBJ.L2;
        state.groupActive = 1;
        break;
      }
      case 3: {
        state.storedUserColors = snap?.levelOBJ.L3;
        state.groupActive = 1;
        break;
      }
    }
  };

  const handleHelp = () => {
    state.help = true;
  };

  const cancelHelp = () => {
    state.help = false;
  };

  const steps = [
    {
      target: "config-tour",
      content: "Welcome!",
    },
    {
      target: ".config-tour",
      placement: "right",
      content:
        "Hi there! This is your configurator screen. Here, you can customize cable colors and crimp with ease.You can drag it to any region of the screen for your convenience Let’s get started!",
    },
    {
      target: ".color-scheme",
      placement: "right",
      content:
        "Choose your color scheme for Ethernet cables. This will help you see different wiring standards like T568A and T568B!",
    },
    {
      target: ".wire-selection",
      placement: "right",
      content:
        "The wires are numbered from 1 to 8 in a top to bottom approach. Selected wires will appear longer than the others.",
    },
    {
      target: ".color-selection",
      placement: "right",
      content:
        "After selecting a wire, pick a color for it. Do this for each wire until they are all colored according to the standard you specified(T568A or T568B). Remember, the colors here are random!",
    },
    {
      target: ".reset-color-selection",
      placement: "right",
      content:
        "Use this button to reset your color choices and start fresh. Great for trying new setups!",
    },
    {
      target: ".crimp-action",
      placement: "right",
      content:
        "Once your wire colors are correctly set, this button will activate. Once activated, click to crimp your cable successfully!",
    },
  ];

  const T568AColors = [];
  const T568BColors = [];

  // Grouping the colors into objects
  for (let i = 0; i < snap.T568A.length; i += 2) {
    T568AColors.push({
      solid: snap.T568A[i],
      striped: snap.T568A[i + 1],
    });
  }
  for (let i = 0; i < snap.T568B.length; i += 2) {
    T568BColors.push({
      solid: snap.T568B[i],
      striped: snap.T568B[i + 1],
    });
  }

  return (
    <>
      {snap.startTraining && (
        <>
          <Joyride
            steps={steps}
            run={snap.startOnboarding}
            locale={{
              last: "Finish",
              back: "Previous",
            }}
            continuous={true}
            showSkipButton={true}
            // showProgress={true}
            scrollToFirstStep={true}
            styles={{
              options: {
                arrowColor: "#ffffff",
                backgroundColor: "#ffffff",
                overlayColor: "rgba(0, 0, 0, 0.8)",
                primaryColor: "#ffb85c",
                textColor: "#ffb85c",
                width: 400,
                zIndex: 1000,
              },
            }}
          />

          <Draggable>
            <div className="flex flex-col config-tour justify-between items-center w-[30rem] config">
              <div className="flex flex-col color-scheme items-center">
                <h4 className="text-white bg-[#bebebe] rounded-md p-2 text-lg font-bold">
                  Practice Mode (Level {snap?.level} of 3){" "}
                </h4>
                <h4 className="text-[#ffb85c] text-lg font-bold">Choose Color Scheme: </h4>
                <div>
                  <label className="cursor-pointer mx-2">
                    <input
                      type="radio"
                      name="color scheme"
                      onClick={colorSchemeA}
                      className="cursor-pointer accent-orange-400"
                      defaultChecked
                    />
                    <span className="ml-1 text-lg font-bold text-[#ffb85c]">T568A</span>
                  </label>
                  <label className="cursor-pointer mx-2">
                    <input
                      type="radio"
                      name="color scheme"
                      onClick={colorSchemeB}
                      className="cursor-pointer accent-orange-400"
                    />
                    <span className="ml-1 text-lg font-bold text-[#ffb85c]">T568B</span>
                  </label>
                </div>
              </div>
              {/* Wire Selectors */}
              <div className="config-inner wire-selection mb-3 bg-black w-full flex flex-row items-center justify-center">
                <div className="mx-1 hover:cursor-pointer">
                  {/* Prev Wire */}
                  <button
                    type="button"
                    className="bg-white scale-[0.6] text-center w-48 rounded-2xl h-14 relative font-sans text-black text-xl font-semibold group"
                  >
                    <div
                      onClick={prevActiveGroup}
                      className="bg-orange-400 rounded-xl h-12 w-1/4 flex items-center justify-center absolute left-1 top-[4px] group-hover:w-[184px] z-10 duration-500"
                    >
                      <svg
                        width="25px"
                        height="25px"
                        viewBox="0 0 1024 1024"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fill="#fff"
                          d="M224 480h640a32 32 0 1 1 0 64H224a32 32 0 0 1 0-64z"
                        ></path>
                        <path
                          fill="#fff"
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
                      className="bg-orange-400 rounded-xl rotate-180 h-12 w-1/4 flex items-center justify-center absolute right-1 top-[4px] group-hover:w-[184px] z-10 duration-500"
                    >
                      <svg
                        width="25px"
                        height="25px"
                        viewBox="0 0 1024 1024"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fill="#fff"
                          d="M224 480h640a32 32 0 1 1 0 64H224a32 32 0 0 1 0-64z"
                        ></path>
                        <path
                          fill="#fff"
                          d="m237.248 512 265.408 265.344a32 32 0 0 1-45.312 45.312l-288-288a32 32 0 0 1 0-45.312l288-288a32 32 0 1 1 45.312 45.312L237.248 512z"
                        ></path>
                      </svg>
                    </div>
                    <p className="-translate-x-5">Next Wire</p>
                  </button>
                </div>
              </div>
              {/* Colors */}
              <div className="flex color-selection bg-[#bebebe] rounded-[0.5rem] justify-between align-middle p-3">
                {snap.colors.map((color, index) => (
                  <div
                    key={index}
                    style={{
                      background: `linear-gradient(to bottom, ${color.solid} 50%, ${color.striped} 50%)`,
                    }}
                    className="mx-3 w-6 h-6 rounded-full hover:cursor-pointer"
                    onClick={() => handleColorChange(index)}
                  ></div>
                ))}
              </div>
              {/* Crimp Button */}
              <div className="flex justify-between items-center  w-[24rem]">
                <Button
                  size="sm"
                  className="bg-[#ffa733] h-9 reset-color-selection"
                  onClick={resetColors}
                >
                  Reset Colors
                </Button>
                <div
                  onClick={snap.equalArrays && crimp}
                  className={`crimp-action cursor-not-allowed ${
                    snap.equalArrays && snap.level == 3 ? "animate-bounce hover:cursor-pointer" : ""
                  }`}
                >
                  <EthernetSvg
                    size={"80px"}
                    color={`${snap.equalArrays ? "#ffa733" : "#afafaf"}`}
                  />
                </div>
                <Button
                  size="sm"
                  className="bg-[#ffa733] h-9 reset-color-selection"
                  onClick={handleHelp}
                >
                  Need Help ?
                </Button>
              </div>
            </div>
          </Draggable>

          <Draggable>
            <div className="w-[10rem] absolute bottom-[15rem] left-[42rem] Lconfig">
              <h1 className="text-white bg-[#bebebe] rounded-md p-2 text-5xl text-center font-bold">
                Level {snap?.level}
              </h1>
            </div>
          </Draggable>

          {snap.help && (
            <Draggable>
              <div className="flex flex-col justify-between items-center w-[30rem] config">
                {/* Close Button */}
                <div className="w-[28rem] flex justify-end">
                  <div
                    onClick={cancelHelp}
                    className="text-white rounded-full cursor-pointer hover:bg-orange-400 w-6 h-6 text-center bg-red-500 "
                  >
                    X
                  </div>
                </div>
                {/* Colors Coding for T568A */}
                <h4 className="text-[#ffb85c] underline text-lg font-bold">
                  T568A Color Code Reference
                </h4>
                <div className="flex  bg-[#bebebe] rounded-[0.5rem] justify-between align-middle p-3">
                  {T568AColors.map((color, index) => (
                    <div
                      key={index}
                      style={{
                        background: `linear-gradient(to bottom, ${color.solid} 50%, ${color.striped} 50%)`,
                      }}
                      className="mx-3 w-6 h-6 rounded-full"
                    ></div>
                  ))}
                </div>

                {/* Colors Coding for T568B */}
                <h4 className="text-[#ffb85c] underline text-lg mt-5 font-bold">
                  T568B Color Code Reference
                </h4>
                <div className="flex  bg-[#bebebe] rounded-[0.5rem] mb-4 justify-between align-middle p-3">
                  {T568BColors.map((color, index) => (
                    <div
                      key={index}
                      style={{
                        background: `linear-gradient(to bottom, ${color.solid} 50%, ${color.striped} 50%)`,
                      }}
                      className="mx-3 w-6 h-6 rounded-full"
                    ></div>
                  ))}
                </div>
              </div>
            </Draggable>
          )}
        </>
      )}
    </>
  );
};

export default ConfiguratorScreen;
