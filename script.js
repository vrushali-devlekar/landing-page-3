
      const img = document.querySelector("main img");
      const main = document.querySelector("main");
      const scrollDiv2 = document.querySelector(".scroll-div2");

      main.addEventListener("mousemove", (e) => {
        const rect = main.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        // Calculate rotation for image
        const rotateY = (x / rect.width - 0.5) * 30;
        const rotateX = (y / rect.height - 0.5) * -30;

        img.style.transform = `perspective(800px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.05)`;

        // Parallax effect for scroll-div2
        const offsetX = (x / rect.width - 0.5) * 60; // adjust strength
        const offsetY = (y / rect.height - 0.5) * 30;

        scrollDiv2.style.transform = `translate(${offsetX}px, ${offsetY}px)`;
      });

      main.addEventListener("mouseleave", () => {
        img.style.transform =
          "perspective(800px) rotateX(0deg) rotateY(0deg) scale(1)";
        scrollDiv2.style.transform = "translate(0, 0)";
      });
