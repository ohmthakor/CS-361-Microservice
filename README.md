# CS-361-Microservice-A

## Brawler Microservice Communication Contract

### Requesting Data

Endpoint: /brawlers
Method: GET
Query Parameters:
type (optional): Filter by brawler's class (e.g., Tank, Marksman)
rarity (optional): Filter by brawler's rarity (e.g., Legendary, Epic)
search (optional): Search by a substring in the brawler's name


Example Request (using curl):
curl "http://localhost:3000/brawlers?type=Tank&rarity=Legendary"
Receiving Data

Response Format: JSON array
Content-Type: application/json
The response will include an array of brawler objects. For example:

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

Below is a detailed UML sequence diagram showing how a request and response flow works:

sequenceDiagram
    participant Client
    participant Server
    participant DataStore

    Client->>Server: GET /brawlers?type=Tank&rarity=Legendary
    Server->>DataStore: Load brawlers.json
    Server->>Server: Filter data by type, rarity, search
    Server->>Client: Return filtered JSON data


