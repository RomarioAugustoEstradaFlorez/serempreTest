const viewPortSize = () => {
  var viewportwidth;
  var viewportheight;

  //Standards compliant browsers (mozilla/netscape/opera/IE7)
  if (typeof window.innerWidth != 'undefined') {
    viewportwidth = window.innerWidth,
      viewportheight = window.innerHeight
  }

  // IE6
  else if (typeof document.documentElement != 'undefined'
    && typeof document.documentElement.clientWidth !=
    'undefined' && document.documentElement.clientWidth != 0) {
    viewportwidth = document.documentElement.clientWidth,
      viewportheight = document.documentElement.clientHeight
  }

  //Older IE
  else {
    viewportwidth = document.getElementsByTagName('body')[0].clientWidth,
      viewportheight = document.getElementsByTagName('body')[0].clientHeight
  }
  return {
    width: viewportwidth,
    height: viewportheight
  };
}
export default viewPortSize