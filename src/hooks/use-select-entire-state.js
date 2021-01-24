import { useSelector } from "react-redux";

export function useSelectEntireState() {
  const entireState = useSelector((state) => ({
    ...state.noteReducers,
    ...state.bolinhosReducers,
  }));

  return entireState;
}
