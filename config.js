/*
User-specific configuration
    ** IMPORTANT NOTE ********************
    * Please ensure you do not interchange your username and password.
    * Hint: Your username is the lengthy value ~ 36 digits including a hyphen
    * Hint: Your password is the smaller value ~ 12 characters
*/

// replace with the workspace identifier of your conversation
exports.conversationWorkspaceId = '';

// Create the credentials object for export
exports.credentials = {};

// Watson Conversation
// https://www.ibm.com/watson/developercloud/conversation.html
exports.credentials.conversation = {
	password: '',
	username: '' //Public BluemixCloud
};

// Watson Speech to Text
// https://www.ibm.com/watson/developercloud/speech-to-text.html
exports.credentials.speech_to_text = {
	password: '',
	username: '' //Public BluemixCloud
};

// Watson Text to Speech
// https://www.ibm.com/watson/developercloud/text-to-speech.html
exports.credentials.text_to_speech = {
	password: '',
	username: '' //Public BluemixCloud
};

// Watson Visual Recognition
//https://www.ibm.com/watson/developercloud/visual-recognition/api/v3/
exports.credentials.visual_recognition = {
	api_key: "",
	version_date: ''
}; 