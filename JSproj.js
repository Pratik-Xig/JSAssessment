const NFTinfo=[];


function mintNFT (n,wi,ti)
{
  const o={};
  o.Name=n
  o.Work_Id=wi
  o.Transaction_Id=ti
  NFTinfo.push(o)
}



function listnfts()
{
for(let i=0;i<NFTinfo.length;i++)
  {
    console.log("\n"+"ID: "+ (i+1) );
    console.log(NFTinfo[i]);
  }
}



function getTotalSupply()
{
  console.log("\nTotal NFT's Stroed in Database: "+ NFTinfo.length)
}



mintNFT("Pratik","69877","IO-JK9076")
mintNFT("Anshit","89439","PL=9OKH9K")

getTotalSupply();
listnfts();
