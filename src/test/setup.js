import '@testing-library/jest-dom/vitest'
import { afterEach, vi } from 'vitest'
import { cleanup } from '@testing-library/react'

afterEach(() => {
  cleanup()
})

class IntersectionObserverMock {
  constructor(callback) {
    this.callback = callback
  }

  observe(target) {
    this.callback([{ isIntersecting: true, intersectionRatio: 1, target }])
  }

  unobserve() {}

  disconnect() {}
}

vi.stubGlobal('IntersectionObserver', IntersectionObserverMock)

Object.defineProperty(window, 'matchMedia', {
  configurable: true,
  value: vi.fn().mockImplementation((query) => ({
    matches: false,
    media: query,
    onchange: null,
    addEventListener: vi.fn(),
    removeEventListener: vi.fn(),
  })),
})

Element.prototype.scrollIntoView = vi.fn()
window.requestAnimationFrame = vi.fn((callback) => {
  callback()
  return 1
})
window.cancelAnimationFrame = vi.fn()

HTMLDialogElement.prototype.showModal = function showModal() {
  this.setAttribute('open', '')
}

HTMLDialogElement.prototype.close = function close() {
  this.removeAttribute('open')
}
