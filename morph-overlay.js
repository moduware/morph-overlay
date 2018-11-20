// import { MorphElement } from '@moduware/morph-element/morph-element.js';
// import { PolymerElement, html } from '@polymer/polymer/polymer-element.js';

import { LitElement, html } from '@polymer/lit-element';
import { getPlatform } from '/src/morph-element.js';


/**
 * `morph-overlay`
 *  Overlay that morphs for current mobile OS
 *
 * @customElement
 * @extends HTMLElement
 * @demo morph-overlay/demo/index.html
 */
export class MorphOverlay extends LitElement {
  render() {
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
      platform: { String },
      open: {
        type: Boolean,
        reflect: true
      }
    };
  }

  /**
   * LitElement lifecycle called once before the first updated().
   */
  firstUpdated() {
    super.firstUpdated();
    // check first if platform attribute is assinged before auto detecting platform using getPlatform()
    if(!this.hasAttribute('platform')) {
      this.platform = getPlatform();
    }
  }
}

window.customElements.define(MorphOverlay.is, MorphOverlay);
