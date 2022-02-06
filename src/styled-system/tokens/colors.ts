/* -------------------------------------------------------------------------------------------------
 * Common to light and dark palette
 * -----------------------------------------------------------------------------------------------*/

const blackAlpha = {
  blackAlpha1: "#00000003",
  blackAlpha2: "#00000007",
  blackAlpha3: "#0000000c",
  blackAlpha4: "#00000012",
  blackAlpha5: "#00000017",
  blackAlpha6: "#0000001d",
  blackAlpha7: "#00000024",
  blackAlpha8: "#00000038",
  blackAlpha9: "#00000070",
  blackAlpha10: "#0000007a",
  blackAlpha11: "#00000090",
  blackAlpha12: "#000000e8",
};

const whiteAlpha = {
  whiteAlpha1: "#ffffff00",
  whiteAlpha2: "#ffffff03",
  whiteAlpha3: "#ffffff09",
  whiteAlpha4: "#ffffff0e",
  whiteAlpha5: "#ffffff16",
  whiteAlpha6: "#ffffff20",
  whiteAlpha7: "#ffffff2d",
  whiteAlpha8: "#ffffff3f",
  whiteAlpha9: "#ffffff62",
  whiteAlpha10: "#ffffff72",
  whiteAlpha11: "#ffffff97",
  whiteAlpha12: "#ffffffeb",
};

export const commonColors = {
  // transparent: "transparent",
  // current: "currentColor",
  // black: "#000000",
  // white: "#ffffff",
  ...blackAlpha,
  ...whiteAlpha,
};

/* -------------------------------------------------------------------------------------------------
 * Light palette
 * -----------------------------------------------------------------------------------------------*/

// Radix - Indigo
const primary = {
  primary1: "#fdfdfe",
  primary2: "#f8faff",
  primary3: "#f0f4ff",
  primary4: "#e6edfe",
  primary5: "#d9e2fc",
  primary6: "#c6d4f9",
  primary7: "#aec0f5",
  primary8: "#8da4ef",
  primary9: "#3e63dd",
  primary10: "#3a5ccc",
  primary11: "#3451b2",
  primary12: "#101d46",
};

const primaryAlpha = {
  primaryAlpha1: "#05058202",
  primaryAlpha2: "#054cff07",
  primaryAlpha3: "#0144ff0f",
  primaryAlpha4: "#0247f519",
  primaryAlpha5: "#023ceb26",
  primaryAlpha6: "#013de439",
  primaryAlpha7: "#0038e051",
  primaryAlpha8: "#0134db72",
  primaryAlpha9: "#0031d2c1",
  primaryAlpha10: "#002cbdc5",
  primaryAlpha11: "#00259ecb",
  primaryAlpha12: "#000e3aef",
};

// Radix - Gray
const neutral = {
  neutral1: "#fcfcfc",
  neutral2: "#f8f8f8",
  neutral3: "#f3f3f3",
  neutral4: "#ededed",
  neutral5: "#e8e8e8",
  neutral6: "#e2e2e2",
  neutral7: "#dbdbdb",
  neutral8: "#c7c7c7",
  neutral9: "#8f8f8f",
  neutral10: "#858585",
  neutral11: "#6f6f6f",
  neutral12: "#171717",
};

const neutralAlpha = {
  neutralAlpha1: "#00000003",
  neutralAlpha2: "#00000007",
  neutralAlpha3: "#0000000c",
  neutralAlpha4: "#00000012",
  neutralAlpha5: "#00000017",
  neutralAlpha6: "#0000001d",
  neutralAlpha7: "#00000024",
  neutralAlpha8: "#00000038",
  neutralAlpha9: "#00000070",
  neutralAlpha10: "#0000007a",
  neutralAlpha11: "#00000090",
  neutralAlpha12: "#000000e8",
};

// Radix - Green
const success = {
  success1: "#fbfefc",
  success2: "#f2fcf5",
  success3: "#e9f9ee",
  success4: "#ddf3e4",
  success5: "#ccebd7",
  success6: "#b4dfc4",
  success7: "#92ceac",
  success8: "#5bb98c",
  success9: "#30a46c",
  success10: "#299764",
  success11: "#18794e",
  success12: "#153226",
};

const successAlpha = {
  successAlpha1: "#05c04304",
  successAlpha2: "#00c43b0d",
  successAlpha3: "#02ba3c16",
  successAlpha4: "#01a63522",
  successAlpha5: "#009b3633",
  successAlpha6: "#0193364b",
  successAlpha7: "#008c3d6d",
  successAlpha8: "#00934ca4",
  successAlpha9: "#008f4acf",
  successAlpha10: "#008346d6",
  successAlpha11: "#006b3be7",
  successAlpha12: "#002012ea",
};

// Radix - Blue
const info = {
  info1: "#fbfdff",
  info2: "#f5faff",
  info3: "#edf6ff",
  info4: "#e1f0ff",
  info5: "#cee7fe",
  info6: "#b7d9f8",
  info7: "#96c7f2",
  info8: "#5eb0ef",
  info9: "#0091ff",
  info10: "#0081f1",
  info11: "#006adc",
  info12: "#00254d",
};

const infoAlpha = {
  infoAlpha1: "#0582ff04",
  infoAlpha2: "#0582ff0a",
  infoAlpha3: "#0280ff12",
  infoAlpha4: "#0180ff1e",
  infoAlpha5: "#0180ef30",
  infoAlpha6: "#0177e648",
  infoAlpha7: "#0077df69",
  infoAlpha8: "#0082e6a1",
  infoAlpha9: "#0091fffa",
  infoAlpha10: "#0080f1fa",
  infoAlpha11: "#0066dbfa",
  infoAlpha12: "#002149fa",
};

// Radix - Amber
const warning = {
  warning1: "#fefdfb",
  warning2: "#fff9ed",
  warning3: "#fff4d5",
  warning4: "#ffecbc",
  warning5: "#ffe3a2",
  warning6: "#ffd386",
  warning7: "#f3ba63",
  warning8: "#ee9d2b",
  warning9: "#ffb224",
  warning10: "#ffa01c",
  warning11: "#ad5700",
  warning12: "#4e2009",
};

const warningAlpha = {
  warningAlpha1: "#c0820504",
  warningAlpha2: "#ffab0212",
  warningAlpha3: "#ffbb012a",
  warningAlpha4: "#ffb70043",
  warningAlpha5: "#ffb3005d",
  warningAlpha6: "#ffa20179",
  warningAlpha7: "#ec8d009c",
  warningAlpha8: "#ea8900d4",
  warningAlpha9: "#ffa600db",
  warningAlpha10: "#ff9500e3",
  warningAlpha11: "#ab5300fa",
  warningAlpha12: "#481800f6",
};

// Radix - Red
const danger = {
  danger1: "#fffcfc",
  danger2: "#fff8f8",
  danger3: "#ffefef",
  danger4: "#ffe5e5",
  danger5: "#fdd8d8",
  danger6: "#f9c6c6",
  danger7: "#f3aeaf",
  danger8: "#eb9091",
  danger9: "#e5484d",
  danger10: "#dc3d43",
  danger11: "#cd2b31",
  danger12: "#381316",
};

const dangerAlpha = {
  dangerAlpha1: "#ff050503",
  dangerAlpha2: "#ff050508",
  dangerAlpha3: "#ff010110",
  dangerAlpha4: "#ff00001a",
  dangerAlpha5: "#f2000027",
  dangerAlpha6: "#e4010139",
  dangerAlpha7: "#d9000451",
  dangerAlpha8: "#d100046f",
  dangerAlpha9: "#db0007b7",
  dangerAlpha10: "#d10007c2",
  dangerAlpha11: "#c30007d4",
  dangerAlpha12: "#280003ec",
};

const semanticColors = {
  defaultButtonBg: "white",
};

export const lightColors = {
  ...primary,
  ...primaryAlpha,

  ...neutral,
  ...neutralAlpha,

  ...success,
  ...successAlpha,

  ...info,
  ...infoAlpha,

  ...warning,
  ...warningAlpha,

  ...danger,
  ...dangerAlpha,

  ...semanticColors,
};

/* -------------------------------------------------------------------------------------------------
 * Dark palette
 * -----------------------------------------------------------------------------------------------*/

// Radix - Indigo dark
const primaryDark = {
  primary1: "#131620",
  primary2: "#15192d",
  primary3: "#192140",
  primary4: "#1c274f",
  primary5: "#1f2c5c",
  primary6: "#22346e",
  primary7: "#273e89",
  primary8: "#2f4eb2",
  primary9: "#3e63dd",
  primary10: "#5373e7",
  primary11: "#849dff",
  primary12: "#eef1fd",
};

const primaryDarkAlpha = {
  primaryAlpha1: "#00000000",
  primaryAlpha2: "#3549fc0f",
  primaryAlpha3: "#3c63fe25",
  primaryAlpha4: "#3d67ff36",
  primaryAlpha5: "#3f69fe45",
  primaryAlpha6: "#3e6bff59",
  primaryAlpha7: "#3d6aff78",
  primaryAlpha8: "#3e6bffa7",
  primaryAlpha9: "#4571ffd8",
  primaryAlpha10: "#5a7effe4",
  primaryAlpha11: "#86a0fffa",
  primaryAlpha12: "#f2f5fffa",
};

// Radix - Gray dark
const neutralDark = {
  neutral1: "#161616",
  neutral2: "#1c1c1c",
  neutral3: "#232323",
  neutral4: "#282828",
  neutral5: "#2e2e2e",
  neutral6: "#343434",
  neutral7: "#3e3e3e",
  neutral8: "#505050",
  neutral9: "#707070",
  neutral10: "#7e7e7e",
  neutral11: "#a0a0a0",
  neutral12: "#ededed",
};

const neutralDarkAlpha = {
  neutralAlpha1: "#ffffff00",
  neutralAlpha2: "#ffffff07",
  neutralAlpha3: "#ffffff0e",
  neutralAlpha4: "#ffffff14",
  neutralAlpha5: "#ffffff1a",
  neutralAlpha6: "#ffffff21",
  neutralAlpha7: "#ffffff2c",
  neutralAlpha8: "#ffffff3f",
  neutralAlpha9: "#ffffff62",
  neutralAlpha10: "#ffffff72",
  neutralAlpha11: "#ffffff97",
  neutralAlpha12: "#ffffffeb",
};

// Radix - Green dark
const successDark = {
  success1: "#0d1912",
  success2: "#0c1f17",
  success3: "#0f291e",
  success4: "#113123",
  success5: "#133929",
  success6: "#164430",
  success7: "#1b543a",
  success8: "#236e4a",
  success9: "#30a46c",
  success10: "#3cb179",
  success11: "#4cc38a",
  success12: "#e5fbeb",
};

const successDarkAlpha = {
  successAlpha1: "#00000000",
  successAlpha2: "#00f7ca07",
  successAlpha3: "#2afebe12",
  successAlpha4: "#33feb31b",
  successAlpha5: "#38feb524",
  successAlpha6: "#3dffb130",
  successAlpha7: "#43ffad42",
  successAlpha8: "#49ffaa5e",
  successAlpha9: "#47ffa69a",
  successAlpha10: "#54ffafa9",
  successAlpha11: "#62ffb3bd",
  successAlpha12: "#eafff0fa",
};

// Radix - Blue dark
const infoDark = {
  info1: "#0f1720",
  info2: "#0f1b2d",
  info3: "#10243e",
  info4: "#102a4c",
  info5: "#0f3058",
  info6: "#0d3868",
  info7: "#0a4481",
  info8: "#0954a5",
  info9: "#0091ff",
  info10: "#369eff",
  info11: "#52a9ff",
  info12: "#eaf6ff",
};

const infoDarkAlpha = {
  infoAlpha1: "#00000000",
  infoAlpha2: "#0f5afc0f",
  infoAlpha3: "#1677fe22",
  infoAlpha4: "#1476fe32",
  infoAlpha5: "#0f7bfe40",
  infoAlpha6: "#097cff52",
  infoAlpha7: "#047dff6f",
  infoAlpha8: "#057eff98",
  infoAlpha9: "#0095fffa",
  infoAlpha10: "#37a1fffa",
  infoAlpha11: "#53acfffa",
  infoAlpha12: "#effbfffa",
};

// Radix - Amber dark
const warningDark = {
  warning1: "#1f1300",
  warning2: "#271700",
  warning3: "#341c00",
  warning4: "#3f2200",
  warning5: "#4a2900",
  warning6: "#573300",
  warning7: "#693f05",
  warning8: "#824e00",
  warning9: "#ffb224",
  warning10: "#ffcb47",
  warning11: "#f1a10d",
  warning12: "#fef3dd",
};

const warningDarkAlpha = {
  warningAlpha1: "#00000000",
  warningAlpha2: "#fd830009",
  warningAlpha3: "#fe730018",
  warningAlpha4: "#ff7b0024",
  warningAlpha5: "#ff840031",
  warningAlpha6: "#ff950040",
  warningAlpha7: "#ff970f54",
  warningAlpha8: "#ff990071",
  warningAlpha9: "#ffb625fa",
  warningAlpha10: "#ffce48fa",
  warningAlpha11: "#ffab0eef",
  warningAlpha12: "#fff8e1fa",
};

// Radix - Red dark
const dangerDark = {
  danger1: "#1f1315",
  danger2: "#291415",
  danger3: "#3c181a",
  danger4: "#481a1d",
  danger5: "#541b1f",
  danger6: "#671e22",
  danger7: "#822025",
  danger8: "#aa2429",
  danger9: "#e5484d",
  danger10: "#f2555a",
  danger11: "#ff6369",
  danger12: "#feecee",
};

const dangerDarkAlpha = {
  dangerAlpha1: "#00000000",
  dangerAlpha2: "#fd28150b",
  dangerAlpha3: "#fe3a3d21",
  dangerAlpha4: "#fe39402f",
  dangerAlpha5: "#ff353f3c",
  dangerAlpha6: "#ff353c52",
  dangerAlpha7: "#ff303b71",
  dangerAlpha8: "#ff2f369e",
  dangerAlpha9: "#ff4f55e1",
  dangerAlpha10: "#ff595ff0",
  dangerAlpha11: "#ff646afa",
  dangerAlpha12: "#fff0f2fa",
};

const semanticDarkColors = {
  defaultButtonBg: "$neutral3",
};

export const darkColors: typeof lightColors = {
  ...primaryDark,
  ...primaryDarkAlpha,

  ...neutralDark,
  ...neutralDarkAlpha,

  ...successDark,
  ...successDarkAlpha,

  ...infoDark,
  ...infoDarkAlpha,

  ...warningDark,
  ...warningDarkAlpha,

  ...dangerDark,
  ...dangerDarkAlpha,

  ...semanticDarkColors,
};
