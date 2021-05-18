import { Controller } from "stimulus";
import { Sidebar } from '@coreui/coreui';

export default class extends Controller {
  connect() {
    this.sidebar = new Sidebar(this.element);
    if (this.element.id) {
      const ctrls = document.querySelectorAll(`[data-sidebar-id="${this.element.id}"]`);
      ctrls.forEach((elem) => {
        elem.addEventListener('click', e => {
          this.sidebar.toggle();
        });
      });
    }
  }

  open() {
    this.sidebar.open();
  }

  close() {
    this.sidebar.hide();
  }

  disconnect() {
  }
}
