// Define states with their corresponding properties
const states = {
    "WELCOME": {
      prompt: "Welcome. You've got this.",
      activeProgress: 1,
      waveFrame: 1,
      bgGradient: "linear-gradient(180deg, #A0E3F3 0%, #C2F0E4 100%)"
    },
    "DOCUMENT_CHECK": {
      prompt: "Document check in progress...",
      activeProgress: 2,
      waveFrame: 2,
      bgGradient: "linear-gradient(180deg, #B3D4FC 0%, #D6F2F8 100%)"
    },
    "VOLUME_LOW": {
      prompt: "Speak a bit louder.",
      activeProgress: 2,
      waveFrame: 3,
      bgGradient: "linear-gradient(180deg, #FFE599 0%, #FFF8E1 100%)"
    },
    "PACE_FAST": {
      prompt: "Slow down. Take a breath.",
      activeProgress: 2,
      waveFrame: 4,
      bgGradient: "linear-gradient(180deg, #FFD9B3 0%, #FFF3E0 100%)"
    },
    "SUCCESS": {
      prompt: "All done! Safe travels.",
      activeProgress: 3,
      waveFrame: 1,  // Reset to frame 1 on success (or choose a different frame if desired)
      bgGradient: "linear-gradient(180deg, #C2F0E4 0%, #E0F7FA 100%)"
    }
  };
  
  // Function to update UI state based on stateName
  function setState(stateName) {
    const state = states[stateName];
    if (!state) {
      console.error("State not found: " + stateName);
      return;
    }
  
    // Update background gradient
    document.body.style.background = state.bgGradient;
  
    // Update prompt text
    document.getElementById('prompt').textContent = state.prompt;
  
    // Update progress bar segments
    for (let i = 1; i <= 3; i++) {
      const seg = document.getElementById(`progress-${i}`);
      seg.className = 'segment'; // Reset classes
      if (i <= state.activeProgress) {
        seg.classList.add('active');
      }
    }
  
    // Update the wave animation image
    // Ensure that the asset naming convention matches ("Idle-1.svg", "Idle-2.svg", etc.)
    document.getElementById("animation").innerHTML = `<img src="assets/Idle-${state.waveFrame}.svg" alt="Idle Animation Frame"/>`;
  }
  
  // Initialize with the default state
  setState("WELCOME");
  