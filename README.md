# Concept 
 
Autocracy is a self-governance platform. While it does not aim to replace national governments, it enables communities, local or otherwise distributed, to partly govern themselves as they choose. Its main functionalities include:

 - Maintaining a registry of rules.
 - Maintaining a registry of members.
 - Collecting and managing funds and other shared resources
 - Voting for rules or representatives.

# Ecosystem architecture 

At the top level, Autocracy is designed as several products. First, the core of Autocracy is the organisational hub. This part of the software is capable of hosting multiple organisations. Of course, it can also host a single organisation if desired, but the point of this is to enable regional hubs for small organisations lacking the resources to set up a dedicated hub. An organisational registry maintains a list of all active (and public) organisations, regularly polling known organisational hubs.

The software of an organisation instance is designed with a modular philosophy in mind, acting merely as a framework to plug components into for various functionality. For instance, different voting or leadership mechanisms can be plugged in. In fact, one can even query dedicated third party services! 