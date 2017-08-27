class MessageSvc {
  constructor (initialConfig) {
    this.config = initialConfig || {
      showFlag: true,
      notices: []
    }
  }
  show (msgs) {
    this.config.showFlag = true
    this.config.notices = [...msgs]
  }
}
const messageSvc = new MessageSvc()

export default messageSvc
