import { motion } from "framer-motion"

export default function PopLink({ href, className, children }) {
    return (
        <motion.a 
            initial={{ scale: 1 }}
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 1.3 }}
            transition={{ duration: 0.2 }}
            href={href} 
            className={className}
        >
            {children}
        </motion.a>
    )
}