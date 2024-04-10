const { ethers } = require("hardhat");
const config = require("../src/config.json");
const wait = (seconds) => {
  const milliseconds = seconds * 1000;
  return new Promise((resolve) => setTimeout(resolve, milliseconds));
};

async function main() {
  const { chainId } = await ethers.provider.getNetwork();
  console.log(`Using chainId ${chainId}`);
  const account = await ethers.getSigners();
  const fir = await ethers.getContractAt(
    "FIRRecords",
    config[chainId].FIRRecord.address
  );
  console.log(`MedicalRecord smart contract fetched at ${await fir.address}`);
  let transactionResponse;
  const user1 = account[0];
  transactionResponse = await fir
    .connect(user1)
    .addRecord(
      "Shrey Gupta",
      "7355604117",
      "Aadhar Card",
      "54321",
      "Address1",
      "Jhunsi",
      "Theft Report",
      "ipfsHash"
    );
  await transactionResponse.wait();
  console.log(`Record added with id ${await fir.getRecordId()}`);
  transactionResponse = await fir
    .connect(user1)
    .addRecord(
      "Agam Sachdeva",
      "8299322877",
      "PAN Card",
      "12345",
      "Address2",
      "Kausambhi",
      "Hit and Run",
      "ipfsHash"
    );
  await transactionResponse.wait();
  console.log(`Record added with id ${await fir.getRecordId()}`);
  transactionResponse = await fir
    .connect(user1)
    .addRecord(
      "Minakshi Kumari",
      "9450622258",
      "Voter ID",
      "54328",
      "Address3",
      "Thane",
      "Dowry",
      "ipfsHash"
    );
  await transactionResponse.wait();
  console.log(`Record added with id ${await fir.getRecordId()}`);
  transactionResponse = await fir
    .connect(user1)
    .addRecord(
      "Virat Kohli",
      "7355604117",
      "Aadhar",
      "753159",
      "Address4",
      "Banglore",
      "Beating Bowlers",
      "ipfsHash"
    );
  await transactionResponse.wait();
  console.log(`Record added with id ${await fir.getRecordId()}`);
  transactionResponse = await fir
    .connect(user1)
    .addRecord(
      "Prakhar Kapoor",
      "8299322877",
      "PAN Card",
      "985632",
      "Address5",
      "Noida",
      "Phone Theft",
      "ipfsHash"
    );
  await transactionResponse.wait();
  console.log(`Record added with id ${await fir.getRecordId()}`);
  transactionResponse = await fir
    .connect(user1)
    .addRecord(
      "Kavita Sharma",
      "8299322877",
      "Voter Id",
      "985632",
      "Address6",
      "Coimbatore",
      "Murder",
      "ipfsHash"
    );
  await transactionResponse.wait();
  console.log(`Record added with id ${await fir.getRecordId()}`);
  transactionResponse = await fir
    .connect(user1)
    .addRecord(
      "Krishna Kumar",
      "7355604117",
      "Voter Id",
      "985632",
      "Address7",
      "Coimbatore",
      "Murder",
      "ipfsHash"
    );
    await transactionResponse.wait();
    console.log(`Record added with id ${await fir.getRecordId()}`);
    transactionResponse = await fir
    .connect(user1)
    .addRecord(
      "Shrey Gupta",
      "7355604117",
      "Aadhar Card",
      "54321",
      "Address8",
      "Jhunsi",
      "Theft Report",
      "ipfsHash"
    );
  await transactionResponse.wait();
  console.log(`Record added with id ${await fir.getRecordId()}`);
  transactionResponse = await fir
    .connect(user1)
    .addRecord(
      "Agam Sachdeva",
      "8299322877",
      "PAN Card",
      "12345",
      "Address9",
      "Kausambhi",
      "Hit and Run",
      "ipfsHash"
    );
  await transactionResponse.wait();
  console.log(`Record added with id ${await fir.getRecordId()}`);
  transactionResponse = await fir
    .connect(user1)
    .addRecord(
      "Minakshi Kumari",
      "9450622258",
      "Voter ID",
      "54328",
      "Address10",
      "Thane",
      "Dowry",
      "ipfsHash"
    );
  await transactionResponse.wait();
  console.log(`Record added with id ${await fir.getRecordId()}`);
  transactionResponse = await fir
    .connect(user1)
    .addRecord(
      "Virat Kohli",
      "7355604117",
      "Aadhar",
      "753159",
      "Address11",
      "Banglore",
      "Beating Bowlers",
      "ipfsHash"
    );
  await transactionResponse.wait();
  console.log(`Record added with id ${await fir.getRecordId()}`);
  transactionResponse = await fir
    .connect(user1)
    .addRecord(
      "Prakhar Kapoor",
      "8299322877",
      "PAN Card",
      "985632",
      "Address12",
      "Noida",
      "Phone Theft",
      "ipfsHash"
    );
  await transactionResponse.wait();
  console.log(`Record added with id ${await fir.getRecordId()}`);
  transactionResponse = await fir
    .connect(user1)
    .addRecord(
      "Kavita Sharma",
      "8299322877",
      "Voter Id",
      "985632",
      "Address13",
      "Coimbatore",
      "Murder",
      "ipfsHash"
    );
  await transactionResponse.wait();
  console.log(`Record added with id ${await fir.getRecordId()}`);
  transactionResponse = await fir
    .connect(user1)
    .addRecord(
      "Krishna Kumar",
      "7355604117",
      "Voter Id",
      "985632",
      "Address14",
      "Coimbatore",
      "Murder",
      "ipfsHash"
    );
  await transactionResponse.wait();
  transactionResponse = await fir
    .connect(user1)
    .addRecord(
      "Shrey Gupta",
      "7355604117",
      "Aadhar Card",
      "54321",
      "Address15",
      "Jhunsi",
      "Theft Report",
      "ipfsHash"
    );
  await transactionResponse.wait();
  console.log(`Record added with id ${await fir.getRecordId()}`);
  transactionResponse = await fir
    .connect(user1)
    .addRecord(
      "Agam Sachdeva",
      "8299322877",
      "PAN Card",
      "12345",
      "Address16",
      "Kausambhi",
      "Hit and Run",
      "ipfsHash"
    );
  await transactionResponse.wait();
  console.log(`Record added with id ${await fir.getRecordId()}`);
  transactionResponse = await fir
    .connect(user1)
    .addRecord(
      "Minakshi Kumari",
      "9450622258",
      "Voter ID",
      "54328",
      "Address17",
      "Thane",
      "Dowry",
      "ipfsHash"
    );
  await transactionResponse.wait();
  console.log(`Record added with id ${await fir.getRecordId()}`);
  transactionResponse = await fir
    .connect(user1)
    .addRecord(
      "Virat Kohli",
      "7355604117",
      "Aadhar",
      "753159",
      "Address18",
      "Banglore",
      "Beating Bowlers",
      "ipfsHash"
    );
  await transactionResponse.wait();
  console.log(`Record added with id ${await fir.getRecordId()}`);
  transactionResponse = await fir
    .connect(user1)
    .addRecord(
      "Prakhar Kapoor",
      "8299322877",
      "PAN Card",
      "985632",
      "Address19",
      "Noida",
      "Phone Theft",
      "ipfsHash"
    );
  await transactionResponse.wait();
  console.log(`Record added with id ${await fir.getRecordId()}`);
  transactionResponse = await fir
    .connect(user1)
    .addRecord(
      "Kavita Sharma",
      "8299322877",
      "Voter Id",
      "985632",
      "Address20",
      "Coimbatore",
      "Murder",
      "ipfsHash"
    );
  await transactionResponse.wait();
  console.log(`Record added with id ${await fir.getRecordId()}`);
  transactionResponse = await fir
    .connect(user1)
    .addRecord(
      "Krishna Kumar",
      "7355604117",
      "Voter Id",
      "985632",
      "Address21",
      "Coimbatore",
      "Murder",
      "ipfsHash"
    );
    await transactionResponse.wait();
console.log(`Record added with id ${await fir.getRecordId()}`);
    transactionResponse = await fir
    .connect(user1)
    .addRecord(
      "Shrey Gupta",
      "7355604117",
      "Aadhar Card",
      "54321",
      "Address22",
      "Jhunsi",
      "Theft Report",
      "ipfsHash"
    );
  await transactionResponse.wait();
  console.log(`Record added with id ${await fir.getRecordId()}`);
  transactionResponse = await fir
    .connect(user1)
    .addRecord(
      "Agam Sachdeva",
      "8299322877",
      "PAN Card",
      "12345",
      "Address23",
      "Kausambhi",
      "Hit and Run",
      "ipfsHash"
    );
  await transactionResponse.wait();
  console.log(`Record added with id ${await fir.getRecordId()}`);
  transactionResponse = await fir
    .connect(user1)
    .addRecord(
      "Minakshi Kumari",
      "9450622258",
      "Voter ID",
      "54328",
      "Address24",
      "Thane",
      "Dowry",
      "ipfsHash"
    );
  await transactionResponse.wait();
  console.log(`Record added with id ${await fir.getRecordId()}`);
  transactionResponse = await fir
    .connect(user1)
    .addRecord(
      "Virat Kohli",
      "7355604117",
      "Aadhar",
      "753159",
      "Address25",
      "Banglore",
      "Beating Bowlers",
      "ipfsHash"
    );
  await transactionResponse.wait();
  console.log(`Record added with id ${await fir.getRecordId()}`);
  transactionResponse = await fir
    .connect(user1)
    .addRecord(
      "Prakhar Kapoor",
      "8299322877",
      "PAN Card",
      "985632",
      "Address26",
      "Noida",
      "Phone Theft",
      "ipfsHash"
    );
  await transactionResponse.wait();
  console.log(`Record added with id ${await fir.getRecordId()}`);
  transactionResponse = await fir
    .connect(user1)
    .addRecord(
      "Kavita Sharma",
      "8299322877",
      "Voter Id",
      "985632",
      "Address27",
      "Coimbatore",
      "Murder",
      "ipfsHash"
    );
  await transactionResponse.wait();
  console.log(`Record added with id ${await fir.getRecordId()}`);
  transactionResponse = await fir
    .connect(user1)
    .addRecord(
      "Krishna Kumar",
      "7355604117",
      "Voter Id",
      "985632",
      "Address28",
      "Coimbatore",
      "Murder",
      "ipfsHash"
    );
    await transactionResponse.wait();
    console.log(`Record added with id ${await fir.getRecordId()}`);
    transactionResponse = await fir
    .connect(user1)
    .addRecord(
      "Shrey Gupta",
      "7355604117",
      "Aadhar Card",
      "54321",
      "Address29",
      "Jhunsi",
      "Theft Report",
      "ipfsHash"
    );
  await transactionResponse.wait();
  console.log(`Record added with id ${await fir.getRecordId()}`);
  transactionResponse = await fir
    .connect(user1)
    .addRecord(
      "Agam Sachdeva",
      "8299322877",
      "PAN Card",
      "12345",
      "Address30",
      "Kausambhi",
      "Hit and Run",
      "ipfsHash"
    );
  await transactionResponse.wait();
  console.log(`Record added with id ${await fir.getRecordId()}`);
  transactionResponse = await fir
    .connect(user1)
    .addRecord(
      "Minakshi Kumari",
      "9450622258",
      "Voter ID",
      "54328",
      "Address31",
      "Thane",
      "Dowry",
      "ipfsHash"
    );
  await transactionResponse.wait();
  console.log(`Record added with id ${await fir.getRecordId()}`);
  transactionResponse = await fir
    .connect(user1)
    .addRecord(
      "Virat Kohli",
      "7355604117",
      "Aadhar",
      "753159",
      "Address32",
      "Banglore",
      "Beating Bowlers",
      "ipfsHash"
    );
  await transactionResponse.wait();
  console.log(`Record added with id ${await fir.getRecordId()}`);
  transactionResponse = await fir
    .connect(user1)
    .addRecord(
      "Prakhar Kapoor",
      "8299322877",
      "PAN Card",
      "985632",
      "Address33",
      "Noida",
      "Phone Theft",
      "ipfsHash"
    );
  await transactionResponse.wait();
  console.log(`Record added with id ${await fir.getRecordId()}`);
  transactionResponse = await fir
    .connect(user1)
    .addRecord(
      "Kavita Sharma",
      "8299322877",
      "Voter Id",
      "985632",
      "Address34",
      "Coimbatore",
      "Murder",
      "ipfsHash"
    );
  await transactionResponse.wait();
  console.log(`Record added with id ${await fir.getRecordId()}`);
  transactionResponse = await fir
    .connect(user1)
    .addRecord(
      "Krishna Kumar",
      "7355604117",
      "Voter Id",
      "985632",
      "Address35",
      "Coimbatore",
      "Murder",
      "ipfsHash"
    );
  await transactionResponse.wait();
  transactionResponse = await fir
    .connect(user1)
    .addRecord(
      "Shrey Gupta",
      "7355604117",
      "Aadhar Card",
      "54321",
      "Address36",
      "Jhunsi",
      "Theft Report",
      "ipfsHash"
    );
  await transactionResponse.wait();
  console.log(`Record added with id ${await fir.getRecordId()}`);
  transactionResponse = await fir
    .connect(user1)
    .addRecord(
      "Agam Sachdeva",
      "8299322877",
      "PAN Card",
      "12345",
      "Address37",
      "Kausambhi",
      "Hit and Run",
      "ipfsHash"
    );
  await transactionResponse.wait();
  console.log(`Record added with id ${await fir.getRecordId()}`);
  transactionResponse = await fir
    .connect(user1)
    .addRecord(
      "Minakshi Kumari",
      "9450622258",
      "Voter ID",
      "54328",
      "Address38",
      "Thane",
      "Dowry",
      "ipfsHash"
    );
  await transactionResponse.wait();
  console.log(`Record added with id ${await fir.getRecordId()}`);
  transactionResponse = await fir
    .connect(user1)
    .addRecord(
      "Virat Kohli",
      "7355604117",
      "Aadhar",
      "753159",
      "Address39",
      "Banglore",
      "Beating Bowlers",
      "ipfsHash"
    );
  await transactionResponse.wait();
  console.log(`Record added with id ${await fir.getRecordId()}`);
  transactionResponse = await fir
    .connect(user1)
    .addRecord(
      "Prakhar Kapoor",
      "8299322877",
      "PAN Card",
      "985632",
      "Address40",
      "Noida",
      "Phone Theft",
      "ipfsHash"
    );
  await transactionResponse.wait();
  console.log(`Record added with id ${await fir.getRecordId()}`);
  transactionResponse = await fir
    .connect(user1)
    .addRecord(
      "Kavita Sharma",
      "8299322877",
      "Voter Id",
      "985632",
      "Address41",
      "Coimbatore",
      "Murder",
      "ipfsHash"
    );
  await transactionResponse.wait();
  console.log(`Record added with id ${await fir.getRecordId()}`);
  transactionResponse = await fir
    .connect(user1)
    .addRecord(
      "Krishna Kumar",
      "7355604117",
      "Voter Id",
      "985632",
      "Address42",
      "Coimbatore",
      "Murder",
      "ipfsHash"
    );
  await transactionResponse.wait();
  console.log(`Record added with id ${await fir.getRecordId()}`);
  transactionResponse = await fir
  .connect(user1)
  .addRecord(
    "Shrey Gupta",
    "7355604117",
    "Aadhar Card",
    "54321",
    "Address43",
    "Jhunsi",
    "Theft Report",
    "ipfsHash"
  );
await transactionResponse.wait();
console.log(`Record added with id ${await fir.getRecordId()}`);
transactionResponse = await fir
  .connect(user1)
  .addRecord(
    "Agam Sachdeva",
    "8299322877",
    "PAN Card",
    "12345",
    "Address44",
    "Kausambhi",
    "Hit and Run",
    "ipfsHash"
  );
await transactionResponse.wait();
console.log(`Record added with id ${await fir.getRecordId()}`);
transactionResponse = await fir
  .connect(user1)
  .addRecord(
    "Minakshi Kumari",
    "9450622258",
    "Voter ID",
    "54328",
    "Address45",
    "Thane",
    "Dowry",
    "ipfsHash"
  );
await transactionResponse.wait();
console.log(`Record added with id ${await fir.getRecordId()}`);
transactionResponse = await fir
  .connect(user1)
  .addRecord(
    "Virat Kohli",
    "7355604117",
    "Aadhar",
    "753159",
    "Address46",
    "Banglore",
    "Beating Bowlers",
    "ipfsHash"
  );
await transactionResponse.wait();
console.log(`Record added with id ${await fir.getRecordId()}`);
transactionResponse = await fir
  .connect(user1)
  .addRecord(
    "Prakhar Kapoor",
    "8299322877",
    "PAN Card",
    "985632",
    "Address47",
    "Noida",
    "Phone Theft",
    "ipfsHash"
  );
await transactionResponse.wait();
console.log(`Record added with id ${await fir.getRecordId()}`);
transactionResponse = await fir
  .connect(user1)
  .addRecord(
    "Kavita Sharma",
    "8299322877",
    "Voter Id",
    "985632",
    "Address48",
    "Coimbatore",
    "Murder",
    "ipfsHash"
  );
await transactionResponse.wait();
console.log(`Record added with id ${await fir.getRecordId()}`);
transactionResponse = await fir
  .connect(user1)
  .addRecord(
    "Krishna Kumar",
    "7355604117",
    "Voter Id",
    "985632",
    "Address49",
    "Coimbatore",
    "Murder",
    "ipfsHash"
  );
  await transactionResponse.wait();
  console.log(`Record added with id ${await fir.getRecordId()}`);
  transactionResponse = await fir
  .connect(user1)
  .addRecord(
    "Shrey Gupta",
    "7355604117",
    "Aadhar Card",
    "54321",
    "Address50",
    "Jhunsi",
    "Theft Report",
    "ipfsHash"
  );
await transactionResponse.wait();
console.log(`Record added with id ${await fir.getRecordId()}`);
transactionResponse = await fir
  .connect(user1)
  .addRecord(
    "Agam Sachdeva",
    "8299322877",
    "PAN Card",
    "12345",
    "Address51",
    "Kausambhi",
    "Hit and Run",
    "ipfsHash"
  );
await transactionResponse.wait();
console.log(`Record added with id ${await fir.getRecordId()}`);
transactionResponse = await fir
  .connect(user1)
  .addRecord(
    "Minakshi Kumari",
    "9450622258",
    "Voter ID",
    "54328",
    "Address52",
    "Thane",
    "Dowry",
    "ipfsHash"
  );
await transactionResponse.wait();
console.log(`Record added with id ${await fir.getRecordId()}`);
transactionResponse = await fir
  .connect(user1)
  .addRecord(
    "Virat Kohli",
    "7355604117",
    "Aadhar",
    "753159",
    "Address53",
    "Banglore",
    "Beating Bowlers",
    "ipfsHash"
  );
await transactionResponse.wait();
console.log(`Record added with id ${await fir.getRecordId()}`);
transactionResponse = await fir
  .connect(user1)
  .addRecord(
    "Prakhar Kapoor",
    "8299322877",
    "PAN Card",
    "985632",
    "Address54",
    "Noida",
    "Phone Theft",
    "ipfsHash"
  );
await transactionResponse.wait();
console.log(`Record added with id ${await fir.getRecordId()}`);
transactionResponse = await fir
  .connect(user1)
  .addRecord(
    "Kavita Sharma",
    "8299322877",
    "Voter Id",
    "985632",
    "Address55",
    "Coimbatore",
    "Murder",
    "ipfsHash"
  );
await transactionResponse.wait();
console.log(`Record added with id ${await fir.getRecordId()}`);
transactionResponse = await fir
  .connect(user1)
  .addRecord(
    "Krishna Kumar",
    "7355604117",
    "Voter Id",
    "985632",
    "Address56",
    "Coimbatore",
    "Murder",
    "ipfsHash"
  );
await transactionResponse.wait();
transactionResponse = await fir
  .connect(user1)
  .addRecord(
    "Shrey Gupta",
    "7355604117",
    "Aadhar Card",
    "54321",
    "Address57",
    "Jhunsi",
    "Theft Report",
    "ipfsHash"
  );
await transactionResponse.wait();
console.log(`Record added with id ${await fir.getRecordId()}`);
transactionResponse = await fir
  .connect(user1)
  .addRecord(
    "Agam Sachdeva",
    "8299322877",
    "PAN Card",
    "12345",
    "Address58",
    "Kausambhi",
    "Hit and Run",
    "ipfsHash"
  );
await transactionResponse.wait();
console.log(`Record added with id ${await fir.getRecordId()}`);
transactionResponse = await fir
  .connect(user1)
  .addRecord(
    "Minakshi Kumari",
    "9450622258",
    "Voter ID",
    "54328",
    "Address59",
    "Thane",
    "Dowry",
    "ipfsHash"
  );
await transactionResponse.wait();
console.log(`Record added with id ${await fir.getRecordId()}`);
transactionResponse = await fir
  .connect(user1)
  .addRecord(
    "Virat Kohli",
    "7355604117",
    "Aadhar",
    "753159",
    "Address60",
    "Banglore",
    "Beating Bowlers",
    "ipfsHash"
  );
await transactionResponse.wait();
console.log(`Record added with id ${await fir.getRecordId()}`);
transactionResponse = await fir
  .connect(user1)
  .addRecord(
    "Prakhar Kapoor",
    "8299322877",
    "PAN Card",
    "985632",
    "Address61",
    "Noida",
    "Phone Theft",
    "ipfsHash"
  );
await transactionResponse.wait();
console.log(`Record added with id ${await fir.getRecordId()}`);
transactionResponse = await fir
  .connect(user1)
  .addRecord(
    "Kavita Sharma",
    "8299322877",
    "Voter Id",
    "985632",
    "Address62",
    "Coimbatore",
    "Murder",
    "ipfsHash"
  );
await transactionResponse.wait();
console.log(`Record added with id ${await fir.getRecordId()}`);
transactionResponse = await fir
  .connect(user1)
  .addRecord(
    "Krishna Kumar",
    "7355604117",
    "Voter Id",
    "985632",
    "Address63",
    "Coimbatore",
    "Murder",
    "ipfsHash"
  );
  await transactionResponse.wait();
console.log(`Record added with id ${await fir.getRecordId()}`);
  transactionResponse = await fir
  .connect(user1)
  .addRecord(
    "Shrey Gupta",
    "7355604117",
    "Aadhar Card",
    "54321",
    "Address64",
    "Jhunsi",
    "Theft Report",
    "ipfsHash"
  );
await transactionResponse.wait();
console.log(`Record added with id ${await fir.getRecordId()}`);
transactionResponse = await fir
  .connect(user1)
  .addRecord(
    "Agam Sachdeva",
    "8299322877",
    "PAN Card",
    "12345",
    "Address65",
    "Kausambhi",
    "Hit and Run",
    "ipfsHash"
  );
await transactionResponse.wait();
console.log(`Record added with id ${await fir.getRecordId()}`);
transactionResponse = await fir
  .connect(user1)
  .addRecord(
    "Minakshi Kumari",
    "9450622258",
    "Voter ID",
    "54328",
    "Address66",
    "Thane",
    "Dowry",
    "ipfsHash"
  );
await transactionResponse.wait();
console.log(`Record added with id ${await fir.getRecordId()}`);
transactionResponse = await fir
  .connect(user1)
  .addRecord(
    "Virat Kohli",
    "7355604117",
    "Aadhar",
    "753159",
    "Address67",
    "Banglore",
    "Beating Bowlers",
    "ipfsHash"
  );
await transactionResponse.wait();
console.log(`Record added with id ${await fir.getRecordId()}`);
transactionResponse = await fir
  .connect(user1)
  .addRecord(
    "Prakhar Kapoor",
    "8299322877",
    "PAN Card",
    "985632",
    "Address68",
    "Noida",
    "Phone Theft",
    "ipfsHash"
  );
await transactionResponse.wait();
console.log(`Record added with id ${await fir.getRecordId()}`);
transactionResponse = await fir
  .connect(user1)
  .addRecord(
    "Kavita Sharma",
    "8299322877",
    "Voter Id",
    "985632",
    "Address69",
    "Coimbatore",
    "Murder",
    "ipfsHash"
  );
await transactionResponse.wait();
console.log(`Record added with id ${await fir.getRecordId()}`);
transactionResponse = await fir
  .connect(user1)
  .addRecord(
    "Krishna Kumar",
    "7355604117",
    "Voter Id",
    "985632",
    "Address70",
    "Coimbatore",
    "Murder",
    "ipfsHash"
  );
  await transactionResponse.wait();
  console.log(`Record added with id ${await fir.getRecordId()}`);
  transactionResponse = await fir
  .connect(user1)
  .addRecord(
    "Shrey Gupta",
    "7355604117",
    "Aadhar Card",
    "54321",
    "Address71",
    "Jhunsi",
    "Theft Report",
    "ipfsHash"
  );
await transactionResponse.wait();
console.log(`Record added with id ${await fir.getRecordId()}`);
transactionResponse = await fir
  .connect(user1)
  .addRecord(
    "Agam Sachdeva",
    "8299322877",
    "PAN Card",
    "12345",
    "Address72",
    "Kausambhi",
    "Hit and Run",
    "ipfsHash"
  );
await transactionResponse.wait();
console.log(`Record added with id ${await fir.getRecordId()}`);
transactionResponse = await fir
  .connect(user1)
  .addRecord(
    "Minakshi Kumari",
    "9450622258",
    "Voter ID",
    "54328",
    "Address73",
    "Thane",
    "Dowry",
    "ipfsHash"
  );
await transactionResponse.wait();
console.log(`Record added with id ${await fir.getRecordId()}`);
transactionResponse = await fir
  .connect(user1)
  .addRecord(
    "Virat Kohli",
    "7355604117",
    "Aadhar",
    "753159",
    "Address74",
    "Banglore",
    "Beating Bowlers",
    "ipfsHash"
  );
await transactionResponse.wait();
console.log(`Record added with id ${await fir.getRecordId()}`);
transactionResponse = await fir
  .connect(user1)
  .addRecord(
    "Prakhar Kapoor",
    "8299322877",
    "PAN Card",
    "985632",
    "Address75",
    "Noida",
    "Phone Theft",
    "ipfsHash"
  );
await transactionResponse.wait();
console.log(`Record added with id ${await fir.getRecordId()}`);
transactionResponse = await fir
  .connect(user1)
  .addRecord(
    "Kavita Sharma",
    "8299322877",
    "Voter Id",
    "985632",
    "Address76",
    "Coimbatore",
    "Murder",
    "ipfsHash"
  );
await transactionResponse.wait();
console.log(`Record added with id ${await fir.getRecordId()}`);
transactionResponse = await fir
  .connect(user1)
  .addRecord(
    "Krishna Kumar",
    "7355604117",
    "Voter Id",
    "985632",
    "Address77",
    "Coimbatore",
    "Murder",
    "ipfsHash"
  );
await transactionResponse.wait();
transactionResponse = await fir
  .connect(user1)
  .addRecord(
    "Shrey Gupta",
    "7355604117",
    "Aadhar Card",
    "54321",
    "Address78",
    "Jhunsi",
    "Theft Report",
    "ipfsHash"
  );
await transactionResponse.wait();
console.log(`Record added with id ${await fir.getRecordId()}`);
transactionResponse = await fir
  .connect(user1)
  .addRecord(
    "Agam Sachdeva",
    "8299322877",
    "PAN Card",
    "12345",
    "Address79",
    "Kausambhi",
    "Hit and Run",
    "ipfsHash"
  );
await transactionResponse.wait();
console.log(`Record added with id ${await fir.getRecordId()}`);
transactionResponse = await fir
  .connect(user1)
  .addRecord(
    "Minakshi Kumari",
    "9450622258",
    "Voter ID",
    "54328",
    "Address80",
    "Thane",
    "Dowry",
    "ipfsHash"
  );
await transactionResponse.wait();
console.log(`Record added with id ${await fir.getRecordId()}`);
transactionResponse = await fir
  .connect(user1)
  .addRecord(
    "Virat Kohli",
    "7355604117",
    "Aadhar",
    "753159",
    "Address81",
    "Banglore",
    "Beating Bowlers",
    "ipfsHash"
  );
await transactionResponse.wait();
console.log(`Record added with id ${await fir.getRecordId()}`);
transactionResponse = await fir
  .connect(user1)
  .addRecord(
    "Prakhar Kapoor",
    "8299322877",
    "PAN Card",
    "985632",
    "Address82",
    "Noida",
    "Phone Theft",
    "ipfsHash"
  );
await transactionResponse.wait();
console.log(`Record added with id ${await fir.getRecordId()}`);
transactionResponse = await fir
  .connect(user1)
  .addRecord(
    "Kavita Sharma",
    "8299322877",
    "Voter Id",
    "985632",
    "Address83",
    "Coimbatore",
    "Murder",
    "ipfsHash"
  );
await transactionResponse.wait();
console.log(`Record added with id ${await fir.getRecordId()}`);
transactionResponse = await fir
  .connect(user1)
  .addRecord(
    "Krishna Kumar",
    "7355604117",
    "Voter Id",
    "985632",
    "Address84",
    "Coimbatore",
    "Murder",
    "ipfsHash"
  );
await transactionResponse.wait();

  console.log(`Record added with id ${await fir.getRecordId()}`);
  transactionResponse = await fir.connect(user1).deleteRecord(69);
  await transactionResponse.wait();
  console.log(`Record deleted`);
  transactionResponse = await fir.connect(user1).deleteRecord(55);
  await transactionResponse.wait();
  console.log(`Record deleted`);
}
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });