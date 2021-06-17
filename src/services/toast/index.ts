import { showMessage } from 'react-native-flash-message'
import { translate } from '@services/locale'

export const showSuccess = (message: string, props: any) =>
  typeof message === 'string' &&
  showMessage({ message: translate(message), type: 'success', ...props })

export const showError = (message: string, props: any) =>
  typeof message === 'string' &&
  showMessage({ message: translate(message), type: 'danger', ...props })

export const showWarning = (message: string, props: any) =>
  typeof message === 'string' &&
  showMessage({ message: translate(message), type: 'warning', ...props })

export const showInfo = (message: string, props: any) =>
  typeof message === 'string' &&
  showMessage({ message: translate(message), type: 'info', ...props })
