This is an experiment in deploying and using Freactal 3. The premise is "build a bear" site
(with robots); basically a choose a component system with a central robot model. 

In this the first stage, we apply a root model to the store and do a quick POC with a name for the robot. 
Note, in the original Freactal, there was a sync problem between input field values and state
which doesn't seem to be present... so far. 

## System notes

This site is powered by Neutrino.js, a deployment system that manages webpack/lint/react/etc. 

I'm building this with yarn; you probably don't need to use it (npm/the node build system you are working on on your spare time) 
should work fine but I'm not doing cross - deployment tests at this point. 

