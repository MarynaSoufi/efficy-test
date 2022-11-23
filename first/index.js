const oppoStatus = [
  {
    K_OPPO_STATUS: 1,
    STATUS: '1. Initial Contact',
    SUCCESS: 0,
  },
  {
    K_OPPO_STATUS: 2,
    STATUS: '2. Demonstration',
    SUCCESS: 25,
  },
  {
    K_OPPO_STATUS: 3,
    STATUS: '3. Proposal',
    SUCCESS: 50,
  },
  {
    K_OPPO_STATUS: 4,
    STATUS: '4. Negotiation',
    SUCCESS: 75,
  },
  {
    K_OPPO_STATUS: 5,
    STATUS: '5. Order',
    SUCCESS: 100,
  },
];

const FormComponent = class {
  selector = document.getElementsByName('status')[0];
  input = document.getElementsByName('success')[0];
  submitBtn = document.querySelector('button');
  output = document.querySelector('.output');

  constructor() {
    this.input.setAttribute('readonly', true);

    oppoStatus.forEach((status) => {
      let option = document.createElement('option');
      option.value = status.K_OPPO_STATUS;
      option.innerText = status.STATUS;
      this.selector.appendChild(option);
    });
  }
  start() {
    this.selector.addEventListener('change', (item) => {
      const selectedOption = this.getInfoByStatus(item.target.value);
      this.input.value = selectedOption.SUCCESS;
    });

    this.submitBtn.addEventListener('click', (e) => {
      e.preventDefault();

      const selectedOption = this.getInfoByStatus(this.selector.value);

      this.output.innerText = JSON.stringify({
        status: selectedOption.K_OPPO_STATUS,
        success: selectedOption.SUCCESS,
      });
    });
  }

  getInfoByStatus(status) {
    return oppoStatus.find((s) => s.K_OPPO_STATUS === +status);
  }
};

const fc = new FormComponent();
fc.start();
