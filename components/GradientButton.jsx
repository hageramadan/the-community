'use client';

export default function GradientButton({
  children,
  onClick,
  className = '',
  as = 'button',
  href,
  ...props
}) {
  const base = `btn-gradient inline-flex items-center justify-center gap-2 px-8 py-3  shadow-lg shadow-primary/20 ${className}`;

  if (as === 'a') {
    return (
      <a href={href} className={base} {...props}>
        {children}
      </a>
    );
  }

  return (
    <button onClick={onClick} className={base} {...props}>
      {children}
    </button>
  );
}