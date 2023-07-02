import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { changeConv, closeConv } from "../slice/conversationSlice";

const TimeOpened = 100;
const MinTime = 5000;

const Element = ({ elem }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  //const { openConv } = useContext(ConversationContext);

  function handleClick() {
    if (elem.action) {
      switch (elem.action.name) {
        default:
          break;
        case "talk":
          //openConv(elem.action.details, elem.name);
          dispatch(
            changeConv({
              title: elem.name,
              text: elem.action.details,
            })
          );

          let time = elem.action.details.length * TimeOpened;

          setTimeout(
            () => {
              dispatch(closeConv());
            },
            time < MinTime ? MinTime : time
          );
          break;
        case "play":
          navigate(elem.action.details);
          break;
      }
    }
  }

  return (
    <div className="element" style={elem.position} onClick={handleClick}>
      <img src={"/imgs/" + elem.img} alt="" />
    </div>
  );
};

export default Element;
