import createDOMPurify from 'dompurify'
import jsdom from 'jsdom'
const window = jsdom.jsdom('', {
  features: {
    FetchExternalResources: false,
    ProcessExternalResources: false
  }
}).defaultView;
const DOMPurify = createDOMPurify(window);

export default function sanitizeHTML(text) {
  return { __html: DOMPurify.sanitize(text) }
}
