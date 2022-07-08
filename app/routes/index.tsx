import { useLocation, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

export function meta() {
  return {
    title: "Remix Starter",
    description: "Welcome to remix!"
  };
}

export default function Index() {
  const navigate = useNavigate();

  return (
    <motion.div
      key={useLocation().key}
      style={{ textAlign: "center", padding: 20 }}
      initial={{ opacity: 0, x: 30 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -30 }}
      transition={{ duration: 0.4, type: 'tween' }}
    >
      <div style={{ width: '200px', height: '100px', backgroundColor: "#d35b8d", margin: 'auto' }} />
      <h2>Welcome to Remix with framer motion!</h2>
      <p>
        While exiting <code>loader</code>  route, error will be displayed. Error displays only when full page transitions are working!
      </p>
      <button onClick={() => navigate("/loader")}>Go to loader route</button>

    </motion.div>
  );
}
