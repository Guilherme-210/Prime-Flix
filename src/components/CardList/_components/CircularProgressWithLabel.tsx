"use client"

interface CircularProgressWithLabelProps {
  value: number
  size?: number
}

export default function CircularProgressWithLabel({
  value,
  size = 50,
}: CircularProgressWithLabelProps) {
  const radius = (size - 6) / 2
  const circumference = radius * 2 * Math.PI
  const offset = circumference - (value / 100) * circumference

  return (
    <div
      className="relative flex items-center justify-center bg-slate-900 rounded-full shadow-lg"
      style={{ width: size, height: size }}
    >
      <svg className="transform -rotate-90" width={size} height={size}>
        {/* Background circle */}
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          stroke="#374151"
          strokeWidth="3"
          fill="transparent"
          opacity="0.3"
        />
        {/* Progress circle */}
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          stroke="#10b981"
          strokeWidth="3"
          fill="transparent"
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          strokeLinecap="round"
          className="transition-all duration-300 ease-out"
        />
      </svg>
      <div className="absolute inset-0 flex items-center justify-center">
        <span className="text-white font-bold text-sm">
          {Math.round(value)}%
        </span>
      </div>
    </div>
  )
}
