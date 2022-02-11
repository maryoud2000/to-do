import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

test('renders info text', () => {
  render(<App />);
  const linkElement = screen.getByText(/Enter new task/i);
  expect(linkElement).toBeInTheDocument();
});

test('renders buttons', () => {
  render(<App />);
  const linkElement = screen.getByRole("button");
  expect(linkElement).toBeInTheDocument();
});

test('renders input', () => {
  render(<App />);
  const linkElement = screen.getByRole("input");
  expect(linkElement).toBeInTheDocument();
});

test('renders header', () => {
  render(<App />);
  const linkElement = screen.getByText(/To Do List/i);
  expect(linkElement).toBeInTheDocument();
});

describe("complete button", () => {
  test("complete button is in the document", () => {
    render(<App />)
    const button = screen.getByText("Complete")
    expect(button).toBeInTheDocument()
  })
})
