import * as Discord from "discord.js";
import {IBotCommand} from "../api";
import * as db from "quick.db";
import { ranksModel } from "../Models/ranksModel";

export default class paladin implements IBotCommand{
    
    private readonly _command = "paladin"
    
    help(): string {
        return "Assigns the sender to the Paladin Role"
    }    
    
    isThisCommand(command: string): boolean {
        return command === this._command;
    }
    
    async runCommand(args: string[], msgObject: Discord.Message, client: Discord.Client): Promise<void> {
        let author = msgObject.author
        let paladinRole = msgObject.guild.roles.find(role => role.name === "Paladin")
        msgObject.guild.member(author).addRole(paladinRole)

        let embed = new Discord.RichEmbed()
                embed.setColor([255, 92, 140])
                embed.setTitle("Welcome to the Paladin Class")
                embed.addField("Information", "Welcome! You have gained access to the Paladin class discussion channel of our Discord server. () is your Class Leader, please direct any class related inquiries to them. Some general information on the Paladin class can be found here: https://www.exaltedreputation.com/guides/class/paladin  https://docs.google.com/document/d/1IC_Jny2WNnyvGcOUF7x2i8AHo0F-XcRQWTFk5-37xXM/edit#")
                embed.setFooter("Take care!")
        
        msgObject.guild.member(author).send(embed)
            .catch(console.error) 

        msgObject.delete(0)

        let newRank = "Paladin"
        db.push(`${msgObject.author.id}.ranks`, newRank) as any
    }
}