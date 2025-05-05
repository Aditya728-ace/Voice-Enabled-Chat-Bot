import eel
import google.generativeai as genai



genai.configure(api_key='AIzaSyBlk-AzukxmjqorlZD-q18Jq-A-bfmeHqQ')

eel.init('web')

@eel.expose
def get_response(user_input):
    try:
        model = genai.GenerativeModel('gemini-2.0-flash')
        response = model.generate_content(user_input)
        return response.text
    except Exception as e:
        return f"Error: {str(e)}"



users = {'aditya': 'aditya',
         'adi': '123'}

@eel.expose
def validate_login(username, password):
    if username in users and users[username] == password:
        return True
    return False

@eel.expose
def get_chatbot_response(user_input):
    return f"You said: {user_input}"

if __name__ == '__main__':
    eel.start('login.html', port = 8080)


