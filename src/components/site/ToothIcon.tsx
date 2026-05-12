export function ToothIcon({ className }: { className?: string }) {
  return (
    <svg 
      viewBox="0 0 24 24" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg" 
      className={className}
    >
      <path 
        d="M12 2C9.5 2 7 3.5 6 6C5 8.5 4.5 11 5 13.5C5.5 16 7 19 8.5 20.5C9.5 21.5 10.5 22 12 22C13.5 22 14.5 21.5 15.5 20.5C17 19 18.5 16 19 13.5C19.5 11 19 8.5 18 6C17 3.5 14.5 2 12 2Z" 
        fill="currentColor"
      />
      <path 
        d="M12 2C13 2 14.5 3 15 5C15.5 7 15.5 9 15 11C14.5 13 13.5 15 12 16C10.5 15 9.5 13 9 11C8.5 9 8.5 7 9 5C9.5 3 11 2 12 2Z" 
        fill="white" 
        fillOpacity="0.3"
      />
    </svg>
  );
}
