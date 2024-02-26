export function isScrolledIntoView(el: any) {
  if (!el) {
    return;
  }
  var rect = el.getBoundingClientRect();
  var elemTop = rect.top;
  var elemBottom = rect.bottom;

  // Only completely visible elements return true:
  var isVisible = elemTop >= 0 && elemBottom <= window.innerHeight;
  //var isVisible = elemTop < window.innerHeight && elemBottom >= 0;
  // Partially visible elements return true:
  //var isVisible = elemTop < window.innerHeight && elemBottom >= 20;
  return isVisible;
}
