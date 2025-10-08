
{
  "hotelName": "Grand City Hotel",
  "checkInDate": "2024-05-15", //Comma needed
  "checkOutDate": "2024-05-20",
  "guests": [
    {
      "name": "Alice Johnson", //qutation mark needed
      "age": 30,
      "email": "alice.johnson@example.com"
    },
    {
      "name": "Bob Smith",
      "age": null, // we can't use "undefined" on JSON. It will result in invalid JSON, instead we use "null"
      "email": "bob.smith@example"
    }
  ],
  "roomDetails": {
    "type": "Suite",
    "pricePerNight": 200,
    "amenities": ["WiFi", "Breakfast", "Parking"]// no need to use comma after "Parking" at the end of the array.
  }
}




// ============================================
// 🤔 Follow-Up Questions
// ============================================

/*
💬 Reflect and answer the following:

1️⃣ What tools or techniques did you use to identify the errors?

I used VS Code’s error highlighting feature, which automatically shows syntax mistakes in real time.

2️⃣ How did you confirm that your corrected JSON file was valid?

After fixing the issues, the red highlights in VS Code disappeared.I also verified the JSON using 
Code Beautify’s JSON Validator, which confirmed that it was valid.

3️⃣ Which errors were the most difficult to spot? Why?

Most of the errors were easy to identify, but trailing commas or misplaced brackets can be trickier to notice 
because they are small and don’t always stand out visually.

4️⃣ What strategies can help you avoid these kinds of errors in the future?

I plan to continue using syntax highlighting in VS Code and online JSON validators like Code Beautify to quickly
catch and fix errors before saving my file.


*/
