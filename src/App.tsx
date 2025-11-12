import "./App.css";
import {
  decrease,
  increase,
  increaseByValue,
} from "./redux/features/counterSlice";
import { useAppDispatch, useAppSelector } from "./redux/features/hooks";

function App() {
  const { count } = useAppSelector((state) => state.counter);
  const dispatch = useAppDispatch();
  return (
    <>
      <h1 className="text-3xl font-bold flex justify-center items-center">
        Project with Redux
      </h1>
      <div className="h-screen w-auto flex justify-center items-center">
        <div className="flex border border-purple-300 rounded-md p-10 bg-slate-300">
          <button
            onClick={() => dispatch(increaseByValue(5))}
            className="text-3xl px-3 py-2 mr-2 rounded-md bg-green-400 font-semibold text-white"
          >
            IncrementByValue 5
          </button>
          <button
            onClick={() => dispatch(increase())}
            className="text-3xl px-3 py-2 rounded-md bg-green-400 font-semibold text-white"
          >
            Increment
          </button>
          <h1 className="text-3xl font-bold text-red-400 mx-20">{count}</h1>
          <button
            onClick={() => dispatch(decrease())}
            className="text-3xl px-3 py-2 rounded-md bg-red-400 font-semibold text-white"
          >
            Decrement
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
