function TextField({
  id,
  label,
  type = 'text',
  name,
  autoComplete,
}) {
  return (
    <div>
      <label
        htmlFor={id}
        className="mb-2 block text-base text-texto"
      >
        {label}
      </label>

      <input
        id={id}
        name={name}
        type={type}
        autoComplete={autoComplete}
        className="w-full rounded-md border border-texto/60 bg-fundo px-4 py-3 text-texto focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-destaque"
      />
    </div>
  )
}

export default TextField