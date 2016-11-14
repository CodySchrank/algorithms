/**
	Created By Cody Schrank
**/

try {
	require(process.env.FOLDER ? require("path").join(__dirname,process.env.FOLDER) : './default');
} catch(e) {
	throw(e)
}