import { useState } from 'react';
import './App.css';
import Dropdown from './components/Dropdown';
import Accordians from './components/Accordians';
import Searchterm from './components/Searchterm';
import Translate from './components/Translate';
import Route from './components/Route';
import Header from './components/Header';
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
  const [showDropdown, setShowDropDown] = useState(true)

  return (
    <div className="container     ">
      <Header />
      <Route path='/'>
        <Accordians items={items} />
      </Route>
      <Route path='/search'>
        <Searchterm />
      </Route>
      <Route path='/dropdown'>
        <button onClick={() => { setShowDropDown(!showDropdown) }}>Toggle Dropdown</button>
        {
          showDropdown ?
            <Dropdown options={options}
              onSelectedChange={setSelected}
              selected={selected} /> : null
        }
      </Route>
      <Route path='/translate'>
        <Translate />
      </Route>





    </div>
  );
}

export default App;
