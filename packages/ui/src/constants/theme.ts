export interface ITheme {
  colors: any;
  defaultFontFamily: string;
  dimensions: any;
}

export const theme = {
  colors: {
    background: "#fafafb",
    primary: "#053399",
    secondary: "transparent",
    error: "#ef5350",
    text: "#4a4a4a",
    lightText: "#929292",
    disabledText: "#b7b7b7",
    input: "#f8f8fe",
    border: "#edf1f7",
    disabledBorder: "#e1e1e1",
  },
  defaultFontFamily: "'Open Sans', sans-serif",
  dimensions: {
    headerHeight: "72px",
    menuWidth: "14rem",
  },
};
