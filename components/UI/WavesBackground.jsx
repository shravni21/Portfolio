import React from 'react'
import Wave from 'react-wavify'

const WavesBackground = () => {
  return (
    <div className="absolute left-0 bottom-0 w-full pointer-events-none -z-10">
      <div className="h-40 md:h-70 bg-gradient-to-t from-softBlue to-transparent"></div>
      <Wave
        fill="url(#waveGradient)"
        paused={false}
        options={{
          height: 0,
          amplitude: 20,
          speed: 0.15,
          points: 3
        }}
      >
        <defs>
          <linearGradient id="waveGradient" gradientTransform="rotate(90)">
            <stop offset="0%" stopColor="#9FD3FF" />
            <stop offset="100%" stopColor="#BDE4FF" />
          </linearGradient>
        </defs>
      </Wave>

    </div>
  )
}

export default WavesBackground
