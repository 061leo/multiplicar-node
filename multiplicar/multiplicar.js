const fs = require('fs');
 

let listarTabla=(base,limite=10)=>{
	//console.log('wwwwwwwwwwwwwwwww'.green);
	//console.log(`Tabla de ${base}`.green);
	//console.log('wwwwwwwwwwwwwwwww'.green);



	for (let i = 1; i <=limite;i++){
		console.log(`${base}*${i}=${base*i}`)
	}	

}





let crearArchivo=(base, limite=10)=>{

	return new Promise((resolve,reject)=>{

		if(!Number(base)){
			reject(`el valor introdicido ${base} no es un numero`);
			return;
		}

		let data='';

		for (let i = 1; i <=limite;i++){
			data+=`${base}*${i}=${base*i}\n`;
		}

		fs.writeFile(`tablas/tabla-${base}-al-${limite}.txt`, data, (err) => {
  			if (err) 
  				reject (err)
  			else
  				resolve(`tabla-${base}-al-${limite}.txt`)
  
});

	});
}
module.exports={
	crearArchivo,
	listarTabla
}


