import { RxCrossCircled } from "react-icons/rx";
import { motion } from "framer-motion";

export default function MessageError({ setSendError }) {
  return (
    <motion.section
      className="message-error"
      onClick={() => setSendError(false)}
      key={"modal"}
      initial={{ opacity: 0, y: 200 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -500 }}
    >
      <RxCrossCircled />
      <span>Message Failed to Send</span>
      <p>
        Try again later or email <b>contact@meltingicemarketing.com</b>{" "}
        directly.
      </p>
      <small>(Click to dismiss)</small>
    </motion.section>
  );
}
