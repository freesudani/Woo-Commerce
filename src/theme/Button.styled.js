import styled from "styled-components";
import { Colors, TextStyles } from "./Theme";

const Button = styled.button`
  transition-property: background-color, color, border, border-bottom;
  transition-duration: 0.3s;

  cursor: pointer;
  ${(p) => {
    switch (p.var) {
      case "containedPrimary":
        return `
                background-color: ${Colors.Brand.PrimaryMain};
                color: ${Colors.Text.TextWhite};
                border: 1px solid ${Colors.Brand.PrimaryMain};
                &:hover {
                background-color: ${Colors.Brand.PrimaryDark};
                border: 1px solid ${Colors.Brand.PrimaryDark};
                }
              `;
      case "containedSecondary":
        return `
                background-color: ${Colors.Brand.SecondaryMain};
                color: ${Colors.Text.TextWhite};
                border: 1px solid ${Colors.Brand.SecondaryMain};
                &:hover {
                background-color: ${Colors.Brand.SecondaryDark};
                border: 1px solid ${Colors.Brand.SecondaryDark};
                }
              `;
      case "outlined":
        return `
                background-color: transparent;
                color: ${Colors.Text.TextWhite};
                border: 1px solid ${Colors.Text.TextWhite};
                &:hover {
                background-color: ${Colors.Brand.PrimaryMain};
                border: 1px solid ${Colors.Brand.PrimaryMain};
                }
              `;
      case "special":
        return `
                background-color: transparent;
                color: ${Colors.Text.TextBlue};
                border : transparent;
                &:hover {
                color: ${Colors.Brand.PrimaryMain};
                }
              `;
      default:
        return `
                background-color: transparent;
                color: ${Colors.Text.TextPrimary};
                border : transparent;
                &:hover {
                color: ${Colors.Text.TextSecondary};
                }
              `;
    }
  }}
  ${(p) => {
    switch (p.size) {
      case "sm":
        return ` 
        width: 12rem;
        height: 4.7rem;
        border-radius: 5px;
        ${TextStyles.Bundler(TextStyles.Lead.Lead1)};
         `;
      case "notsm":
        return ` 
        width: 20.7rem;
        height: 7.2rem;
        border-radius: 60px;
        ${TextStyles.Bundler(TextStyles.Lead.Lead3)};
         `;
      case "md":
        return ` 
        width: 25.6rem;
        height: 6.4rem;
        border-radius: 60px;
        ${TextStyles.Bundler(TextStyles.Lead.Lead1)};
         `;
      case "lg":
        return ` 
        width: 26.7rem;
        height: 7.2rem;
        border-radius: 60px;
        ${TextStyles.Bundler(TextStyles.Lead.Lead1)};
         `;
      case "special":
        return ` 
        height: 44px;
        padding: 0 ;
        ${TextStyles.Bundler(TextStyles.Lead.Lead2)};
         `;
      default:
        return ` 
        height: 44px;
        padding: 0 ;
        ${TextStyles.Bundler(TextStyles.Lead.Lead1)};
         `;
    }
  }}
`;

export default Button;
