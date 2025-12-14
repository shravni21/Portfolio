import React from "react";
import Wave from "react-wavify";

export default function WavesBackground() {
  return (
    <div className="absolute left-0 bottom-0 w-full pointer-events-none -z-10">
      
      {/* Background fade */}
      <div className="h-40 md:h-52 bg-gradient-to-t from-light to-transparent"></div>

      {/* Wave */}
      <Wave
        fill="url(#waveGradient)"
        paused={false}
        options={{
          height: 0,
          amplitude: 20,
          speed: 0.15,
          points: 3,
        }}
      >
        <defs>
          <linearGradient id="waveGradient" gradientTransform="rotate(90)">
            <stop offset="0%" stopColor="#bde4ff" />
            <stop offset="100%" stopColor="#BFECFF" />
          </linearGradient>
        </defs>
      </Wave>
    </div>
  );
}
