export function fetchData() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ title: 'Server side fetched title' })
    }, 0)
  })
}
