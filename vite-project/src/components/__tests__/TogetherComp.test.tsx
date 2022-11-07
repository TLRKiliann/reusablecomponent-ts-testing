import {beforeEach, describe, expect, test, it, vi} from 'vitest';
//import {fireEvent, render, screen, waitFor} from '@testing-library/react';
//import { act } from 'react-dom/test-utils';
import {create} from 'react-test-renderer';
import TogetherComp from '../TogetherComp.tsx'
import Header from '../TogetherComp.tsx'
import Button from '../TogetherComp.tsx'

describe('Seventh snapshot test', () => {
	test('testing TogetherComp component', () => {
		let tree = create(<TogetherComp />)
		expect(tree.toJSON()).toMatchSnapshot();
	})
})

describe('Eight snapshot test', () => {
	test('testing Header component', () => {
		let tree = create(<Header />)
		expect(tree.toJSON()).toMatchSnapshot();
	})
})

describe('Nine snapshot test', () => {
	test('testing Button component', () => {
		let tree = create(<Button />)
		expect(tree.toJSON()).toMatchSnapshot();
	})
})