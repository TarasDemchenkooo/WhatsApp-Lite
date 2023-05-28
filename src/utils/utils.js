export const height = (el, height, state) => {
    if (el) {
        const target = el.target ? el.target : el
        target.style.height = height
        target.style.height = `${target.scrollHeight}px`
        state(target.scrollHeight)
    }
}

export const makeid = length => {
    let result = ''
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
    const charactersLength = characters.length
    let counter = 0
    while (counter < length) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength))
        counter += 1
    }
    return result
}