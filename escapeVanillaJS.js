document.addEventListener("DOMContentLoaded", () => {
/*------------------------------------------------------Room 1----------------------------------------------------------------------*/
    // 🪲 Bug: Incorrect ID used for attaching the event listener
    //Button Id update
    document.getElementById("solveRoom1").addEventListener("click", () => {
        fetch('books.json') 
            .then(response => response.json())
            .then(books => {
                const mostRecentBook = findMostRecentBook(books);
                // 🪲 Bug: Incorrect element ID
                //Paragraph Id update
                document.getElementById("room1Result").textContent = `The key to the next room is: ${mostRecentBook.title}`;
            });
    });

/*------------------------------------------------------Room 2----------------------------------------------------------------------*/
    //Add async to anonymous function
    document.getElementById("solveRoom2").addEventListener("click", async () => {
        const jsConcepts = new Set(['closure', 'scope', 'hoisting']);
        // 🪲 Bug: What's mssing from JS concepts?
        const reactConcepts = new Set(['components', 'jsx', 'hooks', 'async']);
        // 🪲 Bug: Incorrect function call
        const commonConcepts = findIntersection(jsConcepts, jsConcepts);
        document.getElementById("room2Result").textContent = `The code to unlock the door is: ${Array.from(commonConcepts).join(', ')}`;
    });

/*------------------------------------------------------Room 3----------------------------------------------------------------------*/
    // 🪲 Bug: Asynchronous function ?
    document.getElementById("solveRoom3").addEventListener("click", () => {
        fetch('directions.json') 
            .then(response => response.json())
            .then(directions => {
                navigateLabyrinth(directions)
                    .then(message => {
                        // 🪲 Bug: Incorrect method
                        document.getElementById("room3Result").innerHTML = message;
                    });
            });
    });
});


/*------------------------------------------------------Methods----------------------------------------------------------------------*/
function findMostRecentBook(books) {
    // 🪲 Bug: Logic error
    return books.reduce((mostRecent, book) => new Date(book.published) < new Date(mostRecent.published) ? book : mostRecent);
}

function findIntersection(setA, setB) {
    // 🪲 Bug: Incorrect logic
    const intersection = new Set([...setA]);
    return intersection;
}

async function navigateLabyrinth(directions) {
    for (let direction of directions) {
        // 🪲 Bug: No delay
        new Promise(resolve => setTimeout(resolve, 1000));
        console.log(`Navigating: ${direction.step}`);
    }
    return "Congratulations! You've mastered the essentials of Vanilla JavaScript. Welcome to the world of React, where you'll build powerful and dynamic web applications. Let's dive in!";
}

