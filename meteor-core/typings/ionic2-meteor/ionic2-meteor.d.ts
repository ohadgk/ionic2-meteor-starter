/// <reference path="../angular2.d.ts" />
/// <reference path="ionic-framework/ionic.d.ts" />

declare module 'ionic2-meteor' {
  export function MeteorApp(args?: {}): (cls: core.Type) => any;
}
