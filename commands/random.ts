import * as Discord from "discord.js";
import {IBotCommand} from "../api";

const fetch = require('node-fetch')

export default class random implements IBotCommand{
    
    private readonly _command = "random"
    
    help(): string {
        return "This command does absolutely nothing! :-)"
    }    
    
    isThisCommand(command: string): boolean {
        return command === this._command;
    }
    
    async runCommand(args: string[], msgObject: Discord.Message, client: Discord.Client): Promise<void> {

        msgObject.delete()

        let offMember = msgObject.guild.roles.find(r => r.name === "Official Member")

        let randNum = Math.floor(Math.random() * 9)
        console.log(randNum)

        let msg = await msgObject.channel.send("Please wait...") as Discord.Message
        
        if(randNum === 0 ){
            
            fetch("https://apis.duncte123.me/animal/llama")
            .then((res: any) => res.json())
            .then((body: any) => {
                if(!body || !body.data.file) {return msgObject.reply("Whoops! Try again.").then(msg => {(msg as Discord.Message).delete(3000)})}

                let memebed = new Discord.RichEmbed
                memebed.setColor("DARK_GOLD")
                memebed.setAuthor(`${client.user.username} Llama`, msgObject.guild.iconURL)
                memebed.setImage(body.data.file)
                memebed.setTimestamp()
                memebed.setFooter(client.user.username.toUpperCase(), client.user.displayAvatarURL)

                if(body.data.title) {memebed.setTitle(body.data.title).setURL(body.data.url)}

                msg.edit(memebed)
            })
        }  

        else if(randNum === 1){
            
            fetch("https://apis.duncte123.me/animal/cat")
            .then((res: any) => res.json())
            .then((body: any) => {
                if(!body || !body.data.file) {return msgObject.reply("Whoops! Try again.").then(msg => {(msg as Discord.Message).delete(3000)})}

                let memebed = new Discord.RichEmbed
                memebed.setColor("DARK_GOLD")
                memebed.setAuthor(`${client.user.username} Cat`, msgObject.guild.iconURL)
                memebed.setImage(body.data.file)
                memebed.setTimestamp()
                memebed.setFooter(client.user.username.toUpperCase(), client.user.displayAvatarURL)

                if(body.data.title) {memebed.setTitle(body.data.title).setURL(body.data.url)}

                msg.edit(memebed)
            })
        }

        else if(randNum === 2){
            
            fetch("https://apis.duncte123.me/animal/duck")
            .then((res: any) => res.json())
            .then((body: any) => {
                if(!body || !body.data.file) {return msgObject.reply("Whoops! Try again.").then(msg => {(msg as Discord.Message).delete(3000)})}

                let memebed = new Discord.RichEmbed
                memebed.setColor("DARK_GOLD")
                memebed.setAuthor(`${client.user.username} Duck`, msgObject.guild.iconURL)
                memebed.setImage(body.data.file)
                memebed.setTimestamp()
                memebed.setFooter(client.user.username.toUpperCase(), client.user.displayAvatarURL)

                if(body.data.title) {memebed.setTitle(body.data.title).setURL(body.data.url)}

                msg.edit(memebed)
            })
        }

        else if(randNum === 3){

            fetch("https://apis.duncte123.me/animal/alpaca")
            .then((res: any) => res.json())
            .then((body: any) => {
                if(!body || !body.data.file) {return msgObject.reply("Whoops! Try again.").then(msg => {(msg as Discord.Message).delete(3000)})}

                let memebed = new Discord.RichEmbed
                memebed.setColor("DARK_GOLD")
                memebed.setAuthor(`${client.user.username} Alpaca`, msgObject.guild.iconURL)
                memebed.setImage(body.data.file)
                memebed.setTimestamp()
                memebed.setFooter(client.user.username.toUpperCase(), client.user.displayAvatarURL)

                if(body.data.title) {memebed.setTitle(body.data.title).setURL(body.data.url)}

                msg.edit(memebed)
            })
        }

        else if(randNum === 4){
            
            fetch("https://apis.duncte123.me/animal/seal")
            .then((res: any) => res.json())
            .then((body: any) => {
                if(!body || !body.data.file) {return msgObject.reply("Whoops! Try again.").then(msg => {(msg as Discord.Message).delete(3000)})}

                let memebed = new Discord.RichEmbed
                memebed.setColor("DARK_GOLD")
                memebed.setAuthor(`${client.user.username} Seal`, msgObject.guild.iconURL)
                memebed.setImage(body.data.file)
                memebed.setTimestamp()
                memebed.setFooter(client.user.username.toUpperCase(), client.user.displayAvatarURL)

                if(body.data.title) {memebed.setTitle(body.data.title).setURL(body.data.url)}

                msg.edit(memebed)
            })
        }

        else if(randNum === 5){

            fetch("https://apis.duncte123.me/animal/camel")
            .then((res: any) => res.json())
            .then((body: any) => {
                if(!body || !body.data.file) {return msgObject.reply("Whoops! Try again.").then(msg => {(msg as Discord.Message).delete(3000)})}

                let memebed = new Discord.RichEmbed
                memebed.setColor("DARK_GOLD")
                memebed.setAuthor(`${client.user.username} Camel`, msgObject.guild.iconURL)
                memebed.setImage(body.data.file)
                memebed.setTimestamp()
                memebed.setFooter(client.user.username.toUpperCase(), client.user.displayAvatarURL)

                if(body.data.title) {memebed.setTitle(body.data.title).setURL(body.data.url)}

                msg.edit(memebed)
            })
        }

        else if(randNum === 6){
            
            fetch("https://apis.duncte123.me/animal/dog")
            .then((res: any) => res.json())
            .then((body: any) => {
                if(!body || !body.data.file) {return msgObject.reply("Whoops! Try again.").then(msg => {(msg as Discord.Message).delete(3000)})}

                let memebed = new Discord.RichEmbed
                memebed.setColor("DARK_GOLD")
                memebed.setAuthor(`${client.user.username} Dog`, msgObject.guild.iconURL)
                memebed.setImage(body.data.file)
                memebed.setTimestamp()
                memebed.setFooter(client.user.username.toUpperCase(), client.user.displayAvatarURL)

                if(body.data.title) {memebed.setTitle(body.data.title).setURL(body.data.url)}

                msg.edit(memebed)
            })
        }
           
        else if(randNum === 7){
           
            fetch("https://apis.duncte123.me/animal/fox")
            .then((res: any) => res.json())
            .then((body: any) => {
                if(!body || !body.data.file) {return msgObject.reply("Whoops! Try again.").then(msg => {(msg as Discord.Message).delete(3000)})}

                let memebed = new Discord.RichEmbed
                memebed.setColor("DARK_GOLD")
                memebed.setAuthor(`${client.user.username} Fox`, msgObject.guild.iconURL)
                memebed.setImage(body.data.file)
                memebed.setTimestamp()
                memebed.setFooter(client.user.username.toUpperCase(), client.user.displayAvatarURL)

                if(body.data.title) {memebed.setTitle(body.data.title).setURL(body.data.url)}

                msg.edit(memebed)
            })
        }

        else if(randNum === 8){
            
            fetch("https://apis.duncte123.me/animal/lizard")
            .then((res: any) => res.json())
            .then((body: any) => {
                if(!body || !body.data.file) {return msgObject.reply("Whoops! Try again.").then(msg => {(msg as Discord.Message).delete(3000)})}

                let memebed = new Discord.RichEmbed
                memebed.setColor("DARK_GOLD")
                memebed.setAuthor(`${client.user.username} Lizard`, msgObject.guild.iconURL)
                memebed.setImage(body.data.file)
                memebed.setTimestamp()
                memebed.setFooter(client.user.username.toUpperCase(), client.user.displayAvatarURL)

                if(body.data.title) {memebed.setTitle(body.data.title).setURL(body.data.url)}

                msg.edit(memebed)
            })
        }
            
    }
}