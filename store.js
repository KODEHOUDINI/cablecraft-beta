/**
 * Reason For structuring my code like this can be found here
 * https://chatgpt.com/share/3a7a1fbe-5b15-44ab-99fb-e78cec3d48b4
 */

import { proxy, subscribe } from "valtio";

const VERSION = "1.1"; // Increment this whenever you make significant changes

const storedStateString =
  typeof window !== "undefined" && window?.localStorage.getItem("cablecraftReact");
let initialState;

if (storedStateString) {
  const parsedState = JSON.parse(storedStateString);
  if (parsedState.version === VERSION) {
    initialState = parsedState;
  } else {
    // Version mismatch, clear storage and use default state
    localStorage.removeItem("cablecraftReact");
    initialState = {
      version: VERSION,
      groupActive: 1,
      currentToolIndex: 0,
      targetPosZ: -9.829,
      startTraining: false,
      playCrimpAnim: false,
      glassbgDisplay: true,
      showManual: false,
      startOnboarding: false,
      equalArrays: false,
      colorScheme: "T568A",
      showModal: false,
      ethernetRest: [-0.27, 1.074, -9.73],
      internetConnection: false,
      help: false,
      level: 1,
      levelOBJ: {
        L1: [
          "#4361EE",
          "#ffffff",
          "#FF8400",
          "#FF8400",
          "#683E27",
          "#ffffff",
          "#683E27",
          "#683E27",
          "#04E730",
          "#ffffff",
          "#04E730",
          "#04E730",
          "#FF8400",
          "#ffffff",
          "#4361EE",
          "#4361EE",
        ],
        L2: [
          "#683E27",
          "#ffffff",
          "#683E27",
          "#683E27",
          "#4361EE",
          "#ffffff",
          "#FF8400",
          "#FF8400",
          "#FF8400",
          "#ffffff",
          "#4361EE",
          "#4361EE",
          "#04E730",
          "#ffffff",
          "#04E730",
          "#04E730",
        ],
        L3: [
          "#04E730",
          "#ffffff",
          "#683E27",
          "#683E27",
          "#683E27",
          "#ffffff",
          "#FF8400",
          "#ffffff",
          "#04E730",
          "#04E730",
          "#4361EE",
          "#ffffff",
          "#FF8400",
          "#FF8400",
          "#4361EE",
          "#4361EE",
        ],
      },
      T568A: [
        "#04E730",
        "#ffffff",
        "#04E730",
        "#04E730",
        "#FF8400",
        "#ffffff",
        "#4361EE",
        "#4361EE",
        "#4361EE",
        "#ffffff",
        "#FF8400",
        "#FF8400",
        "#683E27",
        "#ffffff",
        "#683E27",
        "#683E27",
      ],
      T568B: [
        "#FF8400",
        "#ffffff",
        "#FF8400",
        "#FF8400",
        "#04E730",
        "#ffffff",
        "#4361EE",
        "#4361EE",
        "#4361EE",
        "#ffffff",
        "#04E730",
        "#04E730",
        "#683E27",
        "#ffffff",
        "#683E27",
        "#683E27",
      ],
      colorIndex: 0,
      storedUserColors: [
        "#fff",
        "#fff",
        "#fff",
        "#fff",
        "#fff",
        "#fff",
        "#fff",
        "#fff",
        "#fff",
        "#fff",
        "#fff",
        "#fff",
        "#fff",
        "#fff",
        "#fff",
        "#fff",
      ],
      resetUserColors: [
        "#fff",
        "#fff",
        "#fff",
        "#fff",
        "#fff",
        "#fff",
        "#fff",
        "#fff",
        "#fff",
        "#fff",
        "#fff",
        "#fff",
        "#fff",
        "#fff",
        "#fff",
        "#fff",
      ],
      colors: [
        { solid: "#04E730", striped: "#ffffff" }, // Green with white stripes
        { solid: "#FF8400", striped: "#ffffff" }, // Orange with white stripes
        { solid: "#4361EE", striped: "#ffffff" }, // Blue with white stripes
        { solid: "#683E27", striped: "#ffffff" }, // Brown with white stripes
        { solid: "#04E730", striped: "#04E730" }, // Green
        { solid: "#FF8400", striped: "#FF8400" }, // Orange
        { solid: "#4361EE", striped: "#4361EE" }, // Blue
        { solid: "#683E27", striped: "#683E27" }, // Brown
      ],
    };
  }
} else {
  // No existing data, use default state
  initialState = {
    version: VERSION,
    groupActive: 1,
    currentToolIndex: 0,
    targetPosZ: -9.829,
    startTraining: false,
    playCrimpAnim: false,
    glassbgDisplay: true,
    showManual: false,
    startOnboarding: false,
    equalArrays: false,
    colorScheme: "T568A",
    showModal: false,
    ethernetRest: [-0.27, 1.074, -9.73],
    internetConnection: false,
    help: false,
    level: 1,
    levelOBJ: {
      L1: [
        "#4361EE",
        "#ffffff",
        "#FF8400",
        "#FF8400",
        "#683E27",
        "#ffffff",
        "#683E27",
        "#683E27",
        "#04E730",
        "#ffffff",
        "#04E730",
        "#04E730",
        "#FF8400",
        "#ffffff",
        "#4361EE",
        "#4361EE",
      ],
      L2: [
        "#683E27",
        "#ffffff",
        "#683E27",
        "#683E27",
        "#4361EE",
        "#ffffff",
        "#FF8400",
        "#FF8400",
        "#FF8400",
        "#ffffff",
        "#4361EE",
        "#4361EE",
        "#04E730",
        "#ffffff",
        "#04E730",
        "#04E730",
      ],
      L3: [
        "#04E730",
        "#ffffff",
        "#683E27",
        "#683E27",
        "#683E27",
        "#ffffff",
        "#FF8400",
        "#ffffff",
        "#04E730",
        "#04E730",
        "#4361EE",
        "#ffffff",
        "#FF8400",
        "#FF8400",
        "#4361EE",
        "#4361EE",
      ],
    },
    T568A: [
      "#04E730",
      "#ffffff",
      "#04E730",
      "#04E730",
      "#FF8400",
      "#ffffff",
      "#4361EE",
      "#4361EE",
      "#4361EE",
      "#ffffff",
      "#FF8400",
      "#FF8400",
      "#683E27",
      "#ffffff",
      "#683E27",
      "#683E27",
    ],
    T568B: [
      "#FF8400",
      "#ffffff",
      "#FF8400",
      "#FF8400",
      "#04E730",
      "#ffffff",
      "#4361EE",
      "#4361EE",
      "#4361EE",
      "#ffffff",
      "#04E730",
      "#04E730",
      "#683E27",
      "#ffffff",
      "#683E27",
      "#683E27",
    ],
    colorIndex: 0,
    storedUserColors: [
      "#fff",
      "#fff",
      "#fff",
      "#fff",
      "#fff",
      "#fff",
      "#fff",
      "#fff",
      "#fff",
      "#fff",
      "#fff",
      "#fff",
      "#fff",
      "#fff",
      "#fff",
      "#fff",
    ],
    resetUserColors: [
      "#fff",
      "#fff",
      "#fff",
      "#fff",
      "#fff",
      "#fff",
      "#fff",
      "#fff",
      "#fff",
      "#fff",
      "#fff",
      "#fff",
      "#fff",
      "#fff",
      "#fff",
      "#fff",
    ],
    colors: [
      { solid: "#04E730", striped: "#ffffff" }, // Green with white stripes
      { solid: "#FF8400", striped: "#ffffff" }, // Orange with white stripes
      { solid: "#4361EE", striped: "#ffffff" }, // Blue with white stripes
      { solid: "#683E27", striped: "#ffffff" }, // Brown with white stripes
      { solid: "#04E730", striped: "#04E730" }, // Green
      { solid: "#FF8400", striped: "#FF8400" }, // Orange
      { solid: "#4361EE", striped: "#4361EE" }, // Blue
      { solid: "#683E27", striped: "#683E27" }, // Brown
    ],
  };
}

const state = proxy(initialState);

subscribe(state, () => {
  localStorage.setItem("cablecraftReact", JSON.stringify(state));
});

export { state };
