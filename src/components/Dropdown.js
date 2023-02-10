import { useState } from "react";
import { GoChevronDown } from 'react-icons/go'
import Panel from "./Panel";

function Dropdown ({options, value, onChange }) {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen)
  }

  const handleOptionClick= (option) => {
    setIsOpen(false);
    onChange(option)
  }

  const renderedOptions = options.map((option) => {
    return <div className="bg-sky-100 rounded cursor-pointer p-1" onClick={() => handleOptionClick(option)} key={option.value}>{option.label}</div>
  })

  return <Panel className="w-48 relative">
    <Panel className="flex justify-between items-center cursor-pointer" onClick={handleClick}>{value?.label || 'Select...'}<GoChevronDown className="text-lg"/></Panel>
    {isOpen && <div className="absolute top-full" >{renderedOptions}</div>}
  </Panel>
}

export default Dropdown 