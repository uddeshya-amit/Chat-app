function formatCreatedAt(createdAtString) {
	// Convert the createdAtString to a JavaScript Date object
	const createdAtDate = new Date(createdAtString);

	// Get the hours and minutes
	const hours = createdAtDate.getHours();
	const minutes = createdAtDate.getMinutes();

	// Format hours and minutes with leading zeros if necessary
	const formattedHours = hours < 10 ? "0" + hours : hours;
	const formattedMinutes = minutes < 10 ? "0" + minutes : minutes;

	// Return the formatted time
	return `${formattedHours}:${formattedMinutes}`;
}
export default formatCreatedAt;

// // Example usage:
// const createdAtString = "2024-06-01T12:30:00Z"; // Assuming this is the createdAt string from MongoDB
// const formattedTime = formatCreatedAt(createdAtString);
// console.log("Formatted createdAt time:", formattedTime);
