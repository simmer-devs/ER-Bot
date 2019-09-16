import * as Discord from "discord.js";
import {IBotCommand} from "../api";

export default class tank implements IBotCommand{
    
    private readonly _command = "tank"
    
    help(): string {
        return "Assigns the sender to the Tank Role"
    }    
    
    isThisCommand(command: string): boolean {
        return command === this._command;
    }
    
    async runCommand(args: string[], msgObject: Discord.Message, client: Discord.Client): Promise<void> {
        let author = msgObject.author
        let tankRole = msgObject.guild.roles.find(role => role.name === "Tank")
        msgObject.guild.member(author).addRole(tankRole)
        
        let embed = new Discord.RichEmbed()
                embed.setColor("DARK_GOLD")
                embed.setTitle("Welcome to the Tank Role")
                .attachFiles(['D:/Bot Pictures/Tank.png'])
                .setImage('attachment://Tank.png')
                embed.addField("Information", "Welcome! You have gained access to the Tank Role discussion channel of our Discord server. () is the Tank Leader, please direct any role specific inquiries to them.")
        
        msgObject.guild.member(author).send(embed)
            .catch(console.error) 

        msgObject.delete(0)
    }
}