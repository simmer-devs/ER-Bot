import * as Discord from "discord.js";
import {IBotCommand} from "../api";

const fetch = require('node-fetch')

export default class cat implements IBotCommand{
    
    private readonly _command = "cat"
    
    help(): string {
        return "This command does absolutely nothing! :-)"
    }    
    
    isThisCommand(command: string): boolean {
        return command === this._command;
    }
    
    async runCommand(args: string[], msgObject: Discord.Message, client: Discord.Client): Promise<void> {

        msgObject.delete()

        let offMember = msgObject.guild.roles.find(r => r.name === "Official Member")

        if(msgObject.member.roles.has("504892485198282754")){

        //if(msgObject.channel.id === "349789282447130636"){
            
            let msg = await msgObject.channel.send("Please wait...") as Discord.Message

            fetch("https://apis.duncte123.me/animal/cat")
            .then((res: any) => res.json())
            .then((body: any) => {
                if(!body || !body.data.file) {return msgObject.reply("Whoops! Try again.").then(msg => {(msg as Discord.Message).delete(3000)})}

                let memebed = new Discord.RichEmbed
                memebed.setColor("DARK_GOLD")
                memebed.setAuthor(`${client.user.username} Cat`, msgObject.guild.iconURL)
                memebed.setImage(body.data.file)
                memebed.setTimestamp()
                memebed.setFooter(client.user.username.toUpperCase(), client.user.displayAvatarURL)

                if(body.data.title) {memebed.setTitle(body.data.title).setURL(body.data.url)}

                msg.edit(memebed)
            })
        //}
    }


        /*else if(!msgObject.member.roles.has("504892485198282754") && msgObject.channel.id !== "349789282447130636") {
            msgObject.channel.send(`Sorry ${msgObject.author}! The meme command is only usable by Official Members in the <#349789282447130636>.`).then(msg => (msg as Discord.Message).delete(3000))
            return
        }

        else if(msgObject.member.roles.has("504892485198282754") && msgObject.channel.id !== "349789282447130636") {
            msgObject.channel.send(`Please use the meme command in the <#349789282447130636>, ${msgObject.author}.`).then(msg => (msg as Discord.Message).delete(3000))
        }

        else if(!msgObject.member.roles.has("504892485198282754") && msgObject.channel.id === "349789282447130636") {
            msgObject.channel.send(`Sorry, that command is for Official Members only.`).then(msg => (msg as Discord.Message).delete(3000))
        }*/
        
        
        else {
            msgObject.channel.send(`Sorry ${msgObject.author}! The meme command is only usable by Official Members in the <#349789282447130636>.`).then(msg => (msg as Discord.Message).delete(5000))
             
        }
    }
}