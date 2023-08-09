import React from 'react';
import DropdownMenu from '../DropdownMenu';
import DropdownItemGroup from '../../DropdownItemGroup/DropdownItemGroup';
import DropdownItem from '../../DropdownItem/DropdownItem';

export default (
    <DropdownMenu uxpId="dropdown-menu" trigger="Page actions">
      <DropdownItemGroup uxpId="dropdown-group">
        <DropdownItem uxpId="dropdown-item-1">Edit</DropdownItem>
        <DropdownItem uxpId="dropdown-item-2">Share</DropdownItem>
        <DropdownItem uxpId="dropdown-item-3">Move</DropdownItem>
        <DropdownItem uxpId="dropdown-item-4">Clone</DropdownItem>
        <DropdownItem uxpId="dropdown-item-5">Delete</DropdownItem>
        <DropdownItem uxpId="dropdown-item-6">Report</DropdownItem>
      </DropdownItemGroup>
    </DropdownMenu>
)