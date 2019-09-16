import * as Discord from "discord.js";
import {IBotCommand} from "../api";

export default class purge implements IBotCommand{
    
    private readonly _command = "purge"
    
    help(): string {
        return "Deletes the amount of messages following the command - only usable within 14 days of sent date."
    }    
    
    isThisCommand(command: string): boolean {
        return command === this._command;
    }
    
    async runCommand(args: string[], msgObject: Discord.Message, client: Discord.Client): Promise<void> {

        //combined message if a user does not have the proper role and does not include an argument
        if(!args[0] && !msgObject.member.roles.has("607304192226361346"))
        {
            msgObject.channel.send(`Sorry ${msgObject.author}, you do not have the required permissions. This command requires the amount of messages to be deleted following the command. Type !help for command information.`)
            .then(msg => {(msg as Discord.Message).delete(4000)})
            return;
        }

        //checking if the user included any argument individually
        if(!args[0]){
            msgObject.channel.send(`Please include the number of messages to be deleted ${msgObject.author}`).then(msg => {(msg as Discord.Message).delete(4000)})
        }

        //checking for a specific role given to people for purging messages ("Purger" in ER Discord) individually 
        if(!msgObject.member.roles.has("607304192226361346"))
        {
            msgObject.channel.send(`Sorry ${msgObject.author}, you do not have the required permissions.`).then(msg => {(msg as Discord.Message).delete(4000)})
            return; 
        }
        
        //convert number of deleted messages from string to number
        let userDeleteRequest = Number(args[0])
        
        //if anything other than a number, return an error
        if(isNaN(userDeleteRequest))
        {
            msgObject.channel.send(`This command requires a number ${msgObject.author}`).then(msg => {(msg as Discord.Message).delete(4000)})
            return;  
        }
        
        else
        {
            userDeleteRequest = Math.round(userDeleteRequest)
            
            //.bulkDelete includes own message (!purge x), need to increment by 1 to delete the messages the user sees
            let deletedMessages = userDeleteRequest + 1

            msgObject.channel.bulkDelete(deletedMessages)
            .catch(console.error)  
        }

        
        
    }    
}
