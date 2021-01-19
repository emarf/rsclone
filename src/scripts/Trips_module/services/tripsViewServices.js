import createDOMElement from '../../services/createDOMElement.js';

const services = {
  createNewTripBtn() {
    const button = createDOMElement('button', 'new-trip-btn btn', 'New Trip');
    createDOMElement('i', 'material-icons left', 'add', button);

    return button;
  },

  fillModalNewTrip(modal) {
    const modalWindow = modal;

    const modalContent = `<div class="modal-content">
                            <i class="material-icons close" id="close-modal-btn">close</i>
                            <h4>Create New Trip</h4>
                            <form id="new-trip-form">
                              <div class="input-field">
                                <i class="material-icons prefix">wysiwyg</i>
                                <input id="trip-name" type="text" required>
                                <label for="trip-name">Trip Name</label>
                              </div>
                              <div class="input-field">
                                <i class="material-icons prefix">place</i>
                                <input id="first-destination" class="autocomplete" type="text" required>
                                <label for="first-destination">Enter Your First Destination</label>
                              </div>
                              <div class="input-field">
                                <i class="material-icons prefix">today</i>
                                <input id="start-date" type="text" class="datepicker">
                                <label for="start-date">Start Date</label>
                              </div>
                              <div class="input-field">
                                <i class="material-icons prefix">today</i>
                                <input id="end-date" type="text" class="datepicker">
                                <label for="end-date">End Date</label>
                              </div>
                              <button id="new-trip-submit" class="btn waves-effect waves-light" type="submit" name="action">
                                Create New Trip
                                <i class="material-icons right">send</i>
                              </button>
                            </form>
                          </div>`;

    modalWindow.innerHTML = modalContent;
  },

  fillModalNotAuthorized(modal) {
    const modalWindow = modal;

    const modalContent = `<div class="modal-content">
                            <h4>You a not authorized yet!</h4>
                            <p>To be able to add new trips, please sing in</p>
                            <i class="material-icons close" id="close-modal-btn">close</i>
                            <!-- <h4>Authentication</h4>
                            <form id="auth-form">
                              <div class="input-field">
                                <input id="email" class="validate" type="email" required>
                                <label for="email">Email</label>
                              </div>
                              <div class="input-field">
                                <input id="password" class="validate" type="password" required>
                                <label for="password">Password</label>
                              </div>
                              <button id="auth-btn" class="btn waves-effect waves-light" type="submit">
                                Enter
                                <i class="material-icons right">send</i>
                              </button>
                            </form> -->
                          </div>`;

    modalWindow.innerHTML = modalContent;
  },

  fillModalAddDestination(modal) {
    const modalWindow = modal;

    const modalContent = `<div class="modal-content">
                            <i class="material-icons close" id="close-modal-btn">close</i>
                            <h4>Add Destination</h4>
                            <form id="new-destination-form">
                              <div class="input-field">
                                <i class="material-icons prefix">place</i>
                                <input id="first-destination" class="autocomplete" type="text" required>
                                <label for="first-destination">Add Destination</label>
                              </div>
                              <button id="new-trip-submit" class="btn waves-effect waves-light" type="submit" name="action">
                                Add Destination
                                <i class="material-icons right">send</i>
                              </button>
                            </form>
                          </div>`;

    modalWindow.innerHTML = modalContent;
  },

  fillModalRemoveTrip(modal) {
    const modalWindow = modal;

    const modalContent = `<div class="modal-content" id="remove-trip-modal">
                            <h4>Are you sure you want remove this trip?</h4>
                            <p>If you remove the trip, all settings will be permanently deleted!</p>
                            <i class="material-icons close" id="close-modal-btn">close</i>
                            <button id="cancel-remove-trip" class="btn waves-effect waves-light">Cancel</button>
                            <button id="remove-trip-permanently" class="btn waves-effect waves-light" type="submit">
                              Remove
                              <i class="material-icons left">delete</i>
                            </button>
                          </div>`;

    modalWindow.innerHTML = modalContent;
  }
};

export default services;
