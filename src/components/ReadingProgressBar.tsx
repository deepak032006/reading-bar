import React, { useEffect, useState } from 'react';

interface ReadingProgressBarProps {
  targetRef: React.RefObject<HTMLElement>;
  color?: string;
  height?: string;
  ariaLabel?: string;
}

const ReadingProgressBar: React.FC<ReadingProgressBarProps> = ({
  targetRef,
  color = '#3b82f6',
  height = '5px',
  ariaLabel = 'Reading progress bar',
}) => {
  const [progress, setProgress] = useState<number>(0);

  const calculateProgress = () => {
    const target = targetRef.current;
    if (!target) return;

    const scrollY = window.scrollY;
    const offsetTop = target.offsetTop;
    const targetHeight = target.offsetHeight;
    const windowHeight = window.innerHeight;
    const scrollDistance = targetHeight - windowHeight;

    if (scrollY < offsetTop) {
      setProgress(0);
    } else if (scrollY >= offsetTop + scrollDistance) {
      setProgress(100);
    } else {
      const percentage = ((scrollY - offsetTop) / scrollDistance) * 100;
      setProgress(Math.min(Math.max(percentage, 0), 100));
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', calculateProgress);
    window.addEventListener('resize', calculateProgress);
    calculateProgress();

    return () => {
      window.removeEventListener('scroll', calculateProgress);
      window.removeEventListener('resize', calculateProgress);
    };
  }, [targetRef]);

  return (
    <div
      role="progressbar"
      aria-label={ariaLabel}
      aria-valuemin={0}
      aria-valuemax={100}
      aria-valuenow={Math.round(progress)}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: `${progress}%`,
        height,
        backgroundColor: color,
        transition: 'width 0.2s ease-out',
        zIndex: 9999,
      }}
    />
  );
};

export default ReadingProgressBar;
