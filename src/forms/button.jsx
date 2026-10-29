function Button({
  children,
  type = 'submit',
  disabled = false,
}) {
  return (
    <button
      type={type}
      disabled={disabled}
      className="min-h-12 w-full rounded-md bg-destaque px-4 py-3 text-lg font-medium text-black transition-opacity hover:opacity-90 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-texto disabled:cursor-not-allowed disabled:opacity-50"
    >
      {children}
    </button>
  )
}

export default Button