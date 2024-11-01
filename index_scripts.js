import WelcomePage from "./classes/Welcome/WelcomePage";

const welcomePage = new WelcomePage("This is a welcome!");
welcomePage.render();

/* 
document.getElementById('updateButton').addEventListener('click', () => {
    const newContent = prompt("Enter new content:");
    if (newContent) {
        myPage.updateContent(newContent);
    }
});
 */