(() => {
  const links = document.querySelectorAll('[data-image-preview]');
  if (!links.length || typeof HTMLDialogElement === 'undefined') return;

  const dialog = document.createElement('dialog');
  dialog.className = 'image-preview';
  dialog.setAttribute('aria-label', 'Publication image preview');
  const close = document.createElement('button');
  close.type = 'button';
  close.className = 'image-preview__close';
  close.setAttribute('aria-label', 'Close image preview');
  close.textContent = '×';
  const image = document.createElement('img');
  dialog.append(close, image);
  document.body.append(dialog);

  links.forEach(link => link.addEventListener('click', event => {
    if (event.ctrlKey || event.metaKey || event.shiftKey || event.altKey) return;
    event.preventDefault();
    image.src = link.href;
    image.alt = link.querySelector('img').alt;
    dialog.showModal();
    document.documentElement.classList.add('image-preview-open');
  }));
  close.addEventListener('click', () => dialog.close());
  dialog.addEventListener('click', event => {
    if (event.target === dialog) dialog.close();
  });
  dialog.addEventListener('close', () => {
    document.documentElement.classList.remove('image-preview-open');
  });
})();
