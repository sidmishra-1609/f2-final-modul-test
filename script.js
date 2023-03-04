const createPostBtn = document.getElementById('btn');
const createPostDiv = document.getElementById('create-post');
const cancelBtn = document.getElementById('cancel-btn');
const closeBtn = document.getElementById('close-btn');
const now = new Date();

createPostBtn.addEventListener('click', () => {
    createPostDiv.style.display = 'block';
});

cancelBtn.addEventListener('click', () => {
    createPostDiv.style.display = 'none';
});

closeBtn.addEventListener('click', () => {
    createPostDiv.style.display = 'none';
});

const publishBtn = document.getElementById('publish-btn');

publishBtn.addEventListener('click', () => {
    // Get the values of the title and blog post content inputs
    const title = document.getElementById('post-title').value;
    const content = document.getElementById('blog-post').value;

    // Create a new div element to hold the blog post
    const postDiv = document.createElement('div');
    postDiv.classList.add('post');

    // Create a h3 element for the title and append it to the post div
    const titleElem = document.createElement('h3');
    titleElem.innerText = title;
    titleElem.style.padding = '10px';
    postDiv.appendChild(titleElem);

    // Create a p element for the content and append it to the post div
    const contentElem = document.createElement('p');
    contentElem.innerText = content;
    contentElem.style.padding = '10px';
    postDiv.appendChild(contentElem);

    // Time updation when the post is created
    const dateString = now.toLocaleDateString();
    const timeString = now.toLocaleTimeString();
    const dateTimeString = `Created At - ${dateString} at ${timeString}`;


    // Create a span element to hold the date and time
    const dateTimeElem = document.createElement('span');
    dateTimeElem.innerText = dateTimeString;
    dateTimeElem.style.float = 'right';
    dateTimeElem.style.color = '#808080';
    dateTimeElem.style.padding = '10px';
    postDiv.appendChild(dateTimeElem);


    // Create the edit button and append it to the post div
    const editBtn = document.createElement('button');
    editBtn.innerText = 'Edit Post';
    editBtn.style.backgroundColor = 'black';
    editBtn.style.color = 'white';
    editBtn.style.height = '30px';
    editBtn.style.width = '100px';
    editBtn.style.marginLeft = '10px';
    editBtn.style.marginTop = '10px';
    editBtn.style.border = '1px solid white';
    editBtn.addEventListener('click', () => {
        // Create a modal for editing the post
        const modal = document.createElement('div');
        modal.classList.add('modal');
    
        // Add close button to the modal
        const closeBtn = document.createElement('div');
        closeBtn.innerHTML = 'X';
        closeBtn.style.position = 'absolute';
        closeBtn.style.top = '10px';
        closeBtn.style.right = '10px';
        closeBtn.style.color='red';
        closeBtn.style.cursor='pointer';
        closeBtn.addEventListener('click', () => {
            modal.style.display = 'none';
        });
        modal.appendChild(closeBtn);
    
        // Add heading to the modal
        const heading = document.createElement('h2');
        heading.innerText = 'Edit a Post';
        modal.appendChild(heading);
    
        // Create input elements for the title and content
        const titleInput = document.createElement('input');
        titleInput.type = 'text';
        titleInput.style.padding = '10px';
        titleInput.style.marginTop='10px';
        titleInput.style.border='1px solid black';
        titleInput.value = title;
        modal.appendChild(titleInput);
    
        const contentInput = document.createElement('textarea');
        contentInput.value = content;
        contentInput.style.padding = '10px';
        contentInput.style.marginTop='10px';
        contentInput.style.border='1px solid black';
        modal.appendChild(contentInput);
    
        // Create a save button
        const saveBtn = document.createElement('button');
        saveBtn.innerText = 'Save';
        
        saveBtn.style.backgroundColor = 'black';
        saveBtn.style.color = 'white';
        saveBtn.style.height = '30px';
        saveBtn.style.width = '100px';
        saveBtn.style.marginTop='10px';
        saveBtn.style.marginRight='10px';
        saveBtn.style.border = '1px solid white';
        saveBtn.addEventListener('click', () => {
            // Update the title and content of the post being edited
            titleElem.innerText = titleInput.value;
            contentElem.innerText = contentInput.value;
            dateTimeElem.innerText = `Edited At - ${now.toLocaleDateString()} at ${now.toLocaleTimeString()}`;
    
            // Hide the modal
            modal.style.display = 'none';
        });
        
        // Create a delete button
        const deleteBtn = document.createElement('button');
        deleteBtn.innerText = 'Delete';
        deleteBtn.style.backgroundColor = 'red';
        deleteBtn.style.color = 'white';
        deleteBtn.style.height = '30px';
        deleteBtn.style.width = '100px';
        deleteBtn.style.marginTop='10px';
        deleteBtn.style.border = 'none';
        deleteBtn.addEventListener('click', () => {
            // Remove the post from the document
            postElem.remove();
            // Hide the modal
            modal.style.display = 'none';
        });
    
        const buttonDiv = document.createElement('div');
        buttonDiv.appendChild(saveBtn);
        buttonDiv.appendChild(deleteBtn);
        modal.appendChild(buttonDiv);
    
        // Add the modal to the document body
        document.body.appendChild(modal);
    
        // Add CSS styling to the modal
        modal.style.display = 'grid';
        modal.style.position = 'fixed';
        modal.style.top = '50%';
        modal.style.left = '50%';
        modal.style.height='56vh';
        modal.style.width='550px';
        modal.style.transform = 'translate(-50%, -50%)';
        modal.style.backgroundColor = 'white';
        modal.style.border = '1px solid black';
        modal.style.padding = '20px';
        modal.style.zIndex='999';
        modal.style.border='2px solid red';
        
    });
    


    postDiv.appendChild(editBtn);

    // Create the delete button and append it to the post div
    const deleteBtn = document.createElement('button');
    deleteBtn.innerText = 'Delete Post';
    deleteBtn.style.backgroundColor = 'black';
    deleteBtn.style.color = 'white';
    deleteBtn.style.height = '30px';
    deleteBtn.style.width = '100px';
    deleteBtn.style.border = '1px solid white';
    deleteBtn.style.marginLeft = '20px';
    deleteBtn.addEventListener('click', () => {
        postDiv.remove();
        // Logic to handle delete button click goes here
    });
    postDiv.appendChild(deleteBtn);

    if (title.trim() === '' || content.trim() === '') {
        alert('Please fill in both the title and content fields before submitting');
        return;
    }

    // Append the post div to the "blog-read" div
    const blogReadDiv = document.getElementById('blog-read');
    blogReadDiv.appendChild(postDiv);

    // Hide the "create post" form
    const createPostDiv = document.getElementById('create-post');
    createPostDiv.style.display = 'none';
    document.getElementById('post-title').value = '';
    document.getElementById('blog-post').value = '';
});