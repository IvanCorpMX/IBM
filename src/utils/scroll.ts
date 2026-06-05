export const scrollToSection = (id: string) => {
  if (window.location.pathname !== '/') {
    window.location.href = '/#' + id;
    return;
  }
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
};
