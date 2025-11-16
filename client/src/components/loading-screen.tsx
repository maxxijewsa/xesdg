import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const LOADING_COMPLETE_KEY = "legionx-loading-complete";

export function LoadingScreen() {
  const [isLoading, setIsLoading] = useState(() => {
    return !sessionStorage.getItem(LOADING_COMPLETE_KEY);
  });

  useEffect(() => {
    if (!isLoading) return;
    
    const timer = setTimeout(() => {
      setIsLoading(false);
      sessionStorage.setItem(LOADING_COMPLETE_KEY, "true");
    }, 2000);

    return () => clearTimeout(timer);
  }, [isLoading]);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-white via-purple-50 to-purple-100 dark:from-gray-950 dark:via-purple-950 dark:to-purple-900"
        >
          <div className="flex flex-col items-center gap-6">
            <motion.div
              className="flex gap-2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              {[0, 1, 2].map((i) => (
                <motion.div
                  key={i}
                  className="h-3 w-3 rounded-full bg-purple-600"
                  animate={{
                    scale: [1, 1.5, 1],
                    opacity: [0.5, 1, 0.5],
                  }}
                  transition={{
                    duration: 1,
                    repeat: Infinity,
                    delay: i * 0.2,
                  }}
                />
              ))}
            </motion.div>
            <motion.p
              className="text-lg font-medium bg-gradient-to-r from-purple-600 to-purple-400 bg-clip-text text-transparent"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              Loading LegionX...
            </motion.p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
