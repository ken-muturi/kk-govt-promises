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

    "input[type=file]::-webkit-file-upload-button": {
      visibility: "hidden",
    },

    "input[type=file]::before": {
      content: "Select some files",
      display: "inline-block",
      background: "linear-gradient(top, #f9f9f9, #e3e3e3)",
      border: "1px solid #999",
      borderRadius: "3px",
      padding: "5px 8px",
      outline: "none",
      "white-space": "nowrap",
      "-webkit-user-select": "none",
      cursor: "pointer",
      textShadow: "1px 1px #fff",
      fontWeight: 700,
    },
    "input[type=file]:hover::before": {
      borderColor: "black",
    },
    "input[type=file]:active::before": {
      background: "-webkit-linear-gradient(top, #e3e3e3, #f9f9f9)",
    },
  }),
};
