export default function CustomButton({ variant = "primary", size = "md", className = "", children, ...props }) {
  const baseStyles =
    "inline-flex items-center justify-center font-medium rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed"

  const variants = {
    primary: "bg-green-600 text-white hover:bg-green-700 focus:ring-green-500",
    outline:
      "border-2 border-green-600 text-green-600 hover:bg-green-600 hover:text-white bg-transparent focus:ring-green-500",
    secondary: "bg-white text-green-600 hover:bg-gray-100 focus:ring-green-500",
  }

  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-2.5 text-base",
    lg: "px-8 py-3 text-lg",
  }

  const buttonClasses = `${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`

  return (
    <button className={buttonClasses} {...props}>
      {children}
    </button>
  )
}