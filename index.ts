import * as Discord from "discord.js";
import * as ConfigFile from "./config";
import * as db from "quick.db";
import { IBotCommand } from "./api";
import { cpus } from "os";
import { isNull } from "util";


const client: Discord.Client = new Discord.Client();

export var commands: IBotCommand[] = [];

loadCommands(`${__dirname}/commands`)


client.on("ready", ()=>{
    
    console.log("Ready to go!");
    
    client.user.setActivity("for !help", {type: "WATCHING"});

    const profChannel = client.channels.find(c => c.id === '609201671171735592');
    (profChannel as Discord.TextChannel).fetchMessages({ limit: 1 }).then(collected => console.log('Fetched ' + collected.size + ' message(s).'))

    //let newMember = Discord
    let noUsers = client.users.array();
    for(let i = 0; i < noUsers.length; i++){
            
        db.set(noUsers[i].id, {ranks: []})
        //db.delete(noUsers[i].id)
        
        
    }
})


client.on("messageReactionAdd", (messageReaction, user) => {
    const message = messageReaction.message;
    const channel = message.guild.channels.find(channel => channel.name === 'professions');
    const member = messageReaction.message.guild.members.find(member => member.id === user.id)
     
    if(member.user.bot){ return }

    const alch = message.guild.roles.find(role => role.name === 'Alchemy')
    const herb = message.guild.roles.find(role => role.name === 'Herbalism')
    const min = message.guild.roles.find(role => role.name === 'Mining')
    const engi = message.guild.roles.find(role => role.name === 'Engineering')
    const skin = message.guild.roles.find(role => role.name === 'Skinning')
    const lw = message.guild.roles.find(role => role.name === 'Leatherworking')
    const ench = message.guild.roles.find(role => role.name === 'Enchanting')
    const tail = message.guild.roles.find(role => role.name === 'Tailoring')
    const bs = message.guild.roles.find(role => role.name === 'Blacksmithing')
    

    if(['alch',
        'herb', 
        'min', 
        'engi', 
        'skin', 
        'lw', 
        'ench', 
        'tail', 
        'bs'].includes(messageReaction.emoji.name) && message.channel.id === channel.id)
        {
            console.log('included!')
            switch (messageReaction.emoji.name) {
                case 'alch':
                    member.addRole(alch).catch(console.error)
                    break;
                case 'herb':
                    member.addRole(herb).catch(console.error)
                    break;
                case 'min':
                    member.addRole(min).catch(console.error)
                    break;
                case 'engi':
                    member.addRole(engi).catch(console.error)
                    break;
                case 'bs':
                    member.addRole(bs).catch(console.error)
                    break;
                case 'skin':
                    member.addRole(skin).catch(console.error)
                    break;
                case 'lw':
                    member.addRole(lw).catch(console.error)
                    break;
                case 'ench':
                    member.addRole(ench).catch(console.error)
                    break;
                case 'tail':
                    member.addRole(tail).catch(console.error)
                    break;

            }
        }
})

client.on("messageReactionRemove", (messageReaction, user) => {
    const message = messageReaction.message;
    const channel = message.guild.channels.find(channel => channel.name === 'professions');
    const member = messageReaction.message.guild.members.find(member => member.id === user.id)
     
    if(member.user.bot){ return }

    const alch = message.guild.roles.find(role => role.name === 'Alchemy')
    const herb = message.guild.roles.find(role => role.name === 'Herbalism')
    const min = message.guild.roles.find(role => role.name === 'Mining')
    const engi = message.guild.roles.find(role => role.name === 'Engineering')
    const skin = message.guild.roles.find(role => role.name === 'Skinning')
    const lw = message.guild.roles.find(role => role.name === 'Leatherworking')
    const ench = message.guild.roles.find(role => role.name === 'Enchanting')
    const tail = message.guild.roles.find(role => role.name === 'Tailoring')
    const bs = message.guild.roles.find(role => role.name === 'Blacksmithing')
    

    if(['alch',
        'herb', 
        'min', 
        'engi', 
        'skin', 
        'lw', 
        'ench', 
        'tail', 
        'bs'].includes(messageReaction.emoji.name) && message.channel.id === channel.id)
        {
            console.log('removed!')
            switch (messageReaction.emoji.name) {
                case 'alch':
                    member.removeRole(alch).catch(console.error)
                    break;
                case 'herb':
                    member.removeRole(herb).catch(console.error)
                    break;
                case 'min':
                    member.removeRole(min).catch(console.error)
                    break;
                case 'engi':
                    member.removeRole(engi).catch(console.error)
                    break;
                case 'bs':
                    member.removeRole(bs).catch(console.error)
                    break;
                case 'skin':
                    member.removeRole(skin).catch(console.error)
                    break;
                case 'lw':
                    member.removeRole(lw).catch(console.error)
                    break;
                case 'ench':
                    member.removeRole(ench).catch(console.error)
                    break;
                case 'tail':
                    member.removeRole(tail).catch(console.error)
                    break;

            }
        }
})

//creating sql connection
/*var mysql = require('mysql');
var connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: ""
})
//connecting to db and logging success or error to console
connection.connect(function(err: any){
    
    if(err) {
        console.error('error connecting: ' + err.stack);
        return;
    }
    
    console.log('connected as id ' + connection.threadId);
    
});*/

client.on("guildMemberAdd", member => {

    let memberRole = member.guild.roles.find(role => role.name === "Official Member")
    member.addRole(memberRole);

    let welcomeEmbed = new Discord.RichEmbed()
        welcomeEmbed.setTitle("Welcome to Exalted Reputation!")
        welcomeEmbed.setColor("DARK_GOLD")
        welcomeEmbed.setDescription("We are very glad that you have decided to join us! If you have guild related inquiries feel free to direct them to any Officer.")
        welcomeEmbed.addField("Information", "Welcome! You can find a copy of our community guidelines and a document outlining loot distribution policies at https://www.exaltedreputation.com. You have also been given the 'Official Member' Role, allowing you to use commands to join your appropriate class and role channels (!healer, !paladin etc.) Type '!help' in any Exalted Reputation Discord text channel for a summary of ER Bot's commands.")
        welcomeEmbed.attachFiles(['D:/Bot Pictures/ER.png'])
        welcomeEmbed.setImage('attachment://ER.png')
        welcomeEmbed.setFooter("'I'm coming up with 32.33, repeating of course, percentage of survival.'")
    
    
        member.send(welcomeEmbed)
            .catch(console.error)
            
    if(isNull(db.get(member.id))){
        db.set(member.id, {ranks: []})
    }
})

client.on("message", msg => {

    if(msg.author.bot) { return; }
    if(msg.channel.type == "dm") { return; }
    
    const censorList = ConfigFile.config.badWords
    const commandList = ConfigFile.config.commands
    let msgContent = msg.content.toLowerCase()
    let moddedChannel = msg.channel as Discord.TextChannel
    let modChannel = msg.guild.channels.find(c => c.id === "621554832582508564") as Discord.TextChannel

    if(msgContent.startsWith(ConfigFile.config.prefix)){
        for(let k = 0; k < censorList.length; k++){
            if(msgContent.includes(censorList[k])){
                msg.delete()
                msg.reply(`I have deleted your message as it violates community standards. For more information on acceptable conduct please visit the community guidelines page of our website at https://exaltedreputation.com.`).then(m => {(m as Discord.Message).delete(20000)})
                let Embed = new Discord.RichEmbed
                    Embed.setTitle("**__Auto-Moderator Report__**")
                    Embed.setAuthor("ER Bot", client.user.avatarURL)
                    Embed.setColor("DARK_GOLD")
                    Embed.setDescription(`**Violation by <@${msg.author.id}>** \nMessage Content: ${msgContent} \nOriginating Channel: ${moddedChannel}`)
                    Embed.setThumbnail(client.user.avatarURL)
                    Embed.setTimestamp()
    
                modChannel.send(Embed)
        }}
        
        for(let j = 0; j < commandList.length; j++){
            if(msgContent.includes(commandList[j])){
                handleCommand(msg)
            }
        }
    }
    
    else if(!msgContent.startsWith(ConfigFile.config.prefix)){
        for(let i = 0; i < censorList.length; i++){
            if(msgContent.includes(censorList[i])){
                msg.delete()
                msg.reply(`I have deleted your message as it violates community standards. For more information on acceptable conduct please visit the community guidelines page of our website at https://exaltedreputation.com.`).then(m => {(m as Discord.Message).delete(20000)})
                let modEmbed = new Discord.RichEmbed
                    modEmbed.setTitle("**__Auto-Moderator Report__**")
                    modEmbed.setAuthor("ER Bot", client.user.avatarURL)
                    modEmbed.setColor("DARK_GOLD")
                    modEmbed.setDescription(`**Violation by <@${msg.author.id}>** \nMessage Content: ${msgContent} \nOriginating Channel: ${moddedChannel}`)
                    modEmbed.setThumbnail(client.user.avatarURL)
                    modEmbed.setTimestamp()
    
                modChannel.send(modEmbed)
            }
        }
    }
})

client.login(ConfigFile.config.token); //grabing bot token from the config file in dist folder

async function handleCommand(msg: Discord.Message){

    //split string into command and args

    let command = msg.content.split(" ")[0].replace(ConfigFile.config.prefix, "").toLowerCase();
    let args = msg.content.split(" ").slice(1);
    
    for(const commandClass of commands){
        //attempt to execute code with safety
        try{
            if(!commandClass.isThisCommand(command)){
                //go next iteration if this isnt the correct command
                continue;
            }
            await commandClass.runCommand(args, msg, client);
        }
        catch (exception){
            //if there is an error log exception (?lol)
            console.log(exception);
        }
    }

}

function loadCommands(commandsPath: string){

    //exit if no commands
    if(!ConfigFile.config.commands || (ConfigFile.config.commands as string[]).length === 0) { return };

    //loop through commands in our config file
    for(const commandName of ConfigFile.config.commands as string[]){

        //Load the command class
        const commandsClass = require(`${commandsPath}/${commandName}`).default; 

        //cast as our custom IBotCommand interface
        const command = new commandsClass() as IBotCommand;

        //add to our commands list for later
        commands.push(command);
    }
}
