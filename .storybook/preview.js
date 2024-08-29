/** @type { import('@storybook/react').Preview } */
const preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;

// const preview = {
//   backgrounds: {
//     default: 'light',
//     values: [
//       { name: 'light', value: '#ffffff' },
//       { name: 'dark', value: '#000000' },
//     ],
//   },
// };

// export default preview;
