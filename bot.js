const Discord = require("discord.js");
const myid = ['280774651955642368'];
const prefix = ['+'];
const client = new Discord.Client();
const client2 = new Discord.Client();
const client3 = new Discord.Client();
const client4 = new Discord.Client();
const client5 = new Discord.Client();
const client6 = new Discord.Client();


//???????????????????????????????????????????????????????????????????????????????????????????????????????????????????????


client.login(process.env.TOKEN);
client2.login(process.env.TOKEN2);
client3.login(process.env.TOKEN3);
client4.login(process.env.TOKEN4);
client5.login(process.env.TOKEN5);
client6.login(process.env.TOKEN6);


//???????????????????????????????????????????????????????????????????????????????????????????????????????????????????????


client.on('message', message => {
  if (message.content === 'd7') {
message.channel.send('#daily')
  }
  if(message.content === 'c7'){
message.channel.send('#credits')
  }
  if(message.content === 'r7'){
message.channel.send("#rep "+"<@" + myid + ">")
  }
  if (message.content === 'p7') {
message.channel.send('#profile')
  }
  if(message.content.startsWith("s7")) {
    var text = message.content.split(' ').slice(1).join(' ');
     message.channel.send(text);
  }
});
 
client2.on('message', message => {
  if (message.content === 'd8') {
message.channel.send('#daily')
  }
  if(message.content === 'c8'){
message.channel.send('#credits')
  }
   if(message.content === 'r8'){
message.channel.send("#rep "+"<@" + myid + ">")
  }
  if (message.content === 'p8') {
message.channel.send('#profile')
  }
  if(message.content.startsWith("s2")) {
    var text = message.content.split(' ').slice(1).join(' ');
     message.channel.send(text);
  }
});
 
client3.on('message', message => {
  if (message.content === 'd9') {
message.channel.send('#daily')
  }
  if(message.content === 'c9'){
message.channel.send('#credits')
  }
  if(message.content === 'r9'){
message.channel.send("#rep "+"<@" + myid + ">")
  }
  if (message.content === 'p9') {
message.channel.send('#profile')
  }
  if(message.content.startsWith("s3")) {
    var text = message.content.split(' ').slice(1).join(' ');
     message.channel.send(text);
  }
});
 
client4.on('message', message => {
  if (message.content === 'd10') {
message.channel.send('#daily')
  }
  if(message.content === 'c10'){
message.channel.send('#credits')
  }
  if(message.content === 'r10'){
message.channel.send("#rep "+"<@" + myid + ">")
  }
  if (message.content === 'p10') {
message.channel.send('#profile')
  }
  if(message.content.startsWith("s4")) {
    var text = message.content.split(' ').slice(1).join(' ');
     message.channel.send(text);
  }
});
 
client5.on('message', message => {
  if (message.content === 'd11') {
message.channel.send('#daily')
  }
  if(message.content === 'c11'){
message.channel.send('#credits')
  }
  if(message.content === 'r11'){
message.channel.send("#rep "+"<@" + myid + ">")
  }
  if (message.content === 'p11') {
message.channel.send('#profile')
  }
  if(message.content.startsWith("s5")) {
    var text = message.content.split(' ').slice(1).join(' ');
     message.channel.send(text);
  }
});

client6.on('message', message => {
  if (message.content === 'd12') {
message.channel.send('#daily')
  }
  if(message.content === 'c12'){
message.channel.send('#credits')
  }
  if(message.content === 'r12'){
message.channel.send("#rep "+"<@" + myid + ">")
  }
  if (message.content === 'p12') {
message.channel.send('#profile')
  }
  if(message.content.startsWith("s6")) {
    var text = message.content.split(' ').slice(1).join(' ');
     message.channel.send(text);
  }
});


//???????????????????????????????????????????????????????????????????????????????????????????????????????????????????????


client.on('message', message => {
    if(message.content === prefix+'number'){
        message.channel.send(" My Token Is ``1`` ")
    }
});

client2.on('message', message => {
    if(message.content === prefix+'number'){
        message.channel.send(" My Token Is ``2`` ")
    }
});

client3.on('message', message => {
    if(message.content === prefix+'number'){
        message.channel.send(" My Token Is ``3`` ")
    }
});

client4.on('message', message => {
    if(message.content === prefix+'number'){
        message.channel.send(" My Token Is ``4`` ")
    }
});

client5.on('message', message => {
    if(message.content === prefix+'number'){
        message.channel.send(" My Token Is ``5`` ")
    }
});

client6.on('message', message => {
    if(message.content === prefix+'number'){
        message.channel.send(" My Token Is ``6`` ")
    }
});


//???????????????????????????????????????????????????????????????????????????????????????????????????????????????????????

client.on('message', message => {
if (message.content === prefix+'fast') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 30000; x++) {
        message.channel.send(`**??? ???? ??? **[ " ${x} " ]`)
          .then(m => {
            count++;
          })
          
        }
      }
});

client2.on('message', message => {
if (message.content === prefix+'fast') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 30000; x++) {
        message.channel.send(`**??? ???? ??? **[ " ${x} " ]`)
          .then(m => {
            count++;
          })
          
        }
      }
});

client3.on('message', message => {
if (message.content === prefix+'fast') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 30000; x++) {
        message.channel.send(`**??? ???? ??? ?? ??? **[ " ${x} " ]`)
          .then(m => {
            count++;
          })
          
        }
      }
});

client4.on('message', message => {
if (message.content === prefix+'fast') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 30000; x++) {
        message.channel.send(`**??? ???? ??? ?? ??? **[ " ${x} " ]`)
          .then(m => {
            count++;
          })
          
        }
      }
});

client5.on('message', message => {
if (message.content === prefix+'fast') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 30000; x++) {
        message.channel.send(`**??? ???? ??? ?? ??? **[ " ${x} " ]`)
          .then(m => {
            count++;
          })
          
        }
      }
});

client6.on('message', message => {
if (message.content === prefix+'fast') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 30000; x++) {
        message.channel.send(`**??? ???? ??? ?? ??? **[ " ${x} " ]`)
          .then(m => {
            count++;
          })
          
        }
      }
});
