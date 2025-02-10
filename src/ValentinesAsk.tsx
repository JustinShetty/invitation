import { useState } from "react";
import { useNavigate } from "react-router-dom";

function ValentinesAsk() {
  const navigate = useNavigate();
  const [yesSize, setYesSize] = useState(16);
  const [noSize, setNoSize] = useState(16);
  const [shake, setShake] = useState(false);
  const maxYesSize = window.innerWidth < 1000 ? 50 : 100;

  const handleNoClick = () => {
    setYesSize((prev) => {
      // Grow yes button up to a max
      const newSize = Math.min(prev * 1.5, maxYesSize);

      // If it's *already* at max, shake it
      if (prev === maxYesSize) {
        setShake(true);
        // Remove shake class after animation
        setTimeout(() => setShake(false), 300);
      }

      return newSize;
    });

    // Shrink no button, but keep it above some minimum
    setNoSize((prev) => Math.max(prev * 0.8, 12));
  };

  const handleYesClick = () => {
    navigate("/yes");
  };

  return (
    <>
      <h1 style={{ textAlign: "center" }}>will you be my valentine?</h1>
      <div style={{ textAlign: "center", marginTop: "50px" }}>
        <button
          onClick={handleYesClick}
          className={shake ? "shake" : ""}
          style={{ fontSize: yesSize, marginRight: "20px" }}
        >
          yes
        </button>
        <button
          onClick={handleNoClick}
          style={{ fontSize: noSize }}
        >
          no
        </button>
      </div>
    </>
  );
}

export default ValentinesAsk;
