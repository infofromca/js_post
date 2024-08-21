// This is a JavaScript module that is loaded on demand. It can export any number of
// functions, and may import other JavaScript modules if required.

export function showPrompt(message) {
  return prompt(message, 'Type anything here');
}
export function attachPostButtonClick(url, buttonSelector) {
    Array.from(document.querySelectorAll(buttonSelector)).forEach((button) => {
        button.addEventListener('click', async (event) => {
            event.preventDefault();
            const formData = new FormData();
            formData.append('name', 'John Doe');
            formData.append('email', 'john.doe@example.com');
            formData.append('message', 'Hello, this is a message!');
            await submitFormData(url, formData);
        });
    });
}
function submitFormData(url, formData) {
    fetch(url, {
        method: 'POST',
        body: formData
    })
        .then(response => response.json())
        .then(data => {
            // Handle the response from the server
            console.log(data);
        })
        .catch(error => {
            // Handle any errors
            console.error(error);
        });
}
export function attachTestButtonClick(url, buttonSelector) {
    Array.from(document.querySelectorAll(buttonSelector)).forEach((button) => {
        button.addEventListener('click', async (event) => {
            event.preventDefault();
            await makePostRequest(url);
        });
    });
}
async function makePostRequest(url) {
    // const url = 'https://your-api-endpoint.com/api/resource';
    const data = {
        email: 'value1',
        key2: 'value2'
    };

    try {
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        });

        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

        const responseData = await response.json();
        console.log('Success:', responseData);
    } catch (error) {
        console.error('Error:', error);
    }
}