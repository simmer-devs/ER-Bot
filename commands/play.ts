import * as Discord from "discord.js";
import {IBotCommand} from "../api";
import * as ytdl from 'ytdl-core'

async function PlaySong(connection: any, args: any){
    const dispatcher = await connection.playStream(ytdl(args[0], {filter: "audioonly"}))
    dispatcher.on("end", function(){
        connection.disconnect()
    })
}

export default class play implements IBotCommand{
    
    private readonly _command = "play"
    
    help(): string {
        return "Joins ER Bot to current voice channel and plays the linked song."
    }    
    
    isThisCommand(command: string): boolean {
        return command === this._command;
    }
    
    async runCommand(args: string[], msgObject: Discord.Message, client: Discord.Client): Promise<void> {
        
        const queue = new Map();
        const serverQueue = queue.get(msgObject.guild.id)
        const voiceChannel = msgObject.member.voiceChannel
        
        if(msgObject.member.voiceChannel)
        {
            if(!msgObject.guild.voiceConnection){
                
                msgObject.member.voiceChannel.join()
                    .then(connection => {
                        console.log('Successfully joined users channel')
                        PlaySong(connection, args)
                    })
            }
        }
        else{
            msgObject.reply("You must be in a voice channel to use this command.")
        }
        
        
        /*const songInfo = await ytdl.getInfo(args[0])
        const song = {
            title: songInfo.title,
            url: songInfo.video_url,
        };

        if(!serverQueue){
            
        }
        else{
            serverQueue.songs.push(song)
            console.log(serverQueue.songs)
            msgObject.channel.send(`${song.title} has been added to the queue!`)
        }

        const queueContract = {
            textChannel: msgObject.channel,
            voiceChannel: voiceChannel,
            connection: null,
            songs: [] as any,
            volume: 5,
            playing: true,
        };

        queue.set(msgObject.guild.id, queueContract)

        queueContract.songs.push(song)

        const dispatcher = serverQueue.connection.playStream(ytdl(song.url))
        .on('end', () => {
            console.log('Music Ended')
        })
        dispatcher.setVolumeLogarithmic(serverQueue.volume / 5);*/
        
        
        
    }
    
    
}