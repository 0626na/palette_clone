import {
  ExternalLink,
  HeaderContents,
  HeaderRoot,
  HeaderSubContents,
  PaletteLink,
  ServiceName,
} from "./StyledComponents";

const Header = () => {
  return (
    <>
      <HeaderRoot>
        <HeaderContents>
          <PaletteLink to="/">
            <ServiceName>FLAT UI COLORS 2 Clone</ServiceName>
          </PaletteLink>
          <HeaderSubContents>
            <ExternalLink href="https://flatuicolors.com/subscribe">
              <h3>Subscribe</h3>
            </ExternalLink>
            <ExternalLink href="https://medium.com/collect-ui-design-ui-ux-inspiration-blog/flat-ui-colors-2-13-countries-13-designers-13-color-palettes-more-1d0ecdd66301">
              <h3>About</h3>
            </ExternalLink>
          </HeaderSubContents>
        </HeaderContents>
      </HeaderRoot>
    </>
  );
};

export default Header;
