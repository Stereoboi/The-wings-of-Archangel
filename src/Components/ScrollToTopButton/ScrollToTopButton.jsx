import { useState, useEffect } from "react";
import { ScrollToTopBtn, ArrowUpIcon } from "./ScrollToTopButton.styled";
const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <ScrollToTopBtn onClick={scrollToTop} isvisible={isVisible.toString()}>
      <ArrowUpIcon />
    </ScrollToTopBtn>
  );
};

export default ScrollToTopButton;
