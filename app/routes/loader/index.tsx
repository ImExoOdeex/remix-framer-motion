import { Link, useLoaderData, useLocation } from "@remix-run/react";
import { motion } from "framer-motion";

export const loader = () => {
    return { message: "While exiting this page error will be displayed!" };
};

function Index() {

    //next line for fix
    const lastData = useRef({})

    const data = useLoaderData() || lastData.current;
    
    useEffect(() => {
        if (data) lastData.current = data
}, [data])

    return (
        <motion.div
            key={useLocation().key}
            style={{ textAlign: "center", padding: 20 }}
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -30 }}
            transition={{ duration: 0.4, type: 'tween' }}
        >
            <div style={{ width: '200px', height: '100px', backgroundColor: "#60c442", margin: 'auto' }} />
            <h1>Hello second route!</h1>
            <p>Message from loader:</p>
            <p>{data.message}</p>

            <Link to="/">Go back</Link>
        </motion.div>
    );
}

export default Index;
