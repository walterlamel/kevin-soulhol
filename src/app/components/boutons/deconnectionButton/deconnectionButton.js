import { useDispatch } from "react-redux";
import { getSessionFailed } from "../../../pages/slices/userSlice";

const DeconnectionButton = () => {
       const dispatch = useDispatch();

       async function deconnection() {
              return await fetch(
                     process.env.REACT_APP_API_USER + "disconnect",
                     {
                            credentials: "include",
                     },
              )
                     .then((res) => res.json())
                     .then(
                            (data) => {
                                   console.log(data);
                                   dispatch(getSessionFailed());
                                   return true;
                            },
                            (err) => {
                                   console.log(err);
                                   return false;
                            },
                     );
       }
       return <button onClick={(e) => deconnection()}>Deconnection</button>;
};

export default DeconnectionButton;
