// Prompt the user to input their favorite art type

// Use a switch statement to evaluate the user's input
// If the user enters "PT", set output to "Painting"
// If the user enters "SC", set output to "Sculpture"
// For any other input, set output to "Other"

// Display the result on the webpage, using <strong> to bold the art type

let artType = prompt(
  "What is your favourite art type? (PT = painting, SC = Sculpture, 0 = Other"
);

switch (artType) {
  case "PT":
    output = "Painting";
    break;
  case "SC":
    output = "Sculpture";
    break;
  default:
    output = "Other";
}

document.write("Your favourite art type is <strong>" + output + "</strong>");
