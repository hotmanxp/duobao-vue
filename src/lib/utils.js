  const bodyDisableScroll = () => {
    let bodyEl = document.getElementsByTagName('body')[0]
    bodyEl.style.overflow = 'hidden'
  }
  const bodyEnableScroll = () => {
    let bodyEl = document.getElementsByTagName('body')[0]
    bodyEl.style.overflow = 'auto'
  }

  export default {
    dom: {
      bodyDisableScroll,
      bodyEnableScroll
    }
  }
