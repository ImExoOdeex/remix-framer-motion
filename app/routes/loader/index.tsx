import { Link, useLoaderData, useLocation } from "@remix-run/react";
import { motion } from "framer-motion";

export const loader = () => {
    return { message: "While exiting this page error will be displayed!" };
};

function Index() {
    const data = useLoaderData();
    /*
    
    there's actally one not good fix for this
    we can use this:
    const data = useLoaderData() ?? {};
    BUT now, when we exit page, and animation plays, no loader data will be displayed, cuz its empty object 

    */

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
