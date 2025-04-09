document.addEventListener("DOMContentLoaded", () => {
	const productColors = document.querySelectorAll(".product-colors-item");
	const productImages = document.querySelectorAll(".product-images-list-item");

	productColors.forEach((color, index) => {
		color.addEventListener("click", () => {
			// Remove active class from all colors and images
			productColors.forEach((c) => c.classList.remove("active"));
			productImages.forEach((i) => i.classList.remove("active"));

			// Add active class to the selected color and corresponding image
			color.classList.add("active");
			productImages[index].classList.add("active");
		});
	});

	const productSizes = document.querySelector(".product-sizes");

	if (productSizes) {
		const increaseSize = productSizes.querySelector(".size-button.increment");
		const decreaseSize = productSizes.querySelector(".size-button.decrement");
		const sizeInput = productSizes.querySelector("input");

		if (increaseSize && decreaseSize && sizeInput) {
			increaseSize.addEventListener("click", () => {
				sizeInput.value = (parseInt(sizeInput.value) + 1).toString();
			});

			decreaseSize.addEventListener("click", () => {
				sizeInput.value = (parseInt(sizeInput.value) - 1).toString();
			});
		}
	}
});
