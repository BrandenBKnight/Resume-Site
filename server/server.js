const express = require("express");
const rateLimit = require("express-rate-limit");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3000;

// Enable rate limiting.
const limiter = rateLimit({
	windowMs: 15 * 60 * 1000, // 15 minutes
	max: 100, // limit each IP to 100 requests per windowMs
});

// Apply rate limiting to all requests.
app.use(limiter);

app.use(express.static(path.join(__dirname, "../public")));

app.get("*", (req, res) => {
	res.sendFile(path.join(__dirname, "../public/index.html"));
});

app.listen(PORT, () => {
	console.log(`Server is running on port ${PORT}`);
});
