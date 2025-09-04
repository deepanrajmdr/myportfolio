(function () {
      const nav = document.getElementById('nav-bar');
      let ticking = false;

      function onScroll() {
        const scrolled = window.scrollY > 0;
        if (scrolled) {
          nav.classList.add('scrolled');
        } else {
          nav.classList.remove('scrolled');
        }
        ticking = false;
      }

      window.addEventListener('scroll', () => {
        if (!ticking) {
          window.requestAnimationFrame(onScroll);
          ticking = true;
        }
      }, { passive: true });

      // Run once on load (in case the page loads mid-scroll)
      onScroll();
    })();

