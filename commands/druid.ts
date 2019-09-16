import * as Discord from "discord.js";
import {IBotCommand} from "../api";
import * as db from "quick.db";
import { ranksModel } from "../Models/ranksModel";

export default class druid implements IBotCommand{
    
    private readonly _command = "druid"
    
    help(): string {
        return "Assigns the sender to the Druid Role"
    }    
    
    isThisCommand(command: string): boolean {
        return command === this._command;
    }
    
    async runCommand(args: string[], msgObject: Discord.Message, client: Discord.Client): Promise<void> {
        
        msgObject.delete()
        
        let author = msgObject.author
        let druidRole = msgObject.guild.roles.find(role => role.name === "Druid")
        msgObject.guild.member(author).addRole(druidRole)
        
        let embed = new Discord.RichEmbed()
                embed.setColor([255,100,30])
                embed.setTitle("Welcome to the Druid Class")
                embed.addField("Information", "Welcome! You have gained access to the Druid class discussion channel of our Discord server. () is your Class Leader, please direct any class related inquiries to them. Some general information on the Druid class can be found here: https://www.exaltedreputation.com/guides/class/druid  https://docs.google.com/document/d/1IC_Jny2WNnyvGcOUF7x2i8AHo0F-XcRQWTFk5-37xXM/edit#")
                embed.setFooter("Take care!")
        
        msgObject.guild.member(author).send(embed)
            .catch(console.error) 

        let newRank = "Druid"
        db.push(`${msgObject.author.id}.ranks`, newRank) as any

    }
}