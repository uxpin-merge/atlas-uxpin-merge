module.exports = {
  components: {
    categories: [
      {
        name: 'General',
        include: [
          // 'src/components/Button/Button.tsx',
          // 'src/components/Calendar/Calendar.tsx',
          // 'src/components/DynamicTable/DynamicTable.tsx',
          // 'src/components/Select/Select.tsx',
          // 'src/components/Checkbox/Checkbox.tsx',
          // 'src/components/Toggle/Toggle.tsx',
          // 'src/components/TextArea/TextArea.tsx',
          // 'src/components/Radio/Radio.tsx',
          // 'src/components/PageLayout/PageLayout.tsx',
          // 'src/components/Navigation/Navigation.tsx',
          // 'src/components/PrimaryButton/PrimaryButton.tsx',
          // 'src/components/ApiiComponent/ApiComponent.tsx',
          'src/components/JiraIssuesComponent/JiraIssuesComponent.tsx'
        ],
      },
      {
        name: 'Icons',
        include: [
          // 'src/components/AddCircleIcon/AddCircleIcon.tsx'
        ],
      },
    ],
    wrapper: 'src/components/UXPinWrapper/UXPinWrapper.tsx',
    webpackConfig: 'webpack.config.js',
  },
  name: 'Atlassian Design System'
};
