//Write a program to take a string and count the occurence of each character in the string.



const str="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Eu facilisis sed odio morbi quis commodo odio. Amet tellus cras adipiscing enim eu turpis egestas pretium. Cursus sit amet dictum sit amet justo donec enim diam. Feugiat pretium nibh ipsum consequat nisl vel pretium lectus. Faucibus interdum posuere lorem ipsum dolor. In vitae turpis massa sed elementum tempus. Odio euismod lacinia at quis risus. Risus commodo viverra "

var arr=str.split("")
count_occurrence={}  //



arr.map(function(i){
	
	if(i==" "){}	

	else if(count_occurrence[i]){
		count_occurrence[i]=count_occurrence[i]+1
	}
	else{
		count_occurrence[i]=1	
	}

})



console.log(count_occurrence)

