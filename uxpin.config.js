module.exports = {
  components: {
    categories: [
      {
        name: 'General',
        include: [
          'src/components/Button/Button.tsx',
          'src/components/Calendar/Calendar.tsx',
          'src/components/DynamicTable/DynamicTable.tsx',
          'src/components/PageLayout/PageLayout.tsx',
          'src/components/Navigation/Navigation.tsx',
          'src/components/PrimaryButton/PrimaryButton.tsx',
        ],
      },
      {
        name: 'Inputs',
        include: [
          'src/components/Select/Select.tsx',
          'src/components/Checkbox/Checkbox.tsx',
          'src/components/Toggle/Toggle.tsx',
          'src/components/TextArea/TextArea.tsx',
          'src/components/Radio/Radio.tsx',
          'src/components/TextField/TextField.tsx',
        ],
      },
      {
        name: 'Form',
        include: [
          'src/components/Form/Form.tsx',
          'src/components/Form/FormHeader/FormHeader.tsx',
          'src/components/Form/HelperMessage/HelperMessage.tsx',
          'src/components/Form/Field/Field.tsx'
        ],
      },
      {
        name: 'Icons',
        include: [
          'src/components/AddCircleIcon/AddCircleIcon.tsx',
          'src/components/Avatar/Avatar.tsx',
          'src/components/AvatarGroup/AvatarGroup.tsx'
        ],
      },
      {
        name: 'API Connection Test',
        include: [
          'src/components/JiraIssuesComponent/JiraIssuesComponent.tsx'
        ],
      },
    ],
    wrapper: 'src/components/UXPinWrapper/UXPinWrapper.tsx',
    webpackConfig: 'webpack.config.js',
  },
  name: 'Atlassian Design System'
};
