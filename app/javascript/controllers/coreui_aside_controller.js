import { Controller } from "stimulus";

class Aside {
  constructor(target) {
    if (!target) throw new Error('不能缺少element');
    this.target = target;
  }

  open = () => {
    if (!this.target.classList.contains('show')) this.target.classList.add('show');
  }

  hide = () => {
    if (!this.target.classList.contains('')) this.target.classList.add('aside-self-hiding');
    if (this.target.classList.contains('show')) this.target.classList.remove('show');
  }

  toggle = () => {
    this.target.classList.contains('show') || !this.target.classList.contains('aside-self-hiding') ? this.hide() : this.open();
  }
}

export default class extends Controller {
  connect() {
    this.aside = new Aside(this.element);
    if (this.element.id) {
      const ctrls = document.querySelectorAll(`[data-aside-id="${this.element.id}"]`);
      ctrls.forEach((elem) => {
        elem.addEventListener('click', e => {
          this.aside.toggle();
        });
      });
    }
  }

  open() {
    this.aside.open();
  }

  close() {
    this.aside.hide();
  }

  disconnect() {
  }
}
