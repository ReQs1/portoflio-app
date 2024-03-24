import Lottie, { LottieRefCurrentProps } from "lottie-react";
import LottieAnimation from "../assets/LootieAnimation.json";
import { useRef } from "react";

function AboutLottie() {
  const LottieRef = useRef<LottieRefCurrentProps>(null);

  return (
    <Lottie
      onDOMLoaded={() => LottieRef.current?.setSpeed(0.35)}
      initialSegment={[0, 113]}
      onComplete={() => LottieRef.current?.playSegments([22, 113], true)}
      loop={false}
      animationData={LottieAnimation}
      lottieRef={LottieRef}
      style={{ maxWidth: "25rem", aspectRatio: 1 }}
    />
  );
}

export default AboutLottie;
