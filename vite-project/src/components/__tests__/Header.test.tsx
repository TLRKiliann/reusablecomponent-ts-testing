import {beforeEach, describe, expect, test, it, vi} from 'vitest';
//import {fireEvent, render, screen, waitFor} from '@testing-library/react';
//import { act } from 'react-dom/test-utils';
import {create} from 'react-test-renderer';
import Header from '../Header.tsx'


describe('Sixth snapshot test', () => {
	test('testing Header component', () => {
		let tree = create(<Header />)
		expect(tree.toJSON()).toMatchSnapshot();
	})
})