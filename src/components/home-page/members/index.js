 import React, { useEffect, useState } from "react";

function MemberSection() {
  const cityNames = ["Members","Karabük", "Istanbul", "Çankırı", "Bartın"];
  // Valeurs cibles pour chaque membre de la ville
  const targetValues = [135,55, 30, 40, 10];
   // Changez les valeurs cibles ici

  const [total, setTotal] = useState(0);

  useEffect(() => {
    // Fonction qui anime le compteur pour un membre de la ville spécifique
    const animateCounter = (counterIndex, targetValue) => {
      let count = 0;
      const duration = 2000;
      const interval = 20;
      const step = (targetValue - count) / (duration / interval);

      const counterInterval = setInterval(() => {
        count += step;
        if (count >= targetValue) {
          count = targetValue;
          clearInterval(counterInterval);
        }
        setTotal((prevTotal) => prevTotal + step);
        const counters = document.querySelectorAll(".count");
        counters[counterIndex].textContent = Math.floor(count);
      }, interval);
    };

    // Fonction de défilement pour déclencher l'animation
    const scrollHandler = () => {
      const section = document.querySelector(".member-section");
      if (!section) return;
      const sectionPosition = section.getBoundingClientRect();
      if (
        sectionPosition.top <= window.innerHeight &&
        sectionPosition.bottom >= 0
      ) {
        // Animation pour chaque membre de la ville
        targetValues.forEach((value, index) => {
          animateCounter(index, value);
        });

        // Désactiver le gestionnaire de défilement après l'animation
        window.removeEventListener("scroll", scrollHandler);
      }
    };

    window.addEventListener("scroll", scrollHandler);

    return () => {
      window.removeEventListener("scroll", scrollHandler);
    };
  }, []);

  return (
    <section className="member pb-5">
      <div  className="member-section container d-flex flex-column flex-md-row justify-content-evenly gap-lg-3 mx-auto text-primary">
        {targetValues.map((ville, index) => (
         
            <div key={index}>
              <div className="counter text-center mx-auto shadow-lg d-md-inline rounded-5 p-4">
                <span className="count">0</span>
              </div>
              <p className="text-center my-5 ">{index === 0 ? "Members" : cityNames[index]}</p>
              
            </div>
         
        ))}
      </div>
      
    </section>
  );
}

export default MemberSection;
