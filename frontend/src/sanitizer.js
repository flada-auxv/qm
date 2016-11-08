import sanitizer from 'sanitizer'

export default function sanitizeHTML(text) {
  return { __html: sanitizer.sanitize(text) }
}
