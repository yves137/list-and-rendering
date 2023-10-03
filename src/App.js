
const animals=['dog', 'cat', 'chicken', 'cow', 'sheep', 'horse']

function App() {
  return (
    <ul className="ml-10 mt-10 ">
      {animals.map((animal,i)=><li key={i}><span className="text-4xl font-bold">.</span> {animal}</li>)}
    </ul>
  );
}

export default App;
