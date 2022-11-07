import {beforeEach, describe, expect, test, it, vi} from 'vitest';
import {fireEvent, render, screen, waitFor} from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import {create} from 'react-test-renderer';
import App from './App.tsx'
import Header from './App.tsx'
import Button from './App.tsx'
import Together from './App.tsx'


describe('My first snapshot test', ()=> {
    test('testing app button', () => {
      let tree = create(<App />)
      expect(tree.toJSON()).toMatchSnapshot();
    })
})

describe('Third snapshot test', () => {
	test('testing Header Comp test', () => {
		let tree = create(<Header />)
		expect(tree.toJSON()).toMatchSnapshot();
	})
})

describe('Second snapshot test', ()=> {
    test('testing BTN component reusable', () => {
      let tree = create(<Button />)
      expect(tree.toJSON()).toMatchSnapshot();
    })
})

describe('Fourth snapshot test', () => {
	test('testing Together component', () => {
		let tree = create(<Together />)
		expect(tree.toJSON()).toMatchSnapshot();
	})
})

describe('Button', () => {
  const description = "it's true";
  beforeEach(() => {
    console.log("beforeEach");
  })

  afterEach(() => {
    console.log("afterEach");
  })

  afterAll(() => {
    console.log("After All Tests");
  })
  test('should render a description object', async () => {
    const { debug, getByTestId } = render(<Button />)
    const itemName = await screen.getAllByText<string>(/my btn/i);
    debug()
  })
});