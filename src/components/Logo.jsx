export default function Logo({ className = 'h-9 w-9' }) {
  return (
    <svg
      viewBox="0 0 64 64"
      fill="none"
      className={className}
      aria-hidden="true"
    >
      <path
        d="M14 49 L32 14 L50 49"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="32" cy="8" r="3.2" fill="#c9a96a" />
    </svg>
  )
}
