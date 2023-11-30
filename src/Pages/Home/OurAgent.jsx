
const OurAgent = () => {
    return (
        <div className="bg-[#F9F8F3] ">
            <div className="flex justify-between items-center p-10">
                <div className="pr-40 pl-20">
                    <h1 className="font font-semibold text-2xl mb-8">
                        Denver Residence are the brightest and fastest growing real estate brokerage firm in Denver
                    </h1>
                    <p className="text-[#8E7A7A] mb-5">Founded in 2012, Residence Real Estate Group is a locally and female owned, residential real estate agency with offices throughout Quebec area.</p>
                    <p className="text-[#8E7A7A] mb-5">Our mission is to bring a more personalized approach to the home buying and selling process – and we’re committed to the communities we serve.</p>
                    <div className="flex gap-6">
                        <button className="btn primaryBtn">About us</button>
                        <button className="btn btn-outline border-[#BC8664] hover:bg-[#BC8664] hover:border-[#BC8664]">Contact us</button>

                    </div>
                </div>
                <div className="grid grid-cols-2 gap-10">
                    <div >
                        <img className="rounded-lg" src="https://i.ibb.co/mBV2Cyk/person7-500x328.webp" alt="" />
                        <h3 className="font font-semibold">
                            Maria Barlow</h3>
                        <p className="font">
                            sales executive</p>
                    </div>
                    <div>
                        <img className="rounded-lg" src="https://i.ibb.co/CwmHwm5/person2-500x328.webp" alt="" />
                        <h3 className="font font-semibold">
                            Maria Barlow</h3>
                        <p className="font">
                            sales executive</p>
                    </div>
                    <div>
                        <img className="rounded-lg" src="https://i.ibb.co/qrG1MFj/person4-500x328.webp" alt="" />
                        <h3 className="font font-semibold">
                            Maria Barlow</h3>
                        <p className="font">
                            sales executive</p>
                    </div>
                    <div>
                        <img className="rounded-lg" src="https://i.ibb.co/hCmHb78/person8-500x328.webp" alt="" />
                        <h3 className="font font-semibold">
                            Maria Barlow</h3>
                        <p className="font">
                            sales executive</p>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default OurAgent;