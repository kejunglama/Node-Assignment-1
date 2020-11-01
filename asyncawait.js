function intro(){
	let intro= {name:'Kejung', age:20, gender:'male'}
	return intr;
}

async function getIntro(){
	try{
		var intro= await intro();
		console.log(intr);

	}
	catch(e){
		console.log("Error is :", error)

	}
}
getIntro();

