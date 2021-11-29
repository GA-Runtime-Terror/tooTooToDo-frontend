const [isActive, setActive] = useState("false");

  const ToggleClass = () => {
    setActive(!isActive);
  };
  return (
    <div className={isActive ? "active" : "inactive"}>  
     <h1>Hello Devdojo</h1>
      <button onClick={ToggleClass}>Toggle class</button>
    </div>
  );
