// create a class for the page
class GithubPage {
    // constructor
    constructor() {
        this._github = new Github();
        this._ui = new UI();
    }

    // get user input
    getUserInput() {
        // get the user input from the text box
        const userText = document.getElementById('userText').value;

        // check if the user input is empty
        if (userText !== '') {
            // make http call
            this._github.getUser(userText)
                .then(data => {
                    if (data.profile.message === 'Not Found') {
                        // show alert
                        this._ui.showAlert('User not found', 'alert alert-danger');
                    } else {
                        // show profile
                        this._ui.showProfile(data.profile);
                        this._ui.showRepos(data.repos);
                    }
                })
        } else {
            // clear profile
            this._ui.clearProfile();
        }
    }
}