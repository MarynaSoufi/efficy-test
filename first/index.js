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
  constructor() {
    const select = document.getElementById('status');

    oppoStatus.forEach((status) => {
      let option = document.createElement('option');
      option.value = status.K_OPPO_STATUS;
      option.innerText = status.STATUS;
      select.appendChild(option);
    });
  }
  start() {
    const select = document.getElementById('status');
    select.addEventListener('change', function (item) {
      console.log(item);
      const selectedOption = oppoStatus.find(
        (s) => s.K_OPPO_STATUS === +item.target.value
      );
      console.log(selectedOption);
      const input = document.getElementById('success');
      input.value = selectedOption.SUCCESS;
    });

    const btn = document.getElementById('btn');
    const output = document.querySelector('.output');
    btn.addEventListener('click', function (e) {
      const selectedOption = oppoStatus.find(
        (s) => s.K_OPPO_STATUS === +select.value
      );
      output.innerText = JSON.stringify(selectedOption);
    });
    // Start modifying the form elements here!
    // You are allowed to add extra methods, properties or change the constructor of this class
  }
};

const fc = new FormComponent();
fc.start();
