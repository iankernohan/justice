import { CiCircleCheck } from "react-icons/ci";
import { motion } from "framer-motion";

export default function SendConfirm() {
  return (
    <motion.section
      className="send-confirm"
      key={"modal"}
      initial={{ opacity: 0, y: 200 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -500 }}
    >
      <CiCircleCheck />
      <span>Message Sent Successfully</span>
    </motion.section>
  );
}
