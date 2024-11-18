class Page {
    constructor(content) {
        this.content = content;
    }

    render() {
        const contentDiv = document.getElementById('content');
        contentDiv.innerHTML = this.content;
    }
}

export default Page;