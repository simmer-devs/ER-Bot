import * as Discord from "discord.js";
import {IBotCommand} from "../api";
import * as db from "quick.db";

export default class healer implements IBotCommand{
    
    private readonly _command = "healer"
    
    help(): string {
        return "Assigns the sender to the Healer Role"
    }    
    
    isThisCommand(command: string): boolean {
        return command === this._command;
    }
    
    async runCommand(args: string[], msgObject: Discord.Message, client: Discord.Client): Promise<void> {
        let author = msgObject.author
        let healerRole = msgObject.guild.roles.find(role => role.name === "Healer")
        msgObject.guild.member(author).addRole(healerRole)
        
        let embed = new Discord.RichEmbed()
                embed.setColor("DARK_GOLD")
                embed.setTitle("Welcome to the Healer Role")
                .attachFiles(['D:/Bot Pictures/Healer.png'])
                .setImage('attachment://Healer.png')
                embed.addField("Information", "Welcome! You have gained access to the Healer Role discussion channel of our Discord server. () is the Healing Leader, please direct any role specific inquiries to them.")
        
        msgObject.guild.member(author).send(embed)
            .catch(console.error) 
        
        let newRank = "Healer"
        db.push(`${msgObject.author.id}.ranks`, newRank) as any

        msgObject.delete(0)
    }
}