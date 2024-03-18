import Lottie, { LottieRefCurrentProps } from "lottie-react";
import LottieAnimation from "../assets/LootieAnimation.json";
import { useRef } from "react";

function AboutLottie() {
  const LottieRef = useRef<LottieRefCurrentProps>(null);
  LottieRef.current?.setSpeed(0.4);

  return (
    <Lottie
      animationData={LottieAnimation}
      lottieRef={LottieRef}
      style={{ maxWidth: "25rem", aspectRatio: 1 }}
    />
  );
}

export default AboutLottie;
