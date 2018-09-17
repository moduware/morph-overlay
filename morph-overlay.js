import '@polymer/morph-element/morph-element.js';
import { PolymerElement } from '@polymer/polymer/polymer-element.js';
import { html } from '@polymer/polymer/lib/utils/html-tag.js';
/**
 * `morph-overlay`
 *  Overlay that morphs for current mobile OS
 *
 * @customElement
 * @polymer
 * @demo morph-overlay/demo/index.html
 */
class MorphOverlay extends MorphElement(PolymerElement) {
  static get template() {
    return html`
    <style>

      /**
      *Common styling for both android and ios
      * */
      :host {
        position: fixed;
        display: none;
        width: 100%;
        height:100%;
        top:0;
        right:0;
        left:0;
        bottom:0;
        z-index: 5999;

        --ios-background-color: rgba(0,0,0,0);
        --android-background-color: rgba(0,0,0,0.2);
      }

      /**
      *IOS styling for overlay open status
      * */
      :host([platform="ios"][open]) {
        display: block;
        background-color: var(--ios-background-color);
      }

      /**
      *Android styling for overlay open status
      * */
      :host([platform="android"][open]) {
        display: block;
        background-color: var(--android-background-color);
      }

    </style>
`;
  }

  static get is() { return 'morph-overlay'; }
  static get properties() {
    return {
      open: {
        type: Boolean,
        reflectToAttribute: true
      }
    };
  }
}

window.customElements.define(MorphOverlay.is, MorphOverlay);
