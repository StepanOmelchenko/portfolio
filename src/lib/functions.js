function animateScroll(from, to, duration) {
    return new Promise(function(resolve) {
      
      function animate() {
        const currentTime = Date.now();
        const timesLeft = startTime + duration - currentTime;
        
        if (timesLeft <= 0) {
          scroll(0, to);
          resolve();
        } else {
          const progress = 1/duration * (duration - timesLeft);
          const nextPoint = from + (to - from) * progress;
          scroll(0, nextPoint);
          requestAnimationFrame(animate);
        }
      }
      
      const startTime = Date.now();
      requestAnimationFrame(animate);
    });
  }

  exports.animateScroll = animateScroll;