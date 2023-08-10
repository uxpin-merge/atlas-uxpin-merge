module.exports = {
  components: {
    categories: [
      {
        name: 'General',
        include: [
          'src/components/Avatar/Avatar.tsx',
          'src/components/AvatarGroup/AvatarGroup.tsx',
          'src/components/Badge/Badge.tsx',
          'src/components/Banner/Banner.tsx',
          'src/components/Blanket/Blanket.tsx',
          'src/components/Breadcrumbs/Breadcrumbs.tsx',
          'src/components/Button/Button.tsx',
          'src/components/Calendar/Calendar.tsx',
          'src/components/Code/Code.tsx',
          'src/components/Comment/Comment.tsx',
          'src/components/DateTimePicker/DateTimePicker.tsx',
          // 'src/components/Drawer/Drawer.tsx', <--ISSUES
          'src/components/DropdownMenu/DropdownMenu.tsx',
          'src/components/DynamicTable/DynamicTable.tsx',
          'src/components/PageLayout/PageLayout.tsx',
          'src/components/Pagination/Pagination.tsx',
          // 'src/components/Navigation/Navigation.tsx', <--ISSUES
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
        name: 'Layout',
        include: [
          'src/components/Inline/Inline.tsx',
          'src/components/Stack/Stack.tsx',
          'src/components/Box/Box.tsx',
        ],
      },
      {
        name: 'Icons',
        include: [
          'src/components/AddCircleIcon/AddCircleIcon.tsx',
          'src/components/WarningIcon/WarningIcon.tsx',
        ],
      },
      {
        name: 'Children (Parts)',
        include: [
          'src/components/BreadcrumbsItem/BreadcrumbsItem.tsx',
          'src/components/DropdownItem/DropdownItem.tsx',
          'src/components/DropdownItemGroup/DropdownItemGroup.tsx'
        ]
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
