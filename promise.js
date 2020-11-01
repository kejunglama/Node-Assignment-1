let intro =()=>{
    return new Promise((resolve,reject)=>{
        let intro = [{name:'Kejung',
		        	age:20, 
		        	gender:'male'}]
        if (intro.length>0){
            resolve(intro)}
            else{
                reject ("This is an empty Array")
            }
})
} 
intro().then((result)=>{
    console.log("Success", result);
}).catch((error)=>{
    console.log("Error", error)
})

