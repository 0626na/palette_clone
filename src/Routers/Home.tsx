import { useRecoilValue } from "recoil";
import { Helmet } from "react-helmet";

import {
  ColorsRGBAmerican,
  ColorsRGBAussie,
  ColorsRGBBritish,
  ColorsRGBCanadian,
  ColorsRGBDutch,
  ColorsRGBFlat,
  ColorsRGBFrench,
  ColorsRGBGerman,
  ColorsRGBIndian,
} from "../atom";
import Header from "../Components/Header";
import PreviewComponent from "../Components/PalettePreview";
import {
  HomeContents,
  HomeRoot,
  PaletteBox,
  PaletteBoxContents,
  PaletteIcon,
  PaletteLink,
  PaletteName,
} from "../Components/StyledComponents";

export const Home = () => {
  const flat = useRecoilValue(ColorsRGBFlat);
  const america = useRecoilValue(ColorsRGBAmerican);
  const british = useRecoilValue(ColorsRGBBritish);
  const canada = useRecoilValue(ColorsRGBCanadian);
  const aussie = useRecoilValue(ColorsRGBAussie);
  const dutch = useRecoilValue(ColorsRGBDutch);
  const france = useRecoilValue(ColorsRGBFrench);
  const german = useRecoilValue(ColorsRGBGerman);
  const indian = useRecoilValue(ColorsRGBIndian);

  const paletteVariant = {
    hover: {
      scale: 1.1,
      y: -10,
    },
  };
  return (
    <>
      <Helmet title="🎨 Flat UI Palette Clone" />
      <Header />
      <HomeRoot>
        <HomeContents>
          {/* 기본 팔레트 */}
          <PaletteLink to="/palette/flat">
            <PaletteBox variants={paletteVariant} whileHover="hover">
              <PreviewComponent ColorData={flat} />
              <PaletteBoxContents>
                <PaletteName>Flat UI Palette V1</PaletteName>
                <PaletteIcon>🎨</PaletteIcon>
              </PaletteBoxContents>
            </PaletteBox>
          </PaletteLink>
          {/* 미국 팔레트 */}
          <PaletteLink to="/palette/america">
            <PaletteBox variants={paletteVariant} whileHover="hover">
              <PreviewComponent ColorData={america} />
              <PaletteBoxContents>
                <PaletteName>American Palette</PaletteName>
                <PaletteIcon>🇺🇸</PaletteIcon>
              </PaletteBoxContents>
            </PaletteBox>
          </PaletteLink>
          {/* 영국 팔레트 */}
          <PaletteLink to="/palette/british">
            <PaletteBox variants={paletteVariant} whileHover="hover">
              <PreviewComponent ColorData={british} />
              <PaletteBoxContents>
                <PaletteName>British Palette</PaletteName>
                <PaletteIcon>🇬🇧</PaletteIcon>
              </PaletteBoxContents>
            </PaletteBox>
          </PaletteLink>
          {/* 캐나다 팔레트 */}
          <PaletteLink to="/palette/canada">
            <PaletteBox variants={paletteVariant} whileHover="hover">
              <PreviewComponent ColorData={canada} />
              <PaletteBoxContents>
                <PaletteName>Cananda Palette</PaletteName>
                <PaletteIcon>🇨🇦</PaletteIcon>
              </PaletteBoxContents>
            </PaletteBox>
          </PaletteLink>
          {/*오스트레일리아 팔레트*/}
          <PaletteLink to="/palette/aussie">
            <PaletteBox variants={paletteVariant} whileHover="hover">
              <PreviewComponent ColorData={aussie} />
              <PaletteBoxContents>
                <PaletteName>Aussie Palette</PaletteName>
                <PaletteIcon>🇦🇺</PaletteIcon>
              </PaletteBoxContents>
            </PaletteBox>
          </PaletteLink>
          {/*네덜란드 팔레트 */}
          <PaletteLink to="/palette/dutch">
            <PaletteBox variants={paletteVariant} whileHover="hover">
              <PreviewComponent ColorData={dutch} />
              <PaletteBoxContents>
                <PaletteName>Dutch Palette</PaletteName>
                <PaletteIcon>🇳🇱</PaletteIcon>
              </PaletteBoxContents>
            </PaletteBox>
          </PaletteLink>
          {/*프랑스 팔레트 */}
          <PaletteLink to="/palette/france">
            <PaletteBox variants={paletteVariant} whileHover="hover">
              <PreviewComponent ColorData={france} />
              <PaletteBoxContents>
                <PaletteName>French Palette</PaletteName>
                <PaletteIcon>🇫🇷</PaletteIcon>
              </PaletteBoxContents>
            </PaletteBox>
          </PaletteLink>
          {/*독일 팔레트*/}
          <PaletteLink to="/palette/german">
            <PaletteBox variants={paletteVariant} whileHover="hover">
              <PreviewComponent ColorData={german} />
              <PaletteBoxContents>
                <PaletteName>German Palette</PaletteName>
                <PaletteIcon>🇩🇪</PaletteIcon>
              </PaletteBoxContents>
            </PaletteBox>
          </PaletteLink>
          {/*인도 팔레트 */}
          <PaletteLink to="/palette/indian">
            <PaletteBox variants={paletteVariant} whileHover="hover">
              <PreviewComponent ColorData={indian} />
              <PaletteBoxContents>
                <PaletteName>Indian Palette</PaletteName>
                <PaletteIcon>🇮🇳</PaletteIcon>
              </PaletteBoxContents>
            </PaletteBox>
          </PaletteLink>
        </HomeContents>
      </HomeRoot>
    </>
  );
};
