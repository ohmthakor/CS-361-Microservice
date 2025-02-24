# CS-361-Microservice-A

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

Below is a detailed UML sequence diagram showing how a request and response flow works:

sequenceDiagram

    participant Client as Test Program (Client)
    participant MS as Brawlers Microservice
    participant DS as Data Store (brawlers.json)

    %% Client makes a GET request with query parameters
    Client->>MS: GET /brawlers?type=Tank&rarity=Legendary
    %% Microservice loads the data from the data store
    MS->>DS: Load brawlers.json
    %% Microservice filters the data based on query parameters
    MS->>MS: Filter by type, rarity, and/or search term
    %% Microservice returns the filtered JSON data
    MS->>Client: Return filtered brawler objects (JSON)



This README provides clear instructions on how to request and receive data, includes example code calls in Node.js, and features a detailed UML sequence diagram. It meets all the criteria, and your teammate can use it to integrate with the microservice without relying on your test program.
