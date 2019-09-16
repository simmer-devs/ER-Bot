import * as Discord from "discord.js";
import {IBotCommand} from "../api";

export default class ranged implements IBotCommand{
    
    private readonly _command = "ranged"
    
    help(): string {
        return "Assigns the sender to the Ranged Role"
    }    
    
    isThisCommand(command: string): boolean {
        return command === this._command;
    }
    
    async runCommand(args: string[], msgObject: Discord.Message, client: Discord.Client): Promise<void> {
        let author = msgObject.author
        let rangedRole = msgObject.guild.roles.find(role => role.name === "Ranged")
        msgObject.guild.member(author).addRole(rangedRole)
        
        let embed = new Discord.RichEmbed()
                embed.setColor("DARK_GOLD")
                embed.setTitle("Welcome to the Ranged Role")
                .attachFiles(['D:/Bot Pictures/Ranged.png'])
                .setImage('attachment://Ranged.png')
                embed.addField("Information", "Welcome! You have gained access to the Ranged Role discussion channel of our Discord server. () is the Ranged Leader, please direct any role specific inquiries to them.")
        
        msgObject.guild.member(author).send(embed)
            .catch(console.error) 

        msgObject.delete(0)

    }
}