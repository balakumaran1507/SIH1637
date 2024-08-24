/**
 * Below are the colors that are used in the app. The colors are defined in the light and dark mode.
 * There are many other ways to style your app. For example, [Nativewind](https://www.nativewind.dev/), [Tamagui](https://tamagui.dev/), [unistyles](https://reactnativeunistyles.vercel.app), etc.
 */

const tintColorLight = '#4CAF50';  // Fresh green for light mode
const tintColorDark = '#66BB6A';   // Softer green for dark mode

export const Colors = {
  light: {
    text: '#2C6B5C',               // Dark green for text
    background: '#E8F5E9',         // Very light green background for a fresh look
    tint: tintColorLight,          // Green tint to reflect the produce theme
    icon: '#388E3C',               // Medium green for icons
    tabIconDefault: '#388E3C',     // Default icon color
    tabIconSelected: tintColorLight, // Selected tab icon color
  },
  dark: {
    text: '#C8E6C9',               // Light green for readability in dark mode
    background: '#1B5E20',         // Dark green background for dark mode
    tint: tintColorDark,           // Softer green for a natural feel
    icon: '#A5D6A7',               // Light green for icons in dark mode
    tabIconDefault: '#A5D6A7',     // Default icon color
    tabIconSelected: tintColorDark, // Selected tab icon color
  },
};
