import { LitElement, html, css } from 'lit-element';

class LitToast extends LitElement {
  static get styles() {
    return css`
      :host {
        display: block;
      }
    `;
  }

  static get properties() {
    return {};
  }

  constructor() {
    super();
  }

  render() {
    return html`
      <slot></slot>
    `;
  }

  show() {
    console.log('calling show');
  }
}

customElements.define('lit-toast', LitToast);