import React from 'react';
import { DropdownItem as DropdownItemM } from '@atlaskit/dropdown-menu';
import { DropdownItemProps } from '@atlaskit/dropdown-menu/dist/types/types'

function DropdownItem(props: DropdownItemProps) {
    return <DropdownItemM {...props}/>
}

export default DropdownItem;
