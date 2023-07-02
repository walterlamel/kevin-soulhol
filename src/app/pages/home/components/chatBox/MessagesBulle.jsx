import { motion } from "framer-motion";
import { useState } from "react";

const variants = {
  initial: { opacity: 0, y: 100 },
  normal: { opacity: 1, y: 0 },
  exit: { opacity: 0, x: 100 },
  hover: { y: -5 },
  tap: { scale: 0.9 },
};

const MessagesBulle = ({ message, onClick, setResultAsk }) => {
  const [value, setValue] = useState("");
  const isConnect = false;

  return (
    <>
      {message && (
        <motion.div
          className={"message " + message.accent}
          onClick={(e) => {
            if (message.valid) {
              let form = document.querySelector("#form_" + message.name);
              if (form[message.name].value && form[message.name].value !== "") {
                setResultAsk(message, message.name, form[message.name].value);
                setValue("");
              }
            } else if (message && message.to && !message.input) {
              onClick(message.to);
            }
          }}
          variants={variants}
          initial="initial"
          animate="normal"
          exit="exit"
          whileHover={"hover"}
          whileTap={"tap"}
        >
          {isConnect
            ? message.textconnect
              ? message.textconnect
              : message.text
            : message.text}
          {message.input && (
            <form
              id={"form_" + message.name}
              action=""
              onSubmit={(e) => {
                e.preventDefault();
                setResultAsk(message, message.name, value);
                setValue("");
              }}
            >
              <input
                type="text"
                name={message.name}
                placeholder="Votre réponse..."
                value={value}
                onChange={(e) => setValue(e.target.value)}
              />
            </form>
          )}
        </motion.div>
      )}
    </>
  );
};

export default MessagesBulle;
