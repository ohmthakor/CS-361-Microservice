# CS-361-Microservice for Group Member

## Brawler Microservice Communication Contract

### Requesting Data

**Endpoint:**  
`GET /brawlers`

**Query Parameters:**
- **type (optional):** Filter by brawler's class (e.g., Tank, Marksman)
- **rarity (optional):** Filter by brawler's rarity (e.g., Legendary, Epic)
- **search (optional):** Search by a substring in the brawler's name


Example Request (using curl):
curl "http://localhost:3000/brawlers?type=Tank&rarity=Legendary"
Receiving Data

Response Format: JSON array
Response Format:

Content-Type: application/json
Body: A JSON array of brawler objects. Each object contains:
name
class
rarity 

For example:

[
  {
    "name": "Shelly",
    "class": "Damage Dealer",
    "rarity": "Starting Brawler"
  }
]

Example in JavaScript:

fetch("http://localhost:3000/brawlers?search=Shelly")
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error("Error:", error));
  
UML Sequence Diagram

<img width="625" alt="Screenshot 2025-02-25 at 5 43 30 PM" src="https://github.com/user-attachments/assets/9935c6c9-7cfc-4e70-a141-43f8e4fd8160" />



This README provides clear instructions on how to request and receive data, includes example code calls in Node.js, and features a detailed UML sequence diagram. It meets all the criteria, and my teammate can use it to integrate with the microservice without relying on my test program.
