import * as Discord from "discord.js";
import {IBotCommand} from "../api";
import * as db from "quick.db";
import { ranksModel } from "../Models/ranksModel";

export default class getroles implements IBotCommand{
    
    private readonly _command = "getroles"
    
    help(): string {
        return "This command does absolutely nothing! :-)"
    }    
    
    isThisCommand(command: string): boolean {
        return command === this._command;
    }
    
    async runCommand(args: string[], msgObject: Discord.Message, client: Discord.Client): Promise<void> {
        msgObject.delete()

        let userArray = client.users.array()
        

        for (let i = 0; i <= userArray.length - 1; i++){
            let member = msgObject.guild.members.find(member => member.id === userArray[i].id)
            if (member == null) {
                continue;
            }
            else {
                if(member.roles.find(role => role.name === "Druid")){
                    let newRank1 = "Druid"
                    db.push(`${userArray[i].id}.ranks`, newRank1) as any
                }
                if(member.roles.find(role => role.name === "Hunter")){
                    let newRank2 = "Hunter"
                    db.push(`${userArray[i].id}.ranks`, newRank2) as any
                }
                if(member.roles.find(role => role.name === "Mage")){
                    let newRank3 = "Mage"
                    db.push(`${userArray[i].id}.ranks`, newRank3) as any
                }
                if(member.roles.find(role => role.name === "Paladin")){
                    let newRank4 = "Paladin"
                    db.push(`${userArray[i].id}.ranks`, newRank4) as any
                }
                if(member.roles.find(role => role.name === "Priest")){
                    let newRank5 = "Priest"
                    db.push(`${userArray[i].id}.ranks`, newRank5) as any
                }
                if(member.roles.find(role => role.name === "Rogue")){
                    let newRank6 = "Rogue"
                    db.push(`${userArray[i].id}.ranks`, newRank6) as any
                }
                if(member.roles.find(role => role.name === "Warlock")){
                    let newRank7 = "Warlock"
                    db.push(`${userArray[i].id}.ranks`, newRank7) as any
                }
                if(member.roles.find(role => role.name === "Warrior")){
                    let newRank8 = "Warrior"
                    db.push(`${userArray[i].id}.ranks`, newRank8) as any
                }
                if(member.roles.find(role => role.name === "Healer")){
                    let newRank9 = "Healer"
                    db.push(`${userArray[i].id}.ranks`, newRank9) as any
                }
                if(member.roles.find(role => role.name === "Tank")){
                    let newRank10 = "Tank"
                    db.push(`${userArray[i].id}.ranks`, newRank10) as any
                }
                if(member.roles.find(role => role.name === "Ranged")){
                    let newRank11 = "Ranged"
                    db.push(`${userArray[i].id}.ranks`, newRank11) as any
                }
                if(member.roles.find(role => role.name === "Melee")){
                    let newRank12 = "Melee"
                    db.push(`${userArray[i].id}.ranks`, newRank12) as any
                }
            }
        }
    }
}