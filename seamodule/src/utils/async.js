export function wait (timeout = 1000) {
  return new Promise((resolve) => window.setTimeout(resolve, timeout))
}