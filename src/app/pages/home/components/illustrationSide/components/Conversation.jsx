import { AnimatePresence, motion } from "framer-motion";
import { useSelector } from "react-redux";

import { openedConv, textConv, titleConv } from "../slice/conversationSlice";

const variants = {
  closed: {
    y: 150,
  },
  opened: {
    y: 0,
    transition: {
      delay: 0,
      staggerChildren: 0.03,
    },
  },
};

const letter = {
  closed: { opacity: 0 },
  opened: { opacity: 1 },
};

const Conversation = () => {
  const open = useSelector(openedConv);
  const nameTalker = useSelector(titleConv);
  const text = useSelector(textConv);

  return (
    <div className="container-conversation">
      <AnimatePresence>
        {open && (
          <motion.div
            className="conversation"
            variants={variants}
            initial="closed"
            animate="opened"
            exit="closed"
          >
            <span className="name">{nameTalker} :</span>
            <TextAnimate text={text} />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Conversation;

const TextAnimate = ({ text }) => {
  return (
    <div>
      {text &&
        text.split("").map((char, key) => {
          return (
            <motion.span key={key} variants={letter}>
              {char}
            </motion.span>
          );
        })}
    </div>
  );
};
