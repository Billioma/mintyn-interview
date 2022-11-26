import { extendTheme } from "@chakra-ui/react";

const config = {
  initialColorMode: "dark",
  useSystemColorMode: false,
};
export const customTheme = extendTheme({
  fonts: {
    heading: `'Inter', sans-serif`,
    body: `'Roboto', sans-serif`,
  },
  config,
  components: {
    Form: {
      variants: {
        floating: {
          container: {
            _focusWithin: {
              label: {
                transform: "scale(0.85) translateY(-24px)",
                color: "#000000",
                borderRadius: "5px",
              },
            },
            "input:not(:placeholder-shown) + label, .chakra-select__wrapper + label":
              {
                transform: "scale(0.85) translateY(-24px)",
                color: "#000000",
                borderRadius: "5px",
              },
            label: {
              color: "#C4C4C4",
              top: 0,
              left: 0,
              zIndex: 2,
              position: "absolute",
              backgroundColor: "white",
              pointerEvents: "none",
              mx: 3,
              px: 1,
              my: 2,
              transformOrigin: "left top",
            },
          },
        },
      },
    },
    Button: {
      variants: {
        primary: {
          border: "none",
          bgColor: "#27AE60",
          size: "sm",
          color: "#fff",
          fontWeight: "100",
          boxShadow: "lg",
          _hover: {
            bgColor: "#27AE60",
            boxShadow: "lg",
            color: "#fff",
            border: "none",
          },
          _focus: {
            bgColor: "#27AE60",
            boxShadow: "lg",
            color: "#fff",
          },
          _active: {
            bgColor: "#27AE60",
            boxShadow: "lg",
            color: "#fff",
            filter: "brightness(50%)",
          },
        },
        secondary: {
          bgColor: "#fff",
          size: "md",
          border: "none",
          boxShadow: "lg",
          color: "#000",
          fontWeight: "700",
          _hover: {
            bgColor: "gray.300",
            boxShadow: "lg",
            color: "#000",
            border: "none",
          },
          _focus: {
            bgColor: "gray.300",
            boxShadow: "lg",
            color: "#000",
          },
          _active: {
            bgColor: "gray.300",
            boxShadow: "lg",
            color: "#000",
            filter: "brightness(90%)",
          },
        },
        danger: {
          bgColor: "red.500",
          color: "#f3f3f3",
        },
      },
      defaultProps: {
        variant: "primary",
      },
    },
  },
  colors: {
    darkMode: {
      mainBg: "#0D1117",
      color: "#FFF",
      headerColor: "#4F5776",
      activeColor: "#FFFFFF",
      activeBg: "#21262D",
      inputBg: "#30363D",
    },
    lightMode: {
      mainBg: "#FFFFFF",
      color: "#000",
      headerColor: "#4F5776",
      activeColor: "#FFFFFF",
      activeBg: "#21262D",
      inputBg: "#F2F2F2",
    },
  },
});
