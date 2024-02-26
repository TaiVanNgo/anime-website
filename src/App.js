import Popular from './Components/Popular';
import { useGlobalContext } from './Context/Global';

function App() {
  const global = useGlobalContext();
  console.log(global);
  return (
    <div>
      <Popular />
    </div>
  );
}

export default App;
