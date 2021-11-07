import { Notify } from "quasar"

export const getLocalTime = (date) => new Date(date || Date.now()).toLocaleString('ru-RU', { timezone: 'Asia/Bishkek' })

export const lockBody = (status) => {
  const body = document.querySelector('body')
  status ? body.classList.add('lock-body') : body.classList.remove('lock-body')
}

export const divideAmount = (num) => {
  if (num) {
    try {
      const numA = num.toString()
      return numA.replace(/(\d{1,3}(?=(?:\d\d\d)+(?!\d)))/g, '$1' + ' ')
    } catch (e) {
      throw 'Function divideAmount got error: \n ' + e
    }
  } else {
    return 0
  }
}
export const showNotification = (type = "positive", msg = "") => {
  Notify.create({
    type,
    message: msg,
    position: "top-right",
  });
};