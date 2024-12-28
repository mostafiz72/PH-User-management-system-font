module.exports = {
  content: [
    "./src/**/*.{html,js,jsx,ts,tsx}",  // Paths to your files
  ],
  theme: {
    extend: {
      colors: {
        customColor: '#ff6347',  // Your custom color
        customBackground: '#f0f4f8',
      },
    },
  },
  plugins: [
    require("daisyui"),
  ],
  daisyui: {
    themes: [
      {
        mytheme: {   // Define a custom theme
          "parmary": "#ff6347",  // Use your custom color
          "secondary": "#4f4f4f",
          "accent": "#00bcd4",
          "neutral": "#f0f4f8",  // Custom background color
          "base-100": "#ffffff",
          "base-200": "#f9f9f9",
          "my-color": "#be2edd",
        },
      },
      "light",  // Include default DaisyUI themes
      "dark",
    ],
  },
}
