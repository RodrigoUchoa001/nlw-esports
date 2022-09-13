interface ButtonProps{
  title: string;
}

function Button(props: ButtonProps){
  return <button>{props.title}</button>
}

function App() {
  return (
    <div>
      <Button title="aa"></Button>
      <Button title="bb"></Button>
      <Button title="cc"></Button>
    </div>
  )
}

export default App
