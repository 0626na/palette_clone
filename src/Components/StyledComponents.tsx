import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import styled from "styled-components";

export const Palette = styled.div`
  width: 100%;
  height: 100vh;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: repeat(4, 1fr);
`;

export const PaletteHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 100%;
  padding: 13px 0;
`;

export const PaletteBack = styled.span`
  font-size: 15px;
  font-weight: 600;
  padding-left: 20px;
  cursor: pointer;
`;

export const PaletteTitle = styled.span`
  font-size: 30px;
  font-weight: 600;
  //padding-right: 80px;
`;

export const PaletteText = styled.span`
  font-size: 12px;
  align-self: flex-end;
  padding-right: 20px;
`;

export const ColorBox = styled(motion.div)<{ color: String }>`
  height: 100%;
  width: 100%;
  background-color: ${(props) => props.color};
  position: relative;
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
`;
export const CursorScope = styled(motion.div)`
  color: white;
  font-size: 20px;
  position: absolute;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;
export const CopyText = styled.div`
  padding: 10px 30px;
  border: 1px solid white;
  border-radius: 5px;
`;
export const ColorName = styled.span`
  font-size: 15px;
  font-weight: 500;
  padding-right: 5px;
  padding-bottom: 5px;
  color: white;
`;

export const ClickColor = styled(motion.div)<{ color: string }>`
  position: fixed;
  top: 0;
  left: 0;
  opacity: 1;
  width: 100%;
  height: 100vh;
  background-color: ${(props) => props.color};
  z-index: 99;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const ClickColorHidden = styled(motion.div)`
  position: fixed;
  opacity: 0;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;

  z-index: -99;
`;

export const ShowCopyTextArea = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 25%;
  background-color: rgba(255, 255, 255, 0.4);
  color: whitesmoke;
  font-size: 100px;
  font-weight: 800;
  text-shadow: 1px 1px 1px black;
`;

export const ColorValue = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 5%;
  font-size: 40px;
  color: whitesmoke;
  text-shadow: 1px 1px 1px black;
`;

export const HomeRoot = styled.div`
  width: 100%;
  height: 200vh;
  background-image: url("https://flatuicolors.com/static/img/stars-opacity.0979c1.svg");
  background-color: #3c40c6;
  color: white;
`;

export const HomeContents = styled.div`
  width: 1024px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  row-gap: 30px;
`;

export const PaletteBox = styled(motion.div)`
  width: 290px;
  height: 200px;
  background-color: white;
  border-radius: 10px;
  padding: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const PalettePreview = styled.div`
  width: 100%;
  height: 170px;
  border-radius: 5px;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: repeat(4, 1fr);
`;

export const HeaderRoot = styled.div`
  position: relative;
  width: 100%;
  height: 65px;
  display: flex;
  color: white;
  background-image: url("https://flatuicolors.com/static/img/stars-opacity.0979c1.svg");
  background-color: #3c40c6;
  padding-bottom: 35px;
`;

export const HeaderContents = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 1024px;
  margin: 0 auto;
  padding-top: 35px;
`;

export const HeaderSubContents = styled.div`
  font-size: 18px;
  font-weight: 600;
  width: 160px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-right: 30px;
`;

export const ServiceName = styled.span`
  font-size: 25px;
  font-weight: 800;
  background-color: transparent;
`;

export const PaletteBoxContents = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin-top: 10px;
`;
export const PaletteName = styled.span`
  color: black;
  font-size: 17px;
  font-weight: 600;
  margin-left: 5px;
`;
export const PaletteIcon = styled.span`
  font-size: 20px;
  margin-right: 5px;
`;

export const PaletteLink = styled(Link)`
  text-decoration: none;
  color: white;
`;

export const ExternalLink = styled.a`
  text-decoration: none;
  color: white;
`;
