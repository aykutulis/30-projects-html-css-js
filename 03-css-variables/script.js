const inputs = document.querySelectorAll('.controls input');

function handleUpdate() {
  const property = `--${this.name}`;
  const suffix = this.dataset.sizing || '';
  const value = this.value + suffix;

  document.documentElement.style.setProperty(property, value);
}

inputs.forEach((input) => input.addEventListener('change', handleUpdate));
inputs.forEach((input) => input.addEventListener('mousemove', handleUpdate));
