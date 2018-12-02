This is an experiment in deploying and using Freactal 3. The premise is "build a bear" site
(with robots); basically a choose a component system with a central robot model. 

## First Stage

In this the first stage, we apply a root model to the store and do a quick POC with a name for the robot. 
Note, because Freactal is Asynchronous we buffer name through local state to prevent entry issues from
disturbing the interaction with the input. (this is an existing Freactal situation.)

## System notes

This site is powered by Neutrino.js, a deployment system that manages webpack/lint/react/etc. 

I'm building this with yarn; you probably don't need to use it (npm/the node build system you are working on on your spare time) 
should work fine but I'm not doing cross - deployment tests at this point. 

## Stage Two

We're adding the next stage - a selector paradigm for our robot building.

Importing SVG with a few support libraries - `react-svg` to get the robot images and `svg.js` to hook
events (and hopefully do some parsing for the parts) into the action paradigm. 

Also we're moving the input and some feedback from the SVG clicks into a "control panel" banner.

Note one of the advantages to Freactal is that as state is transported to all listeners, we can 
slide over the functionality of the name field laterally a little easier.
