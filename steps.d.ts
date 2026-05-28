/// <reference types='codeceptjs' />
type steps_file = typeof import('./steps_file.js').default;
declare namespace CodeceptJS {
  interface SupportObject { I: I, current: any }
  interface Methods extends Appium {}
  interface I extends ReturnType<steps_file>, Appium {}
  namespace Translation {
    interface Actions {}
  }
}
