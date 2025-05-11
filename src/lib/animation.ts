
export const setupScrollAnimations = () => {
  if (typeof window === 'undefined') return;
  
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in-view');
        }
      });
    },
    {
      root: null,
      rootMargin: '0px',
      threshold: 0.1,
    }
  );

  setTimeout(() => {
    const elements = document.querySelectorAll('.animate-on-scroll');
    elements.forEach((el) => {
      observer.observe(el);
    });
  }, 100);

  return () => {
    const elements = document.querySelectorAll('.animate-on-scroll');
    elements.forEach((el) => {
      observer.unobserve(el);
    });
  };
};
