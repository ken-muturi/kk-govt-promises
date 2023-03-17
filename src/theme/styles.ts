export default {
  global: () => ({
    "html, body": {},
    "*::placeholder": {
      opacity: 1,
      color: "subtle",
    },
    "*": {
      scrollbarWidth: "thin",
      scrollbarColor: "gray.50",
    },

    /* Works on Chrome, Edge, and Safari */
    "::-webkit-scrollbar": {
      width: "8px",
      height: "8px",
    },

    "::-webkit-scrollbar-track": {
      background: "gray.50",
    },

    "::-webkit-scrollbar-thumb": {
      backgroundColor: "gray.400",
      borderRadius: "lg",
      borderColor: "gray.400",
    },
  }),
};
