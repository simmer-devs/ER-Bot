import * as Discord from "discord.js";
import {IBotCommand} from "../api";
import * as db from "quick.db";
import { ranksModel } from "../Models/ranksModel";

export default class stats implements IBotCommand{
    
    private readonly _command = "stats"
    
    help(): string {
        return "How to access this???"
    }    
    
    isThisCommand(command: string): boolean {
        return command === this._command;
    }
    
    async runCommand(args: string[], msgObject: Discord.Message, client: Discord.Client): Promise<void> {
        msgObject.delete()

        let statsEmbed = new Discord.RichEmbed()
            .setTitle('Class and Role Breakdown for ER Discord')
            .setColor("DARK_GOLD")



        let druTracker = 0
        let hunTracker = 0
        let magTracker = 0
        let palTracker = 0
        let priTracker = 0
        let rogTracker = 0
        let warlTracker = 0
        let warrTracker = 0
        let healTracker = 0
        let tankTracker = 0
        let rangedTracker = 0
        let meleeTracker = 0

        
        let noUsers = client.users.array();
        for (let i = 0; i < noUsers.length; i++){
            
            let rankStringArray: string[] = db.get(`${noUsers[i].id}.ranks`)
            if(rankStringArray == null){ 
                continue;
            }
    
            if(`${rankStringArray}`.includes('Druid')){
                druTracker = druTracker + 1
            }
            if(rankStringArray.includes('Hunter')){
                hunTracker = hunTracker + 1
            }
            if(rankStringArray.includes('Mage')){
                magTracker = magTracker + 1
            }
            if(rankStringArray.includes('Paladin')){
                palTracker = palTracker + 1
            }
            if(rankStringArray.includes('Priest')){
                priTracker = priTracker + 1
            }
            if(rankStringArray.includes('Rogue')){
                rogTracker = rogTracker + 1
            }
            if(rankStringArray.includes('Warlock')){
                warlTracker = warlTracker + 1
            }
            if(rankStringArray.includes('Warrior')){
                warrTracker = warrTracker + 1
            }
            if(rankStringArray.includes('Healer')){
                healTracker = healTracker + 1
            }
            if(rankStringArray.includes('Tank')){
                tankTracker = tankTracker + 1
            }
            if(rankStringArray.includes('Ranged')){
                rangedTracker = rangedTracker + 1
            }
            if(rankStringArray.includes('Melee')){
                meleeTracker = meleeTracker + 1
            }
        }

        let druEmoji = msgObject.guild.emojis.find(emoji => emoji.name === "dru")
        let hunEmoji = msgObject.guild.emojis.find(emoji => emoji.name === "hun")
        let magEmoji = msgObject.guild.emojis.find(emoji => emoji.name === "mag")
        let palEmoji = msgObject.guild.emojis.find(emoji => emoji.name === "pal")
        let priEmoji = msgObject.guild.emojis.find(emoji => emoji.name === "pri")
        let rogEmoji = msgObject.guild.emojis.find(emoji => emoji.name === "rog")
        let warlEmoji = msgObject.guild.emojis.find(emoji => emoji.name === "warl")
        let warrEmoji = msgObject.guild.emojis.find(emoji => emoji.name === "warr")

        let tankEmoji = msgObject.guild.emojis.find(emoji => emoji.name === "tank")
        let healerEmoji = msgObject.guild.emojis.find(emoji => emoji.name === "healer")
        let dpsEmoji = msgObject.guild.emojis.find(emoji => emoji.name === "dps")

        let embed = new Discord.RichEmbed();
                embed.setTitle("**__Community Breakdown__**")
                embed.setURL("https://www.exaltedreputation.com/roster")//potentially a roster page on the website here??? exaltedreputation.com/roster
                embed.setAuthor("ER Bot", client.user.avatarURL)
                embed.setColor("DARK_GOLD")
                embed.setDescription("Weekly breakdown of the classes and roles in Exalted Reputation's current roster!")
                embed.setThumbnail(client.user.avatarURL)
                
                embed.addField("**Role Breakdown:**", "-")
                embed.addField(` ${tankEmoji} Tanks: ${tankTracker}`, `-`, true)
                embed.addField(`${healerEmoji} Healers: ${healTracker}`, `-`, true)
                embed.addField(`${dpsEmoji} Ranged: ${rangedTracker}`, `-`, true)
                embed.addField(`${dpsEmoji} Melee: ${meleeTracker}`, "-", true)

                embed.addBlankField()

                embed.addField("**Class Breakdown:**", "-")
                embed.addField(`${druEmoji} Druids: ${druTracker}`, `CL: Xuja`, true)
                embed.addField(`${hunEmoji} Hunters: ${hunTracker}`, `CL: Dratz`, true)
                embed.addField(`${magEmoji} Mages: ${magTracker}`, `CL: `, true)
                embed.addField(`${palEmoji} Paladins: ${palTracker}`, `CL: `, true)
                embed.addField(`${priEmoji} Priests: ${priTracker}`, `CL: `, true)
                embed.addField(`${rogEmoji} Rogues: ${rogTracker}`, `CL: Mcstabby`, true)
                embed.addField(`${warlEmoji} Warlocks: ${warlTracker}`, `CL: `, true)
                embed.addField(`${warrEmoji} Warriors: ${warrTracker} `, `CL: Simmer`, true)

                embed.addBlankField()

                embed.setTimestamp()

        msgObject.channel.send(embed)
    }
}