//Write a program to take 10 numbers in an array and count the number of positive, negative numbers and zeros


const  number=[6,0,35,-42,-12,-32,0,423,-432,65]


// varible for counting fumber of time they occur 
var positive=0 
var negtive=0 
var zero=0 

for (let i=0;i<number.length;i++){
	if(number[i]==0){
		zero++
	}
	else if(number[i]<0){
		negtive++
	}
	else if(number[i]>0){
		positive++
	}	

}

console.log(positive,negtive,zero)