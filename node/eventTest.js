var eventHandler = function(){
	console.log("강제 이벤트 발생");
};
process.addListener('test',eventHandler);
process.emit('test');
