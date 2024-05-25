import Todos from "./components/todo/Todos"
import StopWatch from "./components/StopWatch"
import ProblemUseRef from "./components/ProblemUseRef"
import MyInputBox from "./components/MyInputBox"
import User from "./components/User"
import SearchWithDebounce from "./components/SearchWithDebounce"
import SearchWithDebounce2 from "./components/SearchWithDebounce2"

function App() {










  return (
    // <></> means Fragment
    <>
      <div className="bg-gray-100">
        <StopWatch />
        <ProblemUseRef />
        <MyInputBox />
        <User />
        <SearchWithDebounce />
        <SearchWithDebounce2 />
        {/* <Todos /> */}
      </div>
    </>
  )
}

export default App
