export const handleLs= ():[] => {
	const hiddenList = localStorage.getItem("hidden");
	const parsedArr = JSON.parse(hiddenList!);
	return parsedArr || []
}
