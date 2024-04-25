// This file is a configuration module for TailwindCSS, specifying content sources, theme customizations, and plugins.

/** @type {import('tailwindcss').Config} */ // Specifies the type of the export for better IntelliSense support.
module.exports = { // Exports the configuration object for TailwindCSS.
    content: ["./src/**/*.{html,js}"], // Defines the file patterns Tailwind should scan for class names.
    theme: { // Contains the theme configuration for Tailwind.
      extend: {}, // Allows extending the default theme configuration.
    },
    plugins: [], // Specifies an array of plugins to include.
  }