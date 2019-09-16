import * as Discord from "discord.js";
import {IBotCommand} from "../api";
import * as db from "quick.db";
import { ranksModel } from "../Models/ranksModel";

export default class mage implements IBotCommand{
    
    private readonly _command = "mage"
    
    help(): string {
        return "Assigns the sender to the Mage Role"
    }    
    
    isThisCommand(command: string): boolean {
        return command === this._command;
    }
    
    async runCommand(args: string[], msgObject: Discord.Message, client: Discord.Client): Promise<void> {
        let author = msgObject.author
        let mageRole = msgObject.guild.roles.find(role => role.name === "Mage")
        msgObject.guild.member(author).addRole(mageRole)
        
        let embed = new Discord.RichEmbed()
                embed.setColor([0, 255, 255])
                embed.setTitle("Welcome to the Mage Class")
                embed.addField("Information", "Welcome! You have gained access to the Mage class discussion channel of our Discord server. () is your Class Leader, please direct any class related inquiries to them. Some general information on the Mage class can be found here: https://www.exaltedreputation.com/guides/class/mage  https://docs.google.com/document/d/1IC_Jny2WNnyvGcOUF7x2i8AHo0F-XcRQWTFk5-37xXM/edit#")
                embed.setFooter("Take care!")
        
        msgObject.guild.member(author).send(embed)
            .catch(console.error) 

        msgObject.delete(0)

        let newRank = "Mage"
        db.push(`${msgObject.author.id}.ranks`, newRank) as any

    }
}