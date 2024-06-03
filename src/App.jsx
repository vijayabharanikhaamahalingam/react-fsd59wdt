const { useRef } = require("react")

const App=()=>{

const inputRef =useRef(null);

  const handleClick=()=>{
    inputRef.current.focus();
  }
  return (
    <>
    <input type="text" 
    ref={inputRef}
    />
    <button onClick={handleClick}>focus iput</button>
    </>
  )
}