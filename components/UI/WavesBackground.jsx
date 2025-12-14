import React from "react";
import Wave from "react-wavify";

export default function WavesBackground() {
  return (
    <div className="fixed inset-x-0 bottom-0 pointer-events-none z-0">
      
      <div className="absolute inset-x-0 bottom-0 h-40 md:h-52 bg-gradient-to-t from-[#bde4ff] to-transparent" />

      {/* Wave */}
      <Wave
        className="block"
        fill="url(#waveGradient)"
        paused={false}
        options={{
          height: 20,
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
