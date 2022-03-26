import { AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Helmet } from "react-helmet";
import { useNavigate } from "react-router-dom";
import { IColorPalette } from "../atom";
import {
  ClickColor,
  ClickColorHidden,
  ColorBox,
  ColorName,
  ColorValue,
  CopyText,
  CursorScope,
  Palette,
  PaletteBack,
  PaletteHeader,
  PaletteText,
  PaletteTitle,
  ShowCopyTextArea,
} from "./StyledComponents";

export interface IPalette {
  ColorData: IColorPalette;
}

const PaletteComponent = ({ ColorData }: IPalette) => {
  const [click, setClick] = useState(false);
  const [clickKey, setkey] = useState("");
  const navigate = useNavigate();
  const onClick = async (color: string) => {
    await navigator.clipboard.writeText(color);
    setkey(color);
    setClick((prev) => !prev);

    setTimeout(() => setClick((prev) => !prev), 700);
  };
  const goBack = () => {
    navigate("/");
  };
  return (
    <>
      <Helmet title={ColorData.paletteName} />
      <PaletteHeader>
        <PaletteBack onClick={goBack}> ← Back</PaletteBack>
        <PaletteTitle>{ColorData.paletteName}</PaletteTitle>
        <PaletteText>by JINNY</PaletteText>
      </PaletteHeader>
      <AnimatePresence>
        <Palette>
          {ColorData.colors.map((colorObj, index) => (
            <ColorBox color={colorObj.color} key={colorObj.name}>
              <CursorScope
                onClick={() => onClick(colorObj.color)}
                key={index}
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1, transition: { duration: 0.1 } }}
                exit={{ opacity: 0 }}
              >
                <CopyText>COPY</CopyText>
              </CursorScope>
              <ColorName>{colorObj.name}</ColorName>
            </ColorBox>
          ))}
        </Palette>
        {click ? (
          <ClickColor
            layout
            layoutId="clickColor"
            key={clickKey + "1"}
            transition={{ duration: 0.5 }}
            color={clickKey}
          >
            <ShowCopyTextArea>PASTE ME!</ShowCopyTextArea>
            <ColorValue>{clickKey}</ColorValue>
          </ClickColor>
        ) : (
          <ClickColorHidden
            key={clickKey + "2"}
            layoutId="clickColor"
            transition={{ duration: 0.5 }}
          ></ClickColorHidden>
        )}
      </AnimatePresence>
    </>
  );
};

export default PaletteComponent;
