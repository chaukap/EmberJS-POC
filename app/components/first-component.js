import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class CounterComponent extends Component {
    @tracked fullName = "This should display my github user name. If you see this text something failed.";
    @tracked repos = -1;

    constructor() {
        super(...arguments);

        // This is an example of a fetch. It reaches out to the GitHub API, grabs my information,
        // then assigns my full name to the variable 'fullName'. And the number of public repositories
        // I have to the variable 'repos'. You should be able to do something similar
        // by hitting your local project's api endpoint.
        fetch('https://api.github.com/users/chaukap')
            .then(data => data.json())
            .then(data => {
                console.log(data);
                this.fullName = data.name;
                this.repos = data.public_repos;
            });
    }
}