class Modal {
    constructor() {
        this.modal = document.querySelector('.modal');
        this.closeButton = document.querySelector('.modal_close');
        this.overlay = document.createElement('div');
        this.overlay.className = 'modal-overlay';
        this.triggered = false;

        window.addEventListener('scroll', () => this.checkScroll());

        this.closeButton.addEventListener('click', () => this.closeModal());

        this.overlay.addEventListener('click', () => this.closeModal());

        setTimeout(() => this.openModal(), 10000);
    }

    checkScroll() {
        if (!this.triggered && window.innerHeight + window.scrollY >= document.body.offsetHeight) {
            this.openModal();
            this.triggered = true;

            window.removeEventListener('scroll', () => this.checkScroll());
        }
    }

    openModal() {
        this.modal.style.display = 'block';
        document.body.appendChild(this.overlay);
    }

    closeModal() {
        this.modal.style.display = 'none';
        if (this.overlay.parentNode === document.body) {
            document.body.removeChild(this.overlay);
        }
    }
}

const modal = new Modal();
