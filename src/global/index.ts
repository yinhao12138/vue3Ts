import { App } from 'vue'
import registerElement from './registerApp-element'

export function globalRegister(app: App): void {
  app.use(registerElement)
}
