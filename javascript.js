document.addEventListener('DOMContentLoaded', function () {
  const elements = document.querySelectorAll('.content');

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-slide-up'); // Atau 'animate-slide-down' sesuai kebutuhan
          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.1, // Seberapa banyak elemen harus terlihat untuk memicu animasi
    }
  );

  elements.forEach((element) => {
    observer.observe(element);
  });
});
