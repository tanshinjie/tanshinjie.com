'use client';

export const Card = (props) => {
  const className = props.className ?? "";
  return (
    <div className={`shadow-md p-6 xl:p-8 rounded-2xl ${className}`}>
      {props.children}
    </div>
  );
}; 