function ticketPricing() {
  if (age <= 12) {
    console.log(`Your Movie Ticket Costs $10`);
  } else if (age <= 17) {
    console.log(`Your Movie Ticket Costs $15`);
  } else {
    console.log(`Your Movie Ticket Costs $20`)
  }
}

var age = 10
ticketPricing();
