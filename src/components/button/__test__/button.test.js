import React, { createElement } from 'react';
//import ReactDOM from 'react-dom';
import { render } from '@testing-library/react';
import Button from '../button';
import '@testing-library/jest-dom/extend-expect';
import renderer from "react-test-renderer";

test("Renders without crashing!!!",()=>{
    const div = createElement("div")
    render(<Button></Button>,div)
})

test("Renders button correctly",()=>{
    const {getByTestId} = render(<Button label="Click Testing"/>)
    expect(getByTestId('button')).toHaveTextContent("Click Testing")
})
test("Renders button correctly",()=>{
    const {getByTestId} = render(<Button label="Failing Button"/>)
    expect(getByTestId('button')).toHaveTextContent("Failing Button")
})
test("Matches Snapshot",()=>{
    const jsonTree = renderer.create(<Button label="Snapshot Check"/>).toJSON();
    expect(jsonTree).toMatchSnapshot();
})