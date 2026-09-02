// Scroll-triggered fade/slide-in for elements with the .reveal class.
// Uses IntersectionObserver so nothing is recalculated on every scroll tick.

const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

const revealTargets = document.querySelectorAll('.reveal');

if (prefersReducedMotion) {
  // Skip the animation entirely — just show everything.
  revealTargets.forEach((el) => el.classList.add('is-visible'));
} else {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target); // animate in once, then leave it alone
        }
      });
    },
    {
      threshold: 0.15,
      rootMargin: '0px 0px -40px 0px',
    }
  );

  revealTargets.forEach((el) => observer.observe(el));
}


// Typing animation for the intro paragraph
const typingTarget = document.getElementById('typing-target');

if (typingTarget) {
  const rawHTML = typingTarget.innerHTML;
  const segments = rawHTML
    .split(/<br\s*\/?>/i)
    .map(seg => seg.trim().replace(/\s+/g, ' '));

  // Lock in the paragraph's final height before clearing it,
  // so elements below don't shift while the text types out.
  const finalHeight = typingTarget.offsetHeight;
  typingTarget.style.minHeight = finalHeight + 'px';

  typingTarget.textContent = '';

  const textSpan = document.createElement('span');
  const cursorSpan = document.createElement('span');
  cursorSpan.className = 'typing-cursor';

  typingTarget.appendChild(textSpan);
  typingTarget.appendChild(cursorSpan);

  if (prefersReducedMotion) {
    segments.forEach((seg, idx) => {
      textSpan.appendChild(document.createTextNode(seg));
      if (idx < segments.length - 1) textSpan.appendChild(document.createElement('br'));
    });
    cursorSpan.remove();
  } else {
    let segIndex = 0;
    let charIndex = 0;
    const typingSpeed = 18; // ms per character — keep whatever value you'd already set

    function typeNextChar() {
      if (segIndex >= segments.length) {
        cursorSpan.remove();
        return;
      }
      const currentSegment = segments[segIndex];
      if (charIndex < currentSegment.length) {
        textSpan.appendChild(document.createTextNode(currentSegment[charIndex]));
        charIndex++;
        setTimeout(typeNextChar, typingSpeed);
      } else {
        segIndex++;
        charIndex = 0;
        if (segIndex < segments.length) {
          textSpan.appendChild(document.createElement('br'));
        }
        setTimeout(typeNextChar, typingSpeed);
      }
    }

    setTimeout(typeNextChar, 400); // brief pause before typing starts
  }
}