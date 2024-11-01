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

const myPage = new Page("Welcome to my page!");
myPage.render();

document.getElementById('updateButton').addEventListener('click', () => {
    const newContent = prompt("Enter new content:");
    if (newContent) {
        myPage.updateContent(newContent);
    }
});
