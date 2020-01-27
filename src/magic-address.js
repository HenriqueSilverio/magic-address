/**
 * Defines module object.
 */
const MagicAddress = {

  /**
   * Set some default settings.
   */
  DEFAULTS: {
    'API' : 'https://api.postmon.com.br/v1/cep',
    'selectors' : {
      'inputCEP'          : '.js-input-cep',
      'inputAddress'      : '.js-input-address',
      'inputNumber'       : '.js-input-number',
      'inputNeighborhood' : '.js-input-neighborhood',
      'inputCity'         : '.js-input-city',
      'inputState'        : '.js-input-state'
    },
  },

  /**
   * Starts the module.
   * @param object options Custom user options
   */
  start(options = {}) {
    this.settings = Object.assign({}, this.DEFAULTS, options);

    this._setupElements()
        ._bindEvents();

    return this;
  },

  /**
   * Store references to DOM elements.
   * @return object this Reference to module object, to allow chaining methods.
   */
  _setupElements() {
    let element     = null;
    const selectors = this.settings.selectors;

    this.elements = {};

    for(element in selectors) {
      if(selectors.hasOwnProperty(element)) {
        this.elements[element] = document.querySelector(selectors[element]);
      }
    }

    return this;
  },

  /**
   * Bind events to DOM elements.
   * @return object this Reference to module object, to allow chaining methods.
   */
  _bindEvents() {
    const inputCEP = this.elements.inputCEP;

    inputCEP.addEventListener('blur', this.getAddress.bind(this));

    return this;
  },

  /**
   * Query API to get address data.
   * @return object Promise A Promise object which resolves with the Ajax call.
   */
  _queryAPI(cep) {
    return new Promise((resolve, reject) => {
      const request = new XMLHttpRequest();

      request.open('GET', `${this.settings.API}/${cep}`);

      request.addEventListener('load', () => {
        if(4 === request.readyState && 200 === request.status) {
          resolve(JSON.parse(request.response));
        } else {
          reject(Error(request.statusText));
        }
      });

      request.addEventListener('error', () => {
        reject(Error('Unknown Network Error'));
      });

      request.send();
    });
  },

  /**
   * Get CEP from input, sanitize it, and pass to `_queryAPI` method.
   * @return object this Reference to module object, to allow chaining methods.
   */
  getAddress(event) {
    const format = /^[0-9]{8}$/;
    const cep    = event.target.value.replace(/\D/g, '');

    if(cep && format.test(cep)) {
      this._queryAPI(cep)
          .then(this.fillForm.bind(this))
          .catch(this.clearForm.bind(this));

      return this;
    }

    this.clearForm();
  },

  /**
   * Fills form fields with address data.
   * @param object data The server response, with address details.
   * @return object this Reference to module object, to allow chaining methods.
   */
  fillForm(data) {
    const elements = this.elements;

    elements.inputAddress.value      = data.logradouro || '';
    elements.inputNeighborhood.value = data.bairro || '';
    elements.inputCity.value         = data.cidade;
    elements.inputState.value        = data.estado;

    return this;
  },

  /**
   * Clear input values.
   * @return object this Reference to module object, to allow chaining methods.
   */
  clearForm() {
    let element    = null;
    const elements = this.elements;

    for(element in elements) {
      if(elements.hasOwnProperty(element)) {
        elements[element].value = '';
      }
    }

    return this;
  }

};

/**
 * Exports module.
 */
export default MagicAddress;
