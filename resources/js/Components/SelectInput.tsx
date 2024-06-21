import { forwardRef, InputHTMLAttributes } from "react";

const SelectInput = forwardRef<
  HTMLSelectElement,
  InputHTMLAttributes<HTMLSelectElement>
>(function SelectInput({ className = "", children = null, ...props }, ref) {
  return (
    <select
      {...props}
      ref={ref} // Don't forget to forward the ref
      className={
        "border-gray-300 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-300 focus:border-indigo-500 dark:focus:border-indigo-600 focus:ring-indigo-500 dark:focus:ring-indigo-600 rounded-md shadow-sm " +
        className
      }
    >
      {children}
    </select>
  );
});

export default SelectInput;
