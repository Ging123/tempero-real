function hideScrollImageOnScroll() {
  const message = document.querySelector<HTMLElement>('.scroll-down-message')!;
  const howMuchScrollDown = window.scrollY;
  if(howMuchScrollDown > 0) return hideMessage(message);
  showMessage(message);
}

const hideMessage = (message:HTMLElement) => message.style.opacity = '0';

const showMessage = (message:HTMLElement) => message.style.opacity = '1';

export default hideScrollImageOnScroll;