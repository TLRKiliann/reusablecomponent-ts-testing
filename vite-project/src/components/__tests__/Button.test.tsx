import {beforeEach, describe, expect, test, it, vi} from 'vitest';
import {fireEvent, render, screen, waitFor} from '@testing-library/react';
//import { act } from 'react-dom/test-utils';
import {create} from 'react-test-renderer';
import Button from '../Button.tsx'
import handleClick from '../Button.tsx'


describe('Fifth snapshot test', () => {
  test('testing BTN component', () => {
    let tree = create(<Button />)
    expect(tree.toJSON()).toMatchSnapshot();
  })
})

/*
vi.fn(function () {
  return this;
});*/

/*describe("input testing", () => {

  beforeEach(() => {
    console.log("beforeEach");
  })

  afterEach(() => {
    console.log("afterEach");
  })

  afterAll(() => {
    console.log("After All Tests");
  })

  test('should return value', async () => {
    render(<button data-testid='btnid' onClick={handleClick}>Hello BTN !</button>);
    const viewTest = screen.getByTestId('btnid');
    expect(viewTest).toHaveBeenCalled();
  })
  test('should return value', async () => {
    render(<button data-testid='btnid' onClick={handleClick}>Hello BTN !</button>);
    const viewTest = screen.getByTestId('btnid');
    expect(viewTest).toHaveBeenCalled();
  })
});*/

/*const MyButton = ({onClick, children}) => (
  <button onClick={onClick} data-testid="btnid">{children}</button>
)
test('calls onClick prop when clicked delete', () => {
  const todo = "it's false"
  const handleClick = vi.fn(todo => todo)
  render(<MyButton onClick={handleClick} data-testid="btnid">hello btn !</MyButton>)
  fireEvent.click(screen.findAllByText<HTMLButtonElement>(/my btn/i))
  expect(handleClick).toHaveBeenCalledTimes(1);
});*/

//Results test has changed
vi.useFakeTimers(7000)
it("captures click from Button", async() => {
  function handleClick(evt) {
    expect(evt.target.value).toEqual("btnclick");
  }
  const { getByTestId } = render(
    <Button onClick={handleClick} data-testid="btnid" />
  );
  const node = getByTestId("btnid");
  fireEvent.click(node, { target: { value: "btnclick" } });
});

//Results test has changed
vi.useFakeTimers(7000)
it("captures value from Button", async() => {
  function handleClick(evt) {
    expect(evt.target.value).toEqual(false);
  }
  const { getByTestId } = render(
    <Button onChange={handleClick} data-testid="btnclick" />
  );
  const node = getByTestId("inputid");
  fireEvent.change(node, { target: { value: false } });
});

/*test('test handleClick', () => {
  const todoinit = { id: 1, myNum: 'ok', isDone: false };
  const valueMyNum = todoinit
  const mockCallback = jest.fn(valueMyNum => valueMyNum.id);
  const {queryAllByTestId} = render(
    <ThirdComp data-testid='divtest'>
          {todoinit}
    </ThirdComp>
  );
  expect(queryAllByTestId("divtest")).toHaveLength(1);
  [{ id: 1, myNum: 'ok', isDone: false }].forEach((myNum) => {
    expect(queryAllByTestId("divtest").textContent).toEqual(undefined)
  });
});*/

/*
test('test handleClick var', () => {
  const truc = render(<Button />);
  expect(truc).toBeInTheDocument();
})*/

//handleClick test
test('state render (PBM: console.log(undefined) )', () => {
  const secVar = {isClicked: true, description: "it's false"};
  const myMock1 = vi.fn(secVar => secVar);
  const add = new myMock1()
  console.log(add)
  console.log(myMock1.mock.instances);

  const myMock2 = vi.fn();
  const setState = [add]
  console.log(setState)
  const bound = myMock2.bind(setState);
  console.log(bound)
  bound();
  console.log(myMock2.mock.contexts);
});

test('console.log(this.handleClick)', () => {
  console.log(this.handleClick);
})

it('testing with mockImplementationOnce', () => {
  const mockFn = vi
    .fn<(cb: (b: boolean) => void) => void>()
    .mockImplementationOnce(cb => cb(true))
    .mockImplementationOnce(cb => cb(false));

  mockFn((err, val) => console.log(val)); // true
  mockFn((err, val) => console.log(val)); // false
})

it('testing with mockImplementationOnce', () => {
  const mockFn = vi
    .fn<(cb: (b: boolean) => void) => void>()
    .mockImplementationOnce(cb => cb(false))
    .mockImplementationOnce(cb => cb(true));

  mockFn((err, val) => console.log(val)); // true
  mockFn((err, val) => console.log(val)); // false
})

it('testing with mockImplementationOnce', () => {
  const mockFn = vi
    .fn<(cb: (a: string) => void) => void>()
    .mockImplementationOnce(cb => cb(false))
    .mockImplementationOnce(cb => cb(true));

  mockFn((err, val) => console.log(val)); // true
  mockFn((err, val) => console.log(val)); // false
})

it('testing with mockImplementationOnce', () => {
  const mockFn = vi
    .fn<(cb: (a: string) => void) => void>()
    .mockImplementationOnce(cb => cb(true))
    .mockImplementationOnce(cb => cb(false));

  mockFn((err, val) => console.log(val)); // true
  mockFn((err, val) => console.log(val)); // false
})

it('test mockFn', () => {
  const mockFn = vi.fn();

  const a = new mockFn();
  const b = new mockFn();

  mockFn.mock.instances[0] === a; // true
  mockFn.mock.instances[1] === b; // true
})

/*
test('testing with mock.fn()', () => {
  const beverage = {isClicked: false}
  const mockFn = vi.fn(beverage => beverage.isClicked).mockName(this.handleClick);
  expect(mockFn).toHaveBeenCalledTimes(0);
})*/

test('change value of handleClick', () => {
  render(<Button />);
  const btnTest = screen.getByTestId('btnid');
  const inputTest = screen.getByPlaceholderText(/inputplace/i);
  const inputVal = "it's false";
  fireEvent.change(inputTest, {target: {value: inputVal}})
  expect(inputTest.value).toBe(inputVal);
})

test('change value of handleClick', () => {
  render(<Button />);
  const btnTest = screen.getByTestId('btnid');
  const inputTest = screen.getByPlaceholderText(/inputplace/i);
  const inputVal = "it's true";
  fireEvent.change(inputTest, {target: {value: inputVal}})
  expect(inputTest.value).toBe(inputVal);
})

test('handleClick returns description', () => {
  const beverage = {isClicked: true, description: "ok"}
  const handleClick = vi.fn(beverage => beverage.description);
  handleClick(beverage);
  expect(handleClick).toHaveReturnedWith("ok")
})

test('handleClick returns isClicked(boolean)', () => {
  const beverage = {isClicked: true, description: "ok"}
  const handleClick = vi.fn(beverage => beverage.isClicked);
  handleClick(beverage);
  expect(handleClick).toHaveReturnedWith(true);
});

test('testing func handleClick', () => {
  expect(handleClick).toBeDefined();
})

test('testing handleClick return', () => {
  const handleClick = vi.fn();
  handleClick();
  expect(handleClick).toHaveReturned();
});

test('testing handleClick return', () => {
  const handleClick = vi.fn();
  handleClick();
  expect(handleClick).toHaveBeenCalled(1);
});

test('handleClick toHaveBeenCalledTimes(0)', () => {
  const beverage = {isClicked: true};
  const handleClick = vi.fn(beverage => beverage.count);
  handleClick(beverage);
  expect(handleClick).toHaveBeenCalledTimes(1);
});

test('testing handleClick return', () => {
  const beverage = {isClicked: true}
  const handleClick = vi.fn(beverage => beverage);
  handleClick();
  expect(handleClick).toHaveReturned({isClicked: false});
});

test('testing handleClick return', () => {
  const beverage = {isClicked: true}
  const handleClick = vi.fn(beverage => beverage);
  handleClick();
  expect(handleClick).toHaveBeenCalled(1);
});
