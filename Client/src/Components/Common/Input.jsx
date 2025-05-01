import React from 'react';

const Input = React.forwardRef(({ type = 'text', placeholder, className, ...props }, ref) => {
  return (
    <input
      className={className}
      ref={ref}
      type={type}
      placeholder={placeholder}
      {...props}
    />
  );
});

export default Input;
