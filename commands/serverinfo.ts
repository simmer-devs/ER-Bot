import * as Discord from "discord.js";
import {IBotCommand} from "../api";

export default class serverinfo implements IBotCommand{
    
    private readonly _command = "serverinfo"
    
    help(): string {
        return "Displays some basic information about the server"
    }    
    
    isThisCommand(command: string): boolean {
        return command === this._command;
    }
    
    async runCommand(args: string[], msgObject: Discord.Message, client: Discord.Client): Promise<void> {
        let embed = new Discord.RichEmbed()
                                .setColor('DARK_GOLD')
                                .setTitle("Server Information")
                                .setDescription("Welcome to our server, here is some information you may be interested in:")
                                .addField("Membership:", `${msgObject.guild.memberCount} Total Members`)
        msgObject.channel.send(embed)
            .catch(console.error);

            msgObject.delete(0)
    }
}