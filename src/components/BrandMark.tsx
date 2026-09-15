type IconProps = {
  className?: string;
  strokeWidth?: number;
};

/** Original owl mark: sharp brow-to-ear line for a vigilant, aggressive glare. Outline style matches Heroicons. */
export function BrandMark({ className, strokeWidth = 1.5 }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true" xmlns="http://www.w3.org/2000/svg">
      <path d="M5.7 3.2 8.6 7.7" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
      <path d="M18.3 3.2 15.4 7.7" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
      <path
        d="M8.6 7.7C6.2 9.9 5.2 13.4 6.3 16.7 7.2 19.6 9.3 21.6 12 21.6 14.7 21.6 16.8 19.6 17.7 16.7 18.8 13.4 17.8 9.9 15.4 7.7"
        stroke="currentColor"
        strokeWidth={strokeWidth}
        strokeLinejoin="round"
        strokeLinecap="round"
      />
      <path d="M6.6 10.3 10 11.2" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" />
      <path d="M17.4 10.3 14 11.2" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" />
      <circle cx="9" cy="13.4" r="1.9" stroke="currentColor" strokeWidth={strokeWidth} />
      <circle cx="15" cy="13.4" r="1.9" stroke="currentColor" strokeWidth={strokeWidth} />
      <circle cx="9" cy="13.4" r="0.7" fill="currentColor" />
      <circle cx="15" cy="13.4" r="0.7" fill="currentColor" />
      <path d="M10.9 14.9h2.2L12 17.1Z" fill="currentColor" />
    </svg>
  );
}
