const NFTinfo=[];
let count=0;
let i=0;


function mintNFT (n,wi,ti,dob)
{
  const o={};
  o.Name=n
  o.DOB=dob
  o.Work_Id=wi
  o.Transaction_Id=ti
  count++;
  NFTinfo.push(o)
}

function listnfts()
{
while( i < NFTinfo.length)
  {
    console.log("\n"+"NFT with ID: "+ NFTinfo[i].Work_Id);
    console.log("---------------------------------------")
    console.log("Name: " + NFTinfo[i].Name );
    console.log("Date Of Birth: " + NFTinfo[i].DOB);
    console.log("Transaction ID: " + NFTinfo[i].Transaction_Id);
    i++;

  }
}

function getTotalSupply()
{
  console.log("\nTotal NFT's Stored in Database: "+ count)
}



mintNFT("Pratik","1","IO-JK9076","29-03-03")
mintNFT("Anshit","2","PL=9OKH9K","89-89-89")


getTotalSupply();

listnfts();
