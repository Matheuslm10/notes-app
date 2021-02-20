import { useSelector } from "react-redux";

export function useSelectEntireState() {
  const entireState = useSelector((state) => ({
    ...state.noteReducers,
  }));

  return entireState;
}
