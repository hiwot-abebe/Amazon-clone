import { useContext, useEffect } from "react";
import Routering from "./Router";
import { DataContext } from "./Components/DataProvider/DataProvider";
import { Type } from "./Utility/Action.type";
import {auth} from "./Utility/Firebase"
function App() {
  const [{ user }, dispatch] = useContext(DataContext);

  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        dispatch({
          type: Type.SET_USER,
          user: authUser
        })
      } else {
        dispatch({
          type: Type.SET_USER,
          user: null,
        })
      }
    })
  }, [])
  return (
    <>
      <Routering />
      </>
  );
}

export default App;
