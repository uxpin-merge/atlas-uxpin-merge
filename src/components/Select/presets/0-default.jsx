import * as React from "react";
import Select from "../Select";

const options = [
    { label: 'Adelaide', value: 'adelaide' },
    { label: 'Brisbane', value: 'brisbane' },
    { label: 'Canberra', value: 'canberra' },
    { label: 'Darwin', value: 'darwin' },
    { label: 'Hobart', value: 'hobart' },
    { label: 'Melbourne', value: 'melbourne' },
    { label: 'Perth', value: 'perth' },
    { label: 'Sydney', value: 'sydney' },
]

export default (
  <Select
    uxpId="Select"
    inputId="single-select-example"
    className="single-select"
    classNamePrefix="react-select"
    options={options}
    placeholder="Choose a city"
    />
);
