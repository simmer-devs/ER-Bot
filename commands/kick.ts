import * as Discord from "discord.js";
import {IBotCommand} from "../api";
import { watchFile } from "fs";
import { resolve } from "path";


export default class kick implements IBotCommand{    
    
    private readonly _command = "kick"

    help(): string {
        return "Kicks the mentioned user from the Discord Server."
    }    
    
    isThisCommand(command: string): boolean {
        return command === this._command;
    }
    
    async runCommand(args: string[], msgObject: Discord.Message, client: Discord.Client): Promise<void> {
       
        //ensures the first user mentioned is banned - can be changed to all users mentioned
        let mentionedUser = msgObject.mentions.users.first();
        let suppliedReason = args.slice(1).join(" ") || "";
        let kickLog = `${msgObject.author.username}: ${suppliedReason}`;

        msgObject.delete(0);

        if(!msgObject.member.hasPermission("ADMINISTRATOR")){
            msgObject.channel.send(`Sorry ${msgObject.author}, you do not have the required permissions.`).then(msg => {(msg as Discord.Message).delete(4000)})
            return;
        }

        if(!mentionedUser){
            msgObject.channel.send(`You must mention another user to enable the kick command ${msgObject.author}.`).then(msg => {(msg as Discord.Message).delete(4000)})
            return;
        }
        
        try{
            if(msgObject.member.hasPermission("ADMINISTRATOR")){
                msgObject.guild.member(mentionedUser).send(`Hello ${msgObject.guild.member(mentionedUser)} you have been removed from the Exalted Reputation Discord server.`);
            }
        }
        catch(exception){
                console.log(exception)
            }
        
        setTimeout(() => msgObject.guild.member(mentionedUser).kick(kickLog)
            .then(console.log)
            .catch(console.error), 1000)

            msgObject.delete(0)
                    
    }
}