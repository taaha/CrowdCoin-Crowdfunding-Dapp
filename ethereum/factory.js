import web3 from './web3';
import CampaignFactory from './build/CampaignFactory.json';

const instance = new web3.eth.Contract(
    JSON.parse(CampaignFactory.interface),
    '0xec17581A76e92a29040B2Da1A3F01869B236b7F4' // replace with your factory address
);

export default instance;