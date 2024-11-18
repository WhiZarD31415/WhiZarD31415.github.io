import Page from "./Page.js";

class WelcomePage extends Page {
    constructor(content) {
        super(content);
    }

    render() {
        const contentDiv = document.getElementById('content');
        contentDiv.innerHTML = `<h1>${this.content}</h1>`;
    }
}

export default WelcomePage;