import React, { useEffect, useRef, useState } from 'react';

interface SkillBarProps {
  name: string;
  level: number;
  delay?: number;
}

export const SkillBar: React.FC<SkillBarProps> = ({ name, level, delay = 0 }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [animatedLevel, setAnimatedLevel] = useState(0);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(() => {
        const duration = 1500;
        const steps = 60;
        const stepValue = level / steps;
        let currentStep = 0;

        const interval = setInterval(() => {
          if (currentStep <= steps) {
            setAnimatedLevel(Math.min(stepValue * currentStep, level));
            currentStep++;
          } else {
            clearInterval(interval);
          }
        }, duration / steps);

        return () => clearInterval(interval);
      }, delay);

      return () => clearTimeout(timer);
    }
  }, [isVisible, level, delay]);

  return (
    <div ref={ref} className="mb-4">
      <div className="flex justify-between items-center mb-2">
        <span className="text-gray-700 dark:text-gray-300 font-medium">{name}</span>
        <span className="text-blue-600 dark:text-blue-400 font-semibold">
          {Math.round(animatedLevel)}%
        </span>
      </div>
      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
        <div
          className="bg-gradient-to-r from-blue-500 to-teal-500 h-2 rounded-full transition-all duration-1000 ease-out"
          style={{ width: `${animatedLevel}%` }}
        />
      </div>
    </div>
  );
};