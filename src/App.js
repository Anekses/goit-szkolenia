import logo from './logo.svg';
import Product from './Product';
import './App.css';

function Welcome(props) {
  const { name } = props;

  const tmpString = `Hello, ${name}`;
  return <p>Hello, {name}</p>
}

function App() {

  const productList = [
    {
      id: 0,
      header: 'header-1',
      price: 15,
      name: 'awesome'
    },
    {
      id: 1,
      header: 'header-2',
      price: 1,
      name: 'my name'
    },
    {
      id: 5,
      header: 'header-31',
      price: 5,
      name: 'cookie'
    },
    {
      id: 5,
      header: 'header-4',
      price: 105,
      name: 'react'
    },
    {
      id: 123123,
      header: 'header-5',
      price: 105,
      name: 'react'
    },
  ]

  const favouriteBooks = [
    { id: "id-1", name: "JS for beginners" },
    { id: "id-2", name: "React basics" },
    { id: "id-3", name: "React Router overview" },
    { id: "id-4", name: "Redux in depth" },
  ];

  return (
    <div className="App">
      {productList.map((product, index) => {
        return (
          <Product key={index} {...product} />
        )
      })}
    </div>
  );
}

export default App;
