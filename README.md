### Remix with framer-motion.

There's bug when page uses loader and while exiting page (animation starts playing) remix loses all loader data and data gets undefinied, so it gives error.

~~Another problem is with routes with action function. When changing route, animation plays, but another routes won't load :)~~
It was problem with custom chakra's UI and framer's motion components, but it's solved - just add wrap it with `AnimatePresence`
