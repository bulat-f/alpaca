import styled from "styled-components";
import { Button as SemanticButton } from "semantic-ui-react";
import { ITheme } from "constants/theme";

enum Emphasis {
  primary = "primary",
  secondary = "secondary",
  warning = "warning",
}

const COLORS = {
  [Emphasis.primary]: "primary",
  [Emphasis.secondary]: "secondary",
  [Emphasis.warning]: "error",
};

const getColor = (emphasis: Emphasis = Emphasis.primary) => COLORS[emphasis];

interface IProps extends SemanticButton {
  emphasis?: Emphasis;
  theme: ITheme;
}

export const Button = styled(SemanticButton).attrs(({ emphasis }: IProps) =>
  emphasis !== Emphasis.secondary
    ? {
        primary: true,
      }
    : {}
)`
  background: ${({ theme: { colors }, emphasis }: IProps) =>
    colors[getColor(emphasis)]} !important;
`;
