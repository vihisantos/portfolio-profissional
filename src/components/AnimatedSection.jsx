import { motion } from 'framer-motion';

const AnimatedSection = ({ children, className = "", delay = 0 }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{
                duration: 0.8,
                delay: delay,
                ease: [0.25, 1, 0.5, 1] // Soft spring-like ease
            }}
            className={className}
        >
            {children}
        </motion.div>
    );
};

export default AnimatedSection;
