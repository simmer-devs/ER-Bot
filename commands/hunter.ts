import * as Discord from "discord.js";
import {IBotCommand} from "../api";
import * as db from "quick.db";
import { ranksModel } from "../Models/ranksModel";

export default class hunter implements IBotCommand{
    
    private readonly _command = "hunter"
    
    help(): string {
        return "Assigns the sender to the Hunter Role"
    }    
    
    isThisCommand(command: string): boolean {
        return command === this._command;
    }
    
    async runCommand(args: string[], msgObject: Discord.Message, client: Discord.Client): Promise<void> {
        let author = msgObject.author
        let hunterRole = msgObject.guild.roles.find(role => role.name === "Hunter")
        msgObject.guild.member(author).addRole(hunterRole)

        let embed = new Discord.RichEmbed()
                embed.setColor([150, 184, 103])
                embed.setTitle("Welcome to the Hunter Class")
                embed.addField("Information", "Welcome! You have gained access to the Hunter class discussion channel of our Discord server. () is your Class Leader, please direct any class related inquiries to them. Some general information on the Hunter class can be found here: https://www.exaltedreputation.com/guides/class/hunter  https://docs.google.com/document/d/1IC_Jny2WNnyvGcOUF7x2i8AHo0F-XcRQWTFk5-37xXM/edit#")
                embed.setFooter("Take care!")
        
        msgObject.guild.member(author).send(embed)
            .catch(console.error) 

        msgObject.delete(0)

        let newRank = "Hunter"
        db.push(`${msgObject.author.id}.ranks`, newRank) as any
    }
}