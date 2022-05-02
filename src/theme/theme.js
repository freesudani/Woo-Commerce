export const Colors = {
  Brand: {
    PrimaryMain: "#7854F7",
    PrimaryDark: "#543AAC",
    SecondaryMain: "#70C217",
    SecondaryDark: "#4E8710",
    BG: "#E5EFFF",
    BG2: "#5737EF",
    Red: "#EF4358",
    Green: "#70C217",
    Brown: "#FFBA49",
  },
  Text: {
    TextPrimary: "#272D4E",
    TextSecondary: "#94A2B3",
    TextWhite: "#FFFFFF",
    TextBlue: "#299EF3",
  },
};

export const TextStyles = {
  Heading: {
    H1: {
      fontFamily: "Circular Std",
      FontSize: "8.5rem",
      LineHeight: "9.5rem",
      LetterSpacing: "0",
      FontWeight: 700,
    },
    H2: {
      fontFamily: "Circular Std",
      FontSize: "5.5rem",
      LineHeight: "7rem",
      LetterSpacing: "0",
      FontWeight: 700,
    },
  },

  Subtitle: {
    Subtitle1: {
      fontFamily: "Circular Std",
      FontSize: "3.6rem",
      LineHeight: "7rem",
      LetterSpacing: "0",
      FontWeight: 700,
    },
    Subtitle2: {
      fontFamily: "Circular Std",
      FontSize: "3.6rem",
      LineHeight: "4.6rem",
      LetterSpacing: "0",
      FontWeight: 700,
    },
    Subtitle3: {
      fontFamily: "Roboto",
      FontSize: "3.6rem",
      LineHeight: "5.2rem",
      LetterSpacing: "0",
      FontWeight: 400,
    },
    Subtitle4: {
      fontFamily: "Roboto",
      FontSize: "1.4rem",
      LineHeight: "5.2rem",
      LetterSpacing: "0",
      FontWeight: 700,
    },
  },

  Body: {
    Body1: {
      fontFamily: "Roboto",
      FontSize: "1.8rem",
      LineHeight: "2.5rem",
      LetterSpacing: "0",
      FontWeight: 400,
    },
    Body2: {
      fontFamily: "Roboto",
      FontSize: "1.8px",
      LineHeight: "3rem",
      LetterSpacing: "0",
      FontWeight: 400,
    },
    Body3: {
      fontFamily: "Circular Std",
      FontSize: "2.67rem",
      LineHeight: "3.95rem",
      LetterSpacing: "0",
      FontWeight: 400,
    },
    Body4: {
      fontFamily: "Roboto",
      FontSize: "2rem",
      LineHeight: "5.2rem",
      LetterSpacing: "0",
      FontWeight: 700,
    },
    Body5: {
      fontFamily: "Roboto",
      FontSize: "2rem",
      LineHeight: "5.2rem",
      LetterSpacing: "0",
      FontWeight: 400,
    },
    Body6: {
      fontFamily: "Roboto",
      FontSize: "1.2rem",
      LineHeight: "2.2rem",
      LetterSpacing: "0",
      FontWeight: 400,
    },
  },

  Lead: {
    Lead1: {
      fontFamily: "Roboto",
      FontSize: "1.8rem",
      LineHeight: "2.109rem",
      LetterSpacing: "0",
      FontWeight: 500,
    },
    Lead2: {
      fontFamily: "Roboto",
      FontSize: "2.2rem",
      LineHeight: "2.5rem",
      LetterSpacing: "0",
      FontWeight: 700,
    },
    Lead3: {
      fontFamily: "Roboto",
      FontSize: "1.8rem",
      LineHeight: "2.109rem",
      LetterSpacing: "0",
      FontWeight: 700,
    },
  },

  Bundler: function (attr) {
    return `
      font-family: ${attr.fontFamily};
      font-size: ${attr.FontSize};
      font-weight:  ${attr.FontWeight};
      line-height: ${attr.LineHeight};
      letter-spacing: ${attr.LetterSpacing};
      `;
  },
};
