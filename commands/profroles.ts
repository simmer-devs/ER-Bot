import * as Discord from "discord.js";
import {IBotCommand} from "../api";

export default class profroles implements IBotCommand{
    
    private readonly _command = "profroles"
    
    help(): string {
        return "This command does absolutely nothing! :-)"
    }    
    
    isThisCommand(command: string): boolean {
        return command === this._command;
    }
    
    async runCommand(args: string[], msgObject: Discord.Message, client: Discord.Client): Promise<void> {
        
        msgObject.delete()
        
        const alch = msgObject.guild.roles.get('609171082175447064')
        const herb = msgObject.guild.roles.get('609171567896952842')
        const min = msgObject.guild.roles.get('609171910131056641')
        const engi = msgObject.guild.roles.get('609172223500091397')
        const skin = msgObject.guild.roles.get('609172425824927756')
        const lw = msgObject.guild.roles.get('609172717756743707')
        const ench = msgObject.guild.roles.get('609173069331955725')
        const tail = msgObject.guild.roles.get('609173250664038430')
        const bs = msgObject.guild.roles.get('609173701816221736')

        const filter = (reaction: any, user: any) => [':alch:609178513542610954', ':herb:609178123916804116', ':min:609178681746915328', ':engi:609179000274944050', ':skin:609179307402592291', ':lw:609179421508894720', ':ench:609179923554500613', ':tail:609180039077953548', ':bs:609180257487945779'].includes(reaction.emoji.name);

        const embed = new Discord.RichEmbed()
            .setAuthor("ER Bot", client.user.avatarURL)
            .setTitle('Self-Assigned Profession Roles')
            .setURL('https://classic.wowhead.com/guides/classic-wow-professions-overview')
            .setDescription('Please react with the professions you have or intend to have available to trade with other players. Doing so will grant you access to the craft-n-trade channel, our wtb/wts/wtt forum. Note that you can change professions at any time by changing your reactions in this channel!')
            .addField("Available Professions", "<:herb:609178123916804116> <:alch:609178513542610954> <:min:609178681746915328> <:engi:609179000274944050> <:bs:609180257487945779> <:skin:609179307402592291> <:lw:609179421508894720> <:ench:609179923554500613> <:tail:609180039077953548>", true)
            .setColor("DARK_GOLD")
            .setFooter("Thank You!")
    
        let msg = await msgObject.channel.send(embed).then(async msg => {
            let m = (msg as Discord.Message) 
            await m.react(`:herb:609178123916804116`)
            await m.react(`:alch:609178513542610954`)
            await m.react(`:min:609178681746915328`)
            await m.react(`:engi:609179000274944050`) 
            await m.react(`:bs:609180257487945779`)
            await m.react(`:skin:609179307402592291`)
            await m.react(`:lw:609179421508894720`)
            await m.react(`:ench:609179923554500613`)
            await m.react(`:tail:609180039077953548`)
        })
        }

}