import * as Discord from "discord.js";
import {IBotCommand} from "../api";
import { watchFile } from "fs";
import { resolve } from "path";


export default class ban implements IBotCommand{    
    
    private readonly _command = "ban"

    help(): string {
        return "Bans the mentioned user from the Discord Server."
    }    
    
    isThisCommand(command: string): boolean {
        return command === this._command;
    }
    
    async runCommand(args: string[], msgObject: Discord.Message, client: Discord.Client): Promise<void> {
       
        //ensures the first user mentioned is banned - can be changed to all users mentioned
        let mentionedUser = msgObject.mentions.users.first();
        let suppliedReason = args.slice(1).join(" ") || "";
        let banLog = `${msgObject.author.username}: ${suppliedReason}`;

        msgObject.delete(0)

        if(!msgObject.member.hasPermission("ADMINISTRATOR")){
            msgObject.channel.send(`Sorry ${msgObject.author}, you do not have the required permissions.`).then(msg => {(msg as Discord.Message).delete(4000)})
            return;
        }

        if(!mentionedUser){
            msgObject.channel.send(`You must mention another user to enable the ban command ${msgObject.author}.`).then(msg => {(msg as Discord.Message).delete(4000)})
            return;
        }
        
        try{
            if(msgObject.member.hasPermission("ADMINISTRATOR")){
                msgObject.guild.member(mentionedUser).send(`Hello ${msgObject.guild.member(mentionedUser)} you have been banned from the Exalted Reputation Discord server due to repeated breach of community guidelines.`);
            }
        }
        catch(exception){
                console.log(exception)
            }
        
            
        setTimeout(() => msgObject.guild.member(mentionedUser).ban(banLog)
            .then(console.log)
            .catch(console.error), 1000)
    }
}