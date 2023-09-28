const storedDonationFnc = () => {
    const storedDonation = localStorage.getItem('donation');
    if(storedDonation){
        return JSON.parse(storedDonation)
    }
    return [];
};

const saveDonation = id => {
    const storedDonations = storedDonationFnc();
    const exists = storedDonations.find(donationId => donationId === id);
    if(!exists){
        storedDonations.push(id);
        localStorage.setItem('donation', JSON.stringify(storedDonations));
    }
}
export {storedDonationFnc, saveDonation}