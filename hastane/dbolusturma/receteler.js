
  //let randomText = Math.random().toString(36).substr(2, 6).toUpperCase();

   console.log('INSERT into Receteler (id,code,muayeneid) VALUES');
for (let i = 0; i <= 300; i++) {
    const index = i
    console.log(`(${index}, '${Math.random().toString(36).substr(2, 6).toUpperCase()}',${index}),`);
}
x