import { IPalette } from "./PaletteComponent";
import { ColorBox, PalettePreview } from "./StyledComponents";

const PreviewComponent = ({ ColorData }: IPalette) => {
  return (
    <PalettePreview>
      {ColorData.colors.map((color) => (
        <ColorBox color={color.color} />
      ))}
    </PalettePreview>
  );
};

export default PreviewComponent;
