<h2>1: useState hook <h2>
The useState hook allows you to add state to a functional component. It takes an initial value as an argument and returns an array with two elements: the current state value and a function to update it.



![image](https://github.com/kondalraodurgam/Hooks/assets/20201281/867ce761-648f-4462-9c72-e2383f27f732)


<h2>2.useEffect Hook</h2>
If you’re familiar with React class lifecycle methods, you can think of the useEffect Hook as the componentDidMount, componentDidUpdate, and componentWillUnmount lifecycle methods all combined in one function. It lets you replicate React's lifecycle methods in functional components.

The useEffect Hook lets you perform side effects in function components. Side effects are actions that can run alongside the main operations of a component, such as external API interactions, modifying state variables, and data fetching.

The useEffect hook accepts 2 arguments:

A function with the code to run
An array that contains a list of values from the component scope (props, context, and state variables), known as a dependency array, which tells the Hook to run every time its value is updated. If not supplied, the Hook will run after every render.

![image](https://github.com/kondalraodurgam/Hooks/assets/20201281/d6361163-af2a-49ea-98de-75cc88f04572)
![image](https://github.com/kondalraodurgam/Hooks/assets/20201281/f34ee4bf-b694-4f0a-b4b0-6cecd6031804)


2: <h2>useEffect API hook example 2</h2>
The useEffect hook allows you to perform side effects in a functional component. Side effects include things like fetching data from an API, updating the DOM, or subscribing to an event.

Here’s an example of how to use useEffect to fetch data from an API:

![image](https://github.com/kondalraodurgam/Hooks/assets/20201281/e822291d-0ff8-4660-85bc-41d52cec244d)




