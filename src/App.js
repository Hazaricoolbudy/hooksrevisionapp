import './App.css';
// import Accordians from './components/Accordians';
import Searchterm from './components/Searchterm';
const items = [
  {
    title: 'What is React ',
    content: 'react is front end javascript library'
  },

  {
    title: "why used react",
    content: "it is used to make components of a page which can be used many times"
  },
  {
    title: 'how do you used react',
    content: 'we can used react by creating components'
  }
]

function App() {
  return (
    <div className="container     ">
      {/* <Accordians items={items} />*/}
      <Searchterm />

    </div>
  );
}

export default App;
