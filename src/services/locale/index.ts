import { Platform, NativeModules } from 'react-native'
import { enUS, ptBR } from 'date-fns/locale'
import I18n from 'i18n-js'
import en from './en-US'
import pt from './pt-BR'

const normalizeTranslate = {
  en_US: 'en_US',
  pt_BR: 'pt_BR',
  en: 'en_US',
  pt_US: 'pt_BR',
}

const getLanguageByDevice = () =>
  Platform.OS === 'ios'
    ? NativeModules.SettingsManager.settings.AppleLocale
    : NativeModules.I18nManager.localeIdentifier

I18n.translations = {
  en_US: en,
  pt_BR: pt,
}

const setLanguageToI18n = () => {
  const language = getLanguageByDevice()
  const translateNormalize = normalizeTranslate[language]
  const iHaveThisLanguage = I18n.translations.hasOwnProperty(translateNormalize)
  console.log(iHaveThisLanguage)
  iHaveThisLanguage
    ? (I18n.locale = translateNormalize)
    : (I18n.defaultLocale = 'en_US')

  if (!iHaveThisLanguage) I18n.locale = 'pt_BR'
}

setLanguageToI18n()

export const translate = (key: string) => {
  if (I18n.t(key).includes('missing'))
    console.info(`missing translation of this key -> ${key}`)
  return I18n.t(key).includes('missing') ? key : I18n.t(key)
}

export const getDefaultLocale = () => {
  const language = getLanguageByDevice()
  const translateNormalize = normalizeTranslate[language]
  return translateNormalize?.includes('US') ? enUS : ptBR
}
