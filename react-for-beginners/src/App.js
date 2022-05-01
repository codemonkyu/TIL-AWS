function App() {
  const [counter, setValue] = useState(0);
  const [keyword, setKeyword] = useState("");
  const onClick = () => setValue((prev) => prev + 1);
  const onChange = (event) => setKeyword(event.target.value);
  console.log("계속실행");
  useEffect(() => {
    console.log("call the api...");
  });
  return (
    <div>
      <input
        onChange={onChange}
        value={keyword}
        type="text"
        placeholder="search here...."
      />
      <h1>{counter}</h1>
      <button onClick={onclick}>click me</button>
    </div>
  );
}

export default App;
