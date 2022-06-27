import { useState } from 'react';
import './App.css';
import Dropdown from './components/Dropdown';
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
const options = [
  {
    label: 'A red color',
    value: 'red'
  },
  {
    label: 'a blue color',
    value: 'blue'
  },
  {
    label: 'a Shade of Orange',
    value: 'orange'
  }
]

function App() {
  const [selected, setSelected] = useState(options[0])
  return (
    <div className="container     ">
      {/* <Accordians items={items} /> <Searchterm />*/}

      <Dropdown options={options}
        onSelectedChange={setSelected}
        selected={selected} />

    </div>
  );
}

export default App;
