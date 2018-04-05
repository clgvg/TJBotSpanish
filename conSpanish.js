var TJBot = require('tjbot');
var config = require('./config');
const rl = require('readline-sync');

// these are the hardware capabilities that TJ needs for this recipe
var hardware = ['microphone', 'speaker', 'servo', 'led', 'camera'];

// set up TJBot's configuration
var tjConfig = {
    log: {
        level: 'verbose'
    },
    robot: {
      gender: 'female',
      name: 'lena'
    },
    listen: {
        language: 'es-ES',
    },
    speak: {
        language: 'es-US',
        voice: 'es-US_SofiaVoice'
    }
};
// obtain our credentials from config.js
var credentials = config.credentials;
// obtain user-specific config
var WORKSPACEID = config.conversationWorkspaceId;

// instantiate our TJBot!
var tj = new TJBot(hardware, tjConfig, credentials);

console.log("Trata de decir, \"" + tj.configuration.robot.name + ", presentate\" o \"" + tj.configuration.robot.name + ", que eres?\"");
console.log("Preguntame por los servicios de Watson que uso, por ejemplo: \"" + tj.configuration.robot.name + ", cuales son los servicios de Watson que usas?\" o \"" + " Podrias preguntarme tambien por el hardware que me compone por ejemplo: "+ tj.configuration.robot.name + ", que Hardware tienes?\"");

tj.configuration.robot.name = 'lena';

// listen for utterances with our attentionWord and send the result to
// the Conversation service
tj.listen(function(msg) {
    // check to see if they are talking to TJBot
    if (msg.startsWith(tj.configuration.robot.name)) {
        // remove our name from the message
        var turn = msg.toLowerCase().replace(tj.configuration.robot.name.toLowerCase(), "");
        // send to the conversation service
        tj.converse(WORKSPACEID, turn, function(response) {
            //Save the intent name: 
            var type_intent = response.object.intents[0].intent;
            console.log(response.object);
            //Making something:
            if (type_intent == "intent_name") {
                tj.wave();
                tj.speak(response.description);
                tj.wave();
            }
        });
    }
});