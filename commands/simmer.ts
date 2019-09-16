import * as Discord from "discord.js";
import {IBotCommand} from "../api";

const jQuery = require('jquery')
const fetch = require('node-fetch')

export default class simmer implements IBotCommand{
    
    private readonly _command = "simmer"
    
    help(): string {
        return "This command does absolutely nothing! :-)"
    }    
    
    isThisCommand(command: string): boolean {
        return command === this._command;
    }
    
    async runCommand(args: string[], msgObject: Discord.Message, client: Discord.Client): Promise<void> {

        msgObject.delete()
            
        /*jQuery.ajax({
            type: 'GET',
            url: 'https://api.twitch.tv/helix/streams?user_login=simmerna',
            headers: {
                'Client-ID': 'smguarfwhfgkn5vkjm64c20jdt3bka'
            },
            success: function(c: any){
                console.log(c)
                if(c.data.length > 0){
                    console.log("online")
                }
                else{
                    console.log("offline")
                }
            }
        })*/  
        

        const body = { a: 1};    
        fetch("https://api.twitch.tv/helix/streams?user_login=simmerna", {
            method: 'post',
            body: JSON.stringify(body),
            headers: {'Client-ID': 'smguarfwhfgkn5vkjm64c20jdt3bka'}
            })
            .then((res: any) => res.json())
            .then((json: any) => console.log(json))

    
            
        }
    }


        
             
        