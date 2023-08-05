import SelectM, { SelectProps } from '@atlaskit/select';


export interface SelectPropsMerge extends SelectProps<'option', true>{
  isMulti?:true
}


/**
 * @uxpindocurl https://atlassian.design/components/Select/examples
 */
const Select = (props: SelectPropsMerge) => {
  return (
      <SelectM {...props} key={Math.random()}/>
  );
};

export default Select