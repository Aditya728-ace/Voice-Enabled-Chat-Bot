function sendMessage() {
    const userInput = document.getElementById('user_input').value;
    const messagesDiv = document.getElementById('messages');

    messagesDiv.innerHTML += `<div class="message user">USER: ${userInput}</div>`;
    
    eel.get_response(userInput)(function(response) {
        
        messagesDiv.innerHTML += `<div class="message bot">BOT: ${response}</div>`;
        messagesDiv.scrollTop = messagesDiv.scrollHeight;
    });

    // Clear input field
    document.getElementById('user_input').value = '';
}


document.querySelector('.send-button').addEventListener('click', function() {
    const messageInput = document.getElementById('messageInput');
    const messageText = messageInput.value.trim();

    if (messageText) {
        // Append the message to the chat
        const messagesDiv = document.getElementById('messages');
        messagesDiv.innerHTML += `<div class="message user">USER: ${messageText}</div>`;
        messageInput.value = ''; 
        messagesDiv.scrollTop = messagesDiv.scrollHeight; 
    }
});


function displayMessage(message, sender) {
    const messageDiv = document.createElement('div');
    messageDiv.classList.add('message', sender); 

    if (sender === 'user') {
        messageDiv.innerHTML = `<strong>USER: </strong>${message}`;
    } else if (sender === 'bot') {
        messageDiv.innerHTML = `<strong>BOT: </strong>${message}`;
    }

    document.getElementById('messages').appendChild(messageDiv);
    document.getElementById('messages').scrollTop = document.getElementById('messages').scrollHeight; 
}


function speakResponse(response) {
    const speech = new SpeechSynthesisUtterance(response);
    speech.lang = 'en-US';
    window.speechSynthesis.speak(speech);
}


function startVoiceRecognition() {
    const recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)();
    recognition.lang = 'en-US';

    recognition.onresult = function(event) {
        const userInput = event.results[0][0].transcript; 
        displayMessage(userInput, 'user'); 

        
        eel.get_response(userInput)(function(response) {
            displayMessage(response, 'bot'); 

            speakResponse(response);
        });
    };

    recognition.onerror = function(event) {
        console.error('Speech recognition error:', event.error);
    };

    recognition.start();
}
// Function to load chat history
window.onload = function() {
    eel.load_chat_history(username)(function(messages) {
        messages.forEach(function(message) {
            const userMessage = document.createElement("div");
            userMessage.classList.add("user-message");
            userMessage.textContent = `You: ${message[0]}`;
            document.getElementById("chatbox").appendChild(userMessage);

            const botMessage = document.createElement("div");
            botMessage.classList.add("bot-message");
            botMessage.textContent = `Bot: ${message[1]}`;
            document.getElementById("chatbox").appendChild(botMessage);
        });
    });
}