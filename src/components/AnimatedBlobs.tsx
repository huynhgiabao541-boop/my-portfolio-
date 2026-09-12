import { motion } from 'framer-motion';

export default function AnimatedBlobs() {
  return (
    <>
      <motion.div 
        className="fixed top-[-10%] left-[-10%] w-[40rem] h-[40rem] bg-cyan-400/20 dark:bg-cyan-600/20 rounded-full blur-[120px] pointer-events-none -z-10"
        animate={{ 
          x: [0, 100, -50, 0], 
          y: [0, -50, 100, 0],
          scale: [1, 1.1, 0.9, 1] 
        }} 
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      />
      <motion.div 
        className="fixed bottom-[-10%] right-[-10%] w-[35rem] h-[35rem] bg-blue-500/20 dark:bg-blue-600/20 rounded-full blur-[120px] pointer-events-none -z-10"
        animate={{ 
          x: [0, -100, 50, 0], 
          y: [0, 100, -50, 0],
          scale: [1, 0.9, 1.1, 1] 
        }} 
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
      />
      <motion.div 
        className="fixed top-[40%] right-[10%] w-[25rem] h-[25rem] bg-purple-400/20 dark:bg-purple-600/20 rounded-full blur-[100px] pointer-events-none -z-10"
        animate={{ 
          x: [0, 50, -100, 0], 
          y: [0, 50, -100, 0],
          scale: [1, 1.2, 0.8, 1] 
        }} 
        transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
      />
      <motion.div 
        className="fixed bottom-[20%] left-[10%] w-[30rem] h-[30rem] bg-brand-cyan/20 dark:bg-cyan-500/20 rounded-full blur-[100px] pointer-events-none -z-10"
        animate={{ 
          x: [0, -50, 100, 0], 
          y: [0, -100, 50, 0],
          scale: [1, 0.8, 1.2, 1] 
        }} 
        transition={{ duration: 22, repeat: Infinity, ease: "linear" }}
      />
    </>
  );
}
