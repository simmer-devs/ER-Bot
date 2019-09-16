import * as Discord from "discord.js";
import {IBotCommand} from "../api";
import * as db from "quick.db";
import { ranksModel } from "../Models/ranksModel";


export default class priest implements IBotCommand{
    
    private readonly _command = "priest"
    
    help(): string {
        return "Assigns the sender to the Priest Role"
    }    
    
    isThisCommand(command: string): boolean {
        return command === this._command;
    }
    
    async runCommand(args: string[], msgObject: Discord.Message, client: Discord.Client): Promise<void> {
        let author = msgObject.author
        let priestRole = msgObject.guild.roles.find(role => role.name === "Priest")
        msgObject.guild.member(author).addRole(priestRole)

        let embed = new Discord.RichEmbed()
                embed.setColor([255, 255, 255])
                embed.setTitle("Welcome to the Priest Class")
                embed.addField("Information", "Welcome! You have gained access to the Priest class discussion channel of our Discord server. () is your Class Leader, please direct any class related inquiries to them. Some general information on the Priest class can be found here: https://www.exaltedreputation.com/guides/class/priest https://docs.google.com/document/d/1IC_Jny2WNnyvGcOUF7x2i8AHo0F-XcRQWTFk5-37xXM/edit#")
                embed.setFooter("Take care!")
        
        msgObject.guild.member(author).send(embed)
            .catch(console.error) 

        msgObject.delete(0)

        let newRank = "Priest"
        db.push(`${msgObject.author.id}.ranks`, newRank) as any
    }
}