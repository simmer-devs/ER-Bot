import * as Discord from "discord.js";
import {IBotCommand} from "../api";
import * as db from "quick.db";
import { ranksModel } from "../Models/ranksModel";

export default class warrior implements IBotCommand{
    
    private readonly _command = "warrior"
    
    help(): string {
        return "Assigns the sender to the Warrior Role"
    }    
    
    isThisCommand(command: string): boolean {
        return command === this._command;
    }
    
    async runCommand(args: string[], msgObject: Discord.Message, client: Discord.Client): Promise<void> {
        let author = msgObject.author
        let warriorRole = msgObject.guild.roles.find(role => role.name === "Warrior")
        msgObject.guild.member(author).addRole(warriorRole)

        let embed = new Discord.RichEmbed()
                embed.setColor([108, 57, 0])
                embed.setTitle("Welcome to the Warrior Class")
                embed.addField("Information", "Welcome! You have gained access to the Warrior class discussion channel of our Discord server. () is your Class Leader, please direct any class related inquiries to them. Some general information on the Warrior class can be found here: https://www.exaltedreputation.com/guides/class/warrior  https://docs.google.com/document/d/1IC_Jny2WNnyvGcOUF7x2i8AHo0F-XcRQWTFk5-37xXM/edit#")
                embed.setFooter("Take care!")
        
        msgObject.guild.member(author).send(embed)
            .catch(console.error) 

        msgObject.delete(0)

        let newRank = "Warrior"
        db.push(`${msgObject.author.id}.ranks`, newRank) as any

        console.log(db.get(`${msgObject.author.id}.ranks`))
    }
}