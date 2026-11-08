document.querySelectorAll('.author__photo-switch').forEach((button) => {
  const photo = button.querySelector('img');
  const defaultSource = photo.getAttribute('src');
  const defaultAlt = photo.alt;
  const files = (button.dataset.photoFiles || '').split('|').filter(Boolean)
    .sort((a, b) => a.localeCompare(b, undefined, { numeric: true }));
  const sources = [defaultSource, ...files.map((path) => `${path}?v=${button.dataset.photoVersion}`)];
  let index = 0;

  button.addEventListener('click', () => {
    index = (index + 1) % sources.length;
    photo.src = sources[index];
    photo.alt = `${defaultAlt} — photo ${index + 1} of ${sources.length}`;
  });
});
