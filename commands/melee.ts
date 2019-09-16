import * as Discord from "discord.js";
import {IBotCommand} from "../api";

export default class melee implements IBotCommand{
    
    private readonly _command = "melee"
    
    help(): string {
        return "Assigns the sender to the Melee Role"
    }    
    
    isThisCommand(command: string): boolean {
        return command === this._command;
    }
    
    async runCommand(args: string[], msgObject: Discord.Message, client: Discord.Client): Promise<void> {
        let author = msgObject.author
        let meleeRole = msgObject.guild.roles.find(role => role.name === "Melee")
        msgObject.guild.member(author).addRole(meleeRole)
        
        let embed = new Discord.RichEmbed()
                embed.setColor("DARK_GOLD")
                embed.setTitle("Welcome to the Melee Role")
                .attachFiles(['D:/Bot Pictures/Melee.png'])
                .setImage('attachment://Melee.png')
                embed.addField("Information", "Welcome! You have gained access to the Melee Role discussion channel of our Discord server. () is the Melee Leader, please direct any role specific inquiries to them.")
        
        msgObject.guild.member(author).send(embed)
            .catch(console.error) 

        msgObject.delete(0)

    }
}