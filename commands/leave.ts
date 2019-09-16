import * as Discord from "discord.js";
import {IBotCommand} from "../api";

export default class leave implements IBotCommand{
    
    private readonly _command = "leave"
    
    help(): string {
        return "Joins ER Bot to current voice channel and plays the linked song."
    }    
    
    isThisCommand(command: string): boolean {
        return command === this._command;
    }
    
    async runCommand(args: string[], msgObject: Discord.Message, client: Discord.Client): Promise<void> {
        
        msgObject.delete(0)

        if(!msgObject.member.roles.has("445061650077450242")){
            msgObject.channel.send(`Sorry ${msgObject.author} you do not have the DJ role!`).then(msg => {(msg as Discord.Message).delete(4000)})
            return;
        }
        if(msgObject.member.voiceChannel)
        {
            msgObject.guild.voiceConnection.disconnect()
                console.log('Successfully disconnected')
        }
        else
        {
            msgObject.reply("I must be in a voice channel.")
        }
    }
}