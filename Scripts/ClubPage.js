import Page from "./Page.js";

class ClubPage extends Page {
    constructor(content) {
        super(content);
    }

    render() {
        const contentDiv = document.getElementById('content');
        contentDiv.innerHTML = this.content;
    }
}

export default ClubPage;