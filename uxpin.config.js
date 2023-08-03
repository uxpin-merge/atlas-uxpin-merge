module.exports = {
  components: {
    categories: [
      {
        name: 'General',
        include: [
          'src/components/Button/Button.tsx',
          'src/components/Calendar/Calendar.tsx',
          'src/components/DynamicTable/DynamicTable.tsx',
          'src/components/Select/Select.tsx',
          'src/components/Checkbox/Checkbox.tsx',
          'src/components/Toggle/Toggle.tsx',
          'src/components/TextArea/TextArea.tsx'
        ],
      },
    ],
    wrapper: 'src/components/UXPinWrapper/UXPinWrapper.tsx',
    webpackConfig: 'webpack.config.js',
  },
  name: 'Atlassian Design System'
};
