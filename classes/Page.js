class Page {
    constructor(content) {
        this.content = content;
    }

    render() {
        const contentDiv = document.getElementById('content');
        contentDiv.innerHTML = this.content;
    }

    updateContent(newContent) {
        this.content = newContent;
        this.render();
    }
}

export default Page;