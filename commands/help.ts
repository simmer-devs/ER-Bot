import * as Discord from "discord.js";
import {IBotCommand} from "../api";
import { commands } from "../index";

export default class help implements IBotCommand{
    
    private readonly _command = "help"
    
    help(): string {
        return "Shows the commands that can be used with this bot"
    }    
    
    isThisCommand(command: string): boolean {
        return command === this._command;
    }
    
    async runCommand(args: string[], msgObject: Discord.Message, client: Discord.Client): Promise<void> {
        msgObject.delete()
        let embed = new Discord.RichEmbed();
                embed.setTitle("**__Commands Help__**")
                embed.setURL("https://www.exaltedreputation.com")
                embed.setAuthor("ER Bot", client.user.avatarURL)
                embed.setColor("DARK_GOLD")
                embed.setDescription("This message gives a brief summary of the commands available with ER Bot.")
                embed.setThumbnail(client.user.avatarURL)

                embed.addField("__Class Commands__", "Class commands that open the relevant discussion channels on the Exalted Reputation Discord Server, available to all guild members.")
                embed.addField("!druid", "Assigns the Druid Class rank.", true)
                embed.addField("!hunter", "Assigns the Hunter Class rank.", true)
                embed.addField("!mage", "Assigns the Mage Class rank.", true)
                embed.addField("!paladin", "Assigns the Paladin Class rank.", true)
                embed.addField("!priest", "Assigns the Priest Class rank.", true)
                embed.addField("!rogue", "Assigns the Rogue Class rank.", true)
                embed.addField("!warlock", "Assigns the Warlock Class rank.", true)
                embed.addField("!warrior", "Assigns the Warrior Class rank.", true)

                embed.addBlankField()

                embed.addField("__Role Commands__", "Role commands that open the relevant discussion channels on the Exalted Reputation Discord Server, available to all guild members.")
                embed.addField("!tank", "Assigns the Tank Role.  ", true)
                embed.addField("!healer", "Assigns the Healer Role.", true)
                embed.addField("!ranged", "Assigns the Ranged DPS Role.", true)
                embed.addField("!melee", "Assigns the Melee DPS Role.", true)

                embed.addBlankField()

                embed.addField("__Officer+ Commands__", "These commands require Officer or Administrator permissions.")
                embed.addField("!ban", "Bans the mentioned user.", true)
                embed.addField("!kick", "Kicks the mentioned user.", true)
                embed.addField("!purge", "Deletes the amount of messages following the command - only usable within 14 days of sent date.", true)

                embed.setTimestamp()
                /*commands.forEach(command => {
                embed.addField("!"+ command.constructor.name, command.help(), true);
        })*/

                
                if(msgObject.channel.id === "604763739576598548")
                {
                    msgObject.channel.send(embed)

                }
                else
                {
                    msgObject.channel.send(`${msgObject.author} Please refer to <#604763739576598548> for a detailed description of all available commands.`).then(msg => {(msg as Discord.Message).delete(10000)})
                    
                }
    }
}