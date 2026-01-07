import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    // Instant scroll to top (like a real page load)
    window.scrollTo(0, 0);

    // Optional: smooth scroll animation instead
    // window.scrollTo({ top: 0, behavior: "smooth" });
  }, [pathname]);

  return null;
}