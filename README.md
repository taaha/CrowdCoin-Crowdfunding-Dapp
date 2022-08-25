# CrowdCoin Dapp
This is a dapp for crowdfunding (Idea based on popular crowdfunding app kickstartr). An inventor can create a campaign for funding. Different people can contribute to that campaign but these contributions will not be passed immediately to inventor. Whenever inventor want to spend money, he will have to put a request for a certain amount which will be only accepted if it is approved by majority of contributors. Anyone can see campaign balance and status of different requests.
  
-Smart Contract is written in solidity  
-Front End is written in reactjs (using semantic-ui-react)
  
  
## Please follow these steps to run code succesfully
### Changes in deploy.js
-Enter your wallet pneumonic phrase on line 6. remove dummy phrase  
-Enter your infura endpoint on line 8.  
  
### Changes in web3.js
-Enter your infura endpoint on line 12.  

### Changes in factory.js
**These changes will be done after running command node deploy.js**  
-Copy factory contract address.  
-Place address in factory.js line 6.  
  
  
### Go to project directory in terminal and execute following commands
```
npm init
npm install ganache-cli mocha solc@0.4.17 fs-extra web3
npm install truffle hardware wallet
cd ethereum
node deploy.js
npm run dev
```
## Few Screenshots of frontend
Main Page
![Main Page](https://user-images.githubusercontent.com/5251294/186689889-a58aaefb-cf65-4e4d-8b17-1b1884b023f3.png)
  
Contribution Page
![Contribution Page](https://user-images.githubusercontent.com/5251294/186690823-266deefb-0e49-4549-af21-aec2dd104bbf.png)
  
Campaign Page
![Campaign Page](https://user-images.githubusercontent.com/5251294/186691043-423755d0-8141-46b2-9c03-63786df828d3.png)
  
Request Status Page
![Requests Page](https://user-images.githubusercontent.com/5251294/186690316-3bb5e9dd-c872-4989-b6b0-d7eca3ede21f.png)
  
  
## Feel free to build and improve this code
*May the fork be with you* - Darth Panda :panda_face:
