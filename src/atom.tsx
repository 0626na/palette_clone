import { m } from "framer-motion";
import { atom } from "recoil";

interface IColor {
  color: string;
  name: string;
}

export interface IColorPalette {
  colors: IColor[];
  paletteName: string;
}

export const ColorsRGBFlat = atom<IColorPalette>({
  key: "flat_rgb",
  default: {
    colors: [
      {
        color: "rgb(236, 240, 241)",
        name: "CLOUDS",
      },
      {
        color: "rgb(26, 188, 156)",
        name: "TURQUOISE",
      },
      {
        color: "rgb(46, 204, 113)",
        name: "EMERALD",
      },
      {
        color: "rgb(52, 152, 219)",
        name: "PETER RIVER",
      },
      {
        color: "rgb(155, 89, 182)",
        name: "AMETHST",
      },
      {
        color: "rgb(52, 73, 94)",
        name: "WET ASPHALT",
      },
      {
        color: "rgb(22, 160, 133)",
        name: "GREEN SEA",
      },
      {
        color: "rgb(39, 174, 96)",
        name: "NEPHRITIS",
      },
      {
        color: "rgb(41, 128, 185)",
        name: "BERIZE HOLE",
      },
      {
        color: "rgb(142, 68, 173)",
        name: "WISTERIA",
      },
      {
        color: "rgb(44, 62, 80)",
        name: "MIDNIGHT BLUE",
      },
      {
        color: "rgb(241, 196, 15)",
        name: "SUN FLOWER",
      },
      {
        color: "rgb(230, 126, 34)",
        name: "CARROT",
      },
      {
        color: "rgb(231, 76, 60)",
        name: "ALIZARIN",
      },
      {
        color: "rgb(149, 165, 166)",
        name: "CONCRETE",
      },
      {
        color: "rgb(243, 156, 18)",
        name: "ORANGE",
      },
      {
        color: "rgb(211, 84, 0)",
        name: "PUMPKIN",
      },
      {
        color: "rgb(192, 57, 43)",
        name: "POMEGRANATE",
      },
      {
        color: "rgb(189, 195, 199)",
        name: "SIVER",
      },
      {
        color: "rgb(127, 140, 141)",
        name: "ASESTOS",
      },
    ],
    paletteName: "Flat Palette",
  },
});

export const ColorsRGBAmerican = atom<IColorPalette>({
  key: "american_rgb",
  default: {
    colors: [
      {
        color: "rgb(85, 239, 196)",
        name: "LIGHT GREENISH BLUE",
      },
      {
        color: "rgb(129, 236, 236)",
        name: "FADED POSTER",
      },
      {
        color: "rgb(116, 185, 255)",
        name: "GREEN DARNER TAIL",
      },
      {
        color: "rgb(162, 155, 254)",
        name: "SHY MOMENT",
      },
      {
        color: "rgb(223, 230, 233)",
        name: "CITY LIGHTS",
      },
      {
        color: "rgb(0, 184, 148)",
        name: "MINT LEAF",
      },
      {
        color: "rgb(0, 206, 201)",
        name: "ROBIN`S EGG BLUE",
      },
      {
        color: "rgb(9, 132, 227)",
        name: "ELECTRON BLUE",
      },
      {
        color: "rgb(108, 92, 231)",
        name: "EXODUS FURIT",
      },
      {
        color: "rgb(178, 190, 195)",
        name: "SMOOTHING BREEZE",
      },
      {
        color: "rgb(255, 234, 167)",
        name: "SOUR LEMON",
      },
      {
        color: "rgb(250, 177, 160)",
        name: "FIRST DATE",
      },
      {
        color: "rgb(255, 118, 117)",
        name: "PINK GLAMOUR",
      },
      {
        color: "rgb(253, 121, 168)",
        name: "PICO-8 PINK",
      },
      {
        color: "rgb(99, 110, 114)",
        name: "AMERICAN RIVER",
      },
      {
        color: "rgb(253, 203, 110)",
        name: "BRIGHT YARROW",
      },
      {
        color: "rgb(225, 112, 85)",
        name: "ORANGEVILLE",
      },
      {
        color: "rgb(214, 48, 49)",
        name: "CHI-GONG",
      },
      {
        color: "rgb(232, 67, 147)",
        name: "PRUNUS AVIUM",
      },
      {
        color: "rgb(45, 52, 54)",
        name: "DRACULA ORCHID",
      },
    ],
    paletteName: "American Palette",
  },
});

export const ColorsRGBBritish = atom<IColorPalette>({
  key: "british_rgb",
  default: {
    colors: [
      {
        color: "rgb(0, 168, 255)",
        name: "PROTOSS PYLON",
      },
      {
        color: "rgb(156, 136, 255)",
        name: "PERIWINKLE",
      },
      {
        color: "rgb(251, 197, 49)",
        name: "RISE-N-SHINE",
      },
      {
        color: "rgb(76, 209, 55)",
        name: "DOWNLOAD PROGRESS",
      },
      {
        color: "rgb(72, 126, 176)",
        name: "SEABROOK",
      },
      {
        color: "rgb(0, 151, 230)",
        name: "VANADYL BLUE",
      },
      {
        color: "rgb(140, 122, 230)",
        name: "MATT PURPLE",
      },
      {
        color: "rgb(225, 177, 44)",
        name: "NANOHANACHA GOLD",
      },
      {
        color: "rgb(68, 189, 50)",
        name: "SKIRRET GREEN",
      },
      {
        color: "rgb(64, 115, 158)",
        name: "NAVAL",
      },
      {
        color: "rgb(232, 65, 24)",
        name: "NASTURCIAN FLOWER",
      },
      {
        color: "rgb(245, 246, 250)",
        name: "LYNX WHITE",
      },
      {
        color: "rgb(127, 143, 166)",
        name: "BLUEBERRY SODA",
      },
      {
        color: "rgb(39, 60, 117)",
        name: "MAZARINE BLUE",
      },
      {
        color: "rgb(53, 59, 72)",
        name: "BLUE NIGHTS",
      },
      {
        color: "rgb(194, 54, 22)",
        name: "HARLEY DAVIDSON ORANGE",
      },
      {
        color: "rgb(220, 221, 225)",
        name: "HINT OF PENSIVE",
      },
      {
        color: "rgb(113, 128, 147)",
        name: "CHAIN GANG GREY",
      },
      {
        color: "rgb(25, 42, 86)",
        name: "PICO VOID",
      },
      {
        color: "rgb(47, 54, 64)",
        name: "ELECTROMAGNETIC",
      },
    ],
    paletteName: "British Palette",
  },
});

export const ColorsRGBCanadian = atom<IColorPalette>({
  key: "canada_rgb",
  default: {
    colors: [
      {
        color: "rgb(255, 159, 243)",
        name: "JGGLYPUFF",
      },
      {
        color: "rgb(254, 202, 87)",
        name: "CASANADORA YELLOW",
      },
      {
        color: "rgb(255, 107, 107)",
        name: "PASTEL RED",
      },
      {
        color: "rgb(72, 219, 251)",
        name: "MEGAMAN",
      },
      {
        color: "rgb(29, 209, 161)",
        name: "WILD CARIBBEAN GREEN",
      },
      {
        color: "rgb(243, 104, 224)",
        name: "LIAN HONG LOTUS PINK",
      },
      {
        color: "rgb(255, 159, 67)",
        name: "DOUBLE DRAGON SKIN",
      },
      {
        color: "rgb(238, 82, 83)",
        name: "AMOUR",
      },
      {
        color: "rgb(10, 189, 227)",
        name: "CYANITIE",
      },
      {
        color: "rgb(16, 172, 132)",
        name: "DARK MOUNTAIN MEADOW",
      },
      {
        color: "rgb(0, 210, 211)",
        name: "JADE DUST",
      },
      {
        color: "rgb(84, 160, 255)",
        name: "JOUST BLUE",
      },
      {
        color: "rgb(95, 39, 205)",
        name: "NASU PURPLE",
      },
      {
        color: "rgb(200, 214, 229)",
        name: "LIGHT BLUE BALLERINA",
      },
      {
        color: "rgb(87, 101, 116)",
        name: "FUEL TOWN",
      },
      {
        color: "rgb(1, 163, 164)",
        name: "AQUA VELVET",
      },
      {
        color: "rgb(46, 134, 222)",
        name: "BLEU DE FRANCE",
      },
      {
        color: "rgb(52, 31, 151)",
        name: "BLUEBELL",
      },
      {
        color: "rgb(131, 149, 167)",
        name: "STORM PETREL",
      },
      {
        color: "rgb(34, 47, 62)",
        name: "IMPERIAL PRIMER",
      },
    ],
    paletteName: "Canadian Palette",
  },
});

export const ColorsRGBAussie = atom<IColorPalette>({
  key: "aussie_rgb",
  default: {
    colors: [
      {
        color: "rgb(246, 229, 141)",
        name: "BEEKEEPER",
      },
      {
        color: "rgb(255, 190, 118)",
        name: "SPICED NECTARINE",
      },
      {
        color: "rgb(255, 121, 121)",
        name: "PINK GLAMOUR",
      },
      {
        color: "rgb(186, 220, 88)",
        name: "JUNE BUD",
      },
      {
        color: "rgb(223, 249, 251)",
        name: "COASTAL BREEZE",
      },
      {
        color: "rgb(249, 202, 36)",
        name: "TURBO",
      },
      {
        color: "rgb(240, 147, 43)",
        name: "QUINCE JELLY",
      },
      {
        color: "rgb(235, 77, 75)",
        name: "CARMINE PINK",
      },
      {
        color: "rgb(106, 176, 76)",
        name: "PURE APPLE",
      },
      {
        color: "rgb(199, 236, 238)",
        name: "HINT OF ICE PACK",
      },
      {
        color: "rgb(126, 214, 223)",
        name: "MIDDLE BLUE",
      },
      {
        color: "rgb(224, 86, 253)",
        name: "HELIOTROPE",
      },
      {
        color: "rgb(104, 109, 224)",
        name: "EXODUS FRUIT",
      },
      {
        color: "rgb(48, 51, 107)",
        name: "DEEP KOAMARU",
      },
      {
        color: "rgb(149, 175, 192)",
        name: "SOARING EAGLE",
      },
      {
        color: "rgb(34, 166, 179)",
        name: "GREENLAND GREEN",
      },
      {
        color: "rgb(190, 46, 221)",
        name: "STEEL PINK",
      },
      {
        color: "rgb(72, 52, 212)",
        name: "BLURPLE",
      },
      {
        color: "rgb(19, 15, 64)",
        name: "DEEP COVE",
      },
      {
        color: "rgb(83, 92, 104)",
        name: "WIZARD GREY",
      },
    ],
    paletteName: "Aussie Palette",
  },
});

export const ColorsRGBDutch = atom<IColorPalette>({
  key: "dutch_rgb",
  default: {
    colors: [
      {
        color: "rgb(255, 195, 18)",
        name: "SUNFLOWER",
      },
      {
        color: "rgb(196, 229, 56)",
        name: "ENERGOS",
      },
      {
        color: "rgb(18, 203, 196)",
        name: "BLUE MARTINA",
      },
      {
        color: "rgb(253, 167, 223)",
        name: "LAVENDER ROSE",
      },
      {
        color: "rgb(237, 76, 103)",
        name: "BARA RED",
      },
      {
        color: "rgb(247, 159, 31)",
        name: "RADIANT YELLOW",
      },
      {
        color: "rgb(163, 203, 56)",
        name: "ANDROID GREEN",
      },
      {
        color: "rgb(18, 137, 167)",
        name: "MEDITERRANEAN SEA",
      },
      {
        color: "rgb(217, 128, 250)",
        name: "LAVENDER TEA",
      },
      {
        color: "rgb(181, 52, 113)",
        name: "VERY BERRY",
      },
      {
        color: "rgb(238, 90, 36)",
        name: "PUFFINS BILL",
      },
      {
        color: "rgb(0, 148, 50)",
        name: "PIXELATED GRASS",
      },
      {
        color: "rgb(6, 82, 221)",
        name: "MERCHANT MARINE BLUE",
      },
      {
        color: "rgb(153, 128, 250)",
        name: "FORGOTTEN PURPLE",
      },
      {
        color: "rgb(131, 52, 113)",
        name: "HOLLYHOCK",
      },
      {
        color: "rgb(234, 32, 39)",
        name: "RED PIGMENT",
      },
      {
        color: "rgb(0, 98, 102)",
        name: "TURKISH AQUA",
      },
      {
        color: "rgb(27, 20, 100)",
        name: "20000 LEAGUES UNDER THE SEA",
      },
      {
        color: "rgb(87, 88, 187)",
        name: "CIRCUMORBITAL RING",
      },
      {
        color: "rgb(111, 30, 81)",
        name: "MAGENTA PURPLE",
      },
    ],
    paletteName: "Dutch Palette",
  },
});

export const ColorsRGBFrench = atom<IColorPalette>({
  key: "french_rgb",
  default: {
    colors: [
      {
        color: "rgb(250, 211, 144)",
        name: "FLAT FRESH",
      },
      {
        color: "rgb(248, 194, 145)",
        name: "MELON MELODY",
      },
      {
        color: "rgb(106, 137, 204)",
        name: "LIVID",
      },
      {
        color: "rgb(130, 204, 221)",
        name: "SPRAY",
      },
      {
        color: "rgb(184, 233, 148)",
        name: "PARADISE GREEN",
      },
      {
        color: "rgb(246, 185, 59)",
        name: "SQUASH BLOSSOM",
      },
      {
        color: "rgb(229, 80, 57)",
        name: "MANADARIN RED",
      },
      {
        color: "rgb(74, 105, 189)",
        name: "AZRAQ BLUE",
      },
      {
        color: "rgb(96, 163, 188)",
        name: "DUPAIN",
      },
      {
        color: "rgb(120, 224, 143)",
        name: "AURORA GREEN",
      },
      {
        color: "rgb(250, 152, 58)",
        name: "ICERAND POPPY",
      },
      {
        color: "rgb(235, 47, 6)",
        name: "TOMATO RED",
      },
      {
        color: "rgb(30, 55, 153)",
        name: "YUE GUANG LAN BLUE",
      },
      {
        color: "rgb(60, 99, 130)",
        name: "GOOD SAMARITAN",
      },
      {
        color: "rgb(56, 173, 169)",
        name: "WATERFALL",
      },
      {
        color: "rgb(229, 142, 38)",
        name: "CARROT ORANGE",
      },
      {
        color: "rgb(183, 21, 64)",
        name: "JALAPENO RED",
      },
      {
        color: "rgb(12, 36, 97)",
        name: "DARK SAPPHIRE",
      },
      {
        color: "rgb(10, 61, 98)",
        name: "FOREST BLUES",
      },
      {
        color: "rgb(7, 153, 146)",
        name: "REEF ENCOUNTER",
      },
    ],
    paletteName: "French Palette",
  },
});

export const ColorsRGBGerman = atom<IColorPalette>({
  key: "german_rgb",
  default: {
    colors: [
      {
        color: "rgb(252, 92, 101)",
        name: "FUSION RED",
      },
      {
        color: "rgb(253, 150, 68)",
        name: "ORANGE HIBISCUS",
      },
      {
        color: "rgb(254, 211, 48)",
        name: "FLIRTATIOUS",
      },
      {
        color: "rgb(38, 222, 129)",
        name: "REPTILE GREEN",
      },
      {
        color: "rgb(43, 203, 186)",
        name: "MAXIUM BLUE GREEN",
      },
      {
        color: "rgb(235, 59, 90)",
        name: "DESIRE",
      },
      {
        color: "rgb(250, 130, 49)",
        name: "BENIUKON BRONZE",
      },
      {
        color: "rgb(247, 183, 49)",
        name: "NYC TAXI",
      },
      {
        color: "rgb(32, 191, 107)",
        name: "ALGAL FUEL",
      },
      {
        color: "rgb(15, 185, 177)",
        name: "TURQUOISE TOPAZ",
      },
      {
        color: "rgb(69, 170, 242)",
        name: "HIGH BLUE",
      },
      {
        color: "rgb(75, 123, 236)",
        name: "C64 NTSC",
      },
      {
        color: "rgb(165, 94, 234)",
        name: "LIGHTER PURPLE",
      },
      {
        color: "rgb(209, 216, 224)",
        name: "TWINKLE BLUE",
      },
      {
        color: "rgb(119, 140, 163)",
        name: "BLUE GRAY",
      },
      {
        color: "rgb(45, 152, 218)",
        name: "BOYZONE",
      },
      {
        color: "rgb(56, 103, 214)",
        name: "ROYAL BLUE",
      },
      {
        color: "rgb(136, 84, 208)",
        name: "GLOOMY PURPLE",
      },
      {
        color: "rgb(165, 177, 194)",
        name: "INNUENDO",
      },
      {
        color: "rgb(75, 101, 132)",
        name: "BLUE HORIZON",
      },
    ],
    paletteName: "German Palette",
  },
});

export const ColorsRGBIndian = atom<IColorPalette>({
  key: "indian_rgb",
  default: {
    colors: [
      {
        color: "rgb(254, 164, 127)",
        name: "ORCHID ORANGE",
      },
      {
        color: "rgb(37, 204, 247)",
        name: "SPIRO DISCO BALl",
      },
      {
        color: "rgb(234, 181, 67)",
        name: "HONEY GROW",
      },
      {
        color: "rgb(85, 230, 193)",
        name: "SWEET GARDEN",
      },
      {
        color: "rgb(202, 211, 200)",
        name: "FALLING STAR",
      },
      {
        color: "rgb(249, 127, 81)",
        name: "RICH GARDENIA",
      },
      {
        color: "rgb(27, 156, 252)",
        name: "CLEAR CHILL",
      },
      {
        color: "rgb(248, 239, 186)",
        name: "SARAWAK WHITE PEPPER",
      },
      {
        color: "rgb(88, 177, 159)",
        name: "KEPPEL",
      },
      {
        color: "rgb(44, 58, 71)",
        name: "SHIP`S OFFICER",
      },
      {
        color: "rgb(179, 55, 113)",
        name: "FIERY FUCHSIA",
      },
      {
        color: "rgb(59, 59, 152)",
        name: "BLUE BELL",
      },
      {
        color: "rgb(253, 114, 114)",
        name: "GEORGIA PEACH ",
      },
      {
        color: "rgb(154, 236, 219)",
        name: "OASIS STREAM",
      },
      {
        color: "rgb(214, 162, 232)",
        name: "BRIGHT UBE",
      },
      {
        color: "rgb(109, 33, 79)",
        name: "MAGENTA PURPLE",
      },
      {
        color: "rgb(24, 44, 97)",
        name: "ENDING NAVY BLUE",
      },
      {
        color: "rgb(252, 66, 123)",
        name: "SASQUATCH SOCKS",
      },
      {
        color: "rgb(189, 197, 129)",
        name: "PINE GLADE",
      },
      {
        color: "rgb(130, 88, 159)",
        name: "HIGHLIGHTER LAVENDER",
      },
    ],
    paletteName: "Indian Palette",
  },
});
