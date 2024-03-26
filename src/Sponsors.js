import React, { useState ,useEffect} from 'react';
import { useHistory } from "react-router-dom";

const Sponsors = () => {
  const [email, setEmail] = useState("");
  // const [placeholderText, setPlaceholderText] = useState("Leave us your email");
  const history = useHistory(); // Initialize useHistory hook
  const [showThanks, setShowThanks] = useState(false);
  const [isVisible, setIsVisible] = useState(true)  
  const [isScrolled, setIsScrolled] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

      // Define the scroll threshold, for example, when the scroll position is greater than or equal to 100px
      const scrollThreshold = 100;

      // Check if the scroll position meets the threshold
      setIsScrolled(scrollTop >= scrollThreshold);
    };

    // Add event listener for scroll
    window.addEventListener('scroll', handleScroll);

    // Clean up the event listener
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  const updateVisibility = () => {
    setIsVisible(window.innerWidth >= 650);
  };
  useEffect(() => {
    updateVisibility();
    window.addEventListener("resize", updateVisibility);
    return () => window.removeEventListener("resize", updateVisibility);
  }, []);
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:5000/register-user', {
        method: "POST",
        body: JSON.stringify({ email }),
        headers: {
          'Content-Type': 'application/json'
        }
      });

      if (response.ok) {
        // alert("Data saved successfully");
        setEmail("");
        // setPlaceholderText("We'll update you soon!"); // Update placeholder text
        setShowThanks(true); // Show "Thanks" message
        setTimeout(() => {
          setShowThanks(false); // Hide "Thanks" message after 5 seconds
        }, 5000);
        history.push('/Sponsors'); // Redirect to /Sponsors if data saved successfully
      } else {
        // throw new Error('Failed to save data');
      }
    } catch (error) {
      console.error('Error:', error.message);
      // alert("Something went wrong");
    }
  }

  return (
    <div className="sponsors">
      <section className="partners_centering__mEmQ2">
        <div className="partners_title__cWB8o" style={{display: 'flex', justifyContent: 'center',alignItems: 'center', width: '80vw'}}  >
          <span>Partner with TEDxIITGuwahati</span>
        </div>
        <p className="sponsors_para" style={{ width: '65vw' }}>
          <span className="partners_content__XGtJa">
            We’re looking for a select group of strategic partners to help us grow
            the impact of TEDxIITGuwahati over the next five years to help us
            reach <strong>100,000+ Guwahatians</strong> through our live in-person
            events and <strong>100+ million global citizens</strong> through our
            virtual events and videos.
          </span>
        </p>
        <a className="partners_button__nkcDD" href="mailto:iitg.tedx@gmail.com">
          <span>Sponsor TEDxIITGuwahati</span>
        </a>
      </section>
      <section style={{background: 'url("/image.png") center center / cover no-repeat'}}>
        <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr', justifyContent: 'center', alignItems: 'center', height: '500px'}}>
          <div className="partners_title__cWB8o aos-init aos-animate" data-aos="zoom-out-up" data-aos-easing="ease-in-back" data-aos-duration="1500" data-aos-delay="700" style={{display: isVisible ? 'grid' : 'none', gridTemplateRows: '1fr 5fr 1fr', justifyContent: 'center', alignItems: 'center', width: '50vw', backgroundColor: 'rgba(0, 0, 0, 0.7)', height: '500px'}}>
            <div>
              <p style={{color: 'rgb(255, 255, 255)', marginTop: '50px', textAlign: 'center'}}>Partner with TEDxIITGuwahati</p>
            </div>
            <div>
              <div className="partners_content__XGtJa" style={{width: '100%', letterSpacing: '-0.3px', margin: '0px', padding: '0px', color: 'rgb(255, 255, 255)', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                <p style={{width: '40vw'}}>In a world with short attention spans, TEDxIITGuwahati makes reaching your target audience easy and cost-effective. Our audience interacts with our messaging year-round. With email engagement rates of 20%, we’ll share your sponsorship message alongside our trusted content, giving your brand the lift you’re looking for. Want to get in front of our largest audiences? Our video views have topped 1+ million in just the last three years. Become a sponsor and get in front of an engaged and large audience.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
  <div>
    <div>
      <div className="partners_title__cWB8o" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '2em 0px' }}>
        <span>Why Partner with us?</span>
      </div>
    </div>
    <div style={{ display: 'flex', justifyContent: 'space-evenly', flexWrap: 'wrap' }}>
      <div style={{ width: '100vw', marginBottom: '6em', boxSizing: 'border-box', maxWidth: '300px', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
        <div>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1em' }}>
            
            <img src="/attendees.png" className={`sponsors ${isScrolled ? 'scrolled' : ''}`} alt="Influential Audience"  style={{ width: '45%', margin: 'auto' }}  />
            <div  style={{ fontSize: '30px', fontWeight: '350', textAlign: 'center' }} className="aos-init">Influential Audience</div>
            <p className="partners_content__XGtJa aos-init"  style={{ textAlign: 'center', fontWeight: '250' }}>Connect your brand with the most influential audience in the Washington DC metropolitan area - dreamers, doers, influencers.</p>
          </div>
        </div>
      </div>
      <div style={{ width: '100vw', marginBottom: '6em', boxSizing: 'border-box', maxWidth: '300px', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
        <div>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1em' }}>
            <img src="/attendees.png" alt="Brand Alignment" data-aos="zoom-out-up" data-aos-easing="ease-in-back" data-aos-duration="1500" data-aos-delay="700" style={{ width: '45%', margin: 'auto' }} className="aos-init" />
            <div data-aos="fade-down" data-aos-easing="linear" data-aos-duration="2000" data-aos-delay="700" style={{ fontSize: '30px', fontWeight: '350', textAlign: 'center' }} className="aos-init">Brand Alignment</div>
            <p className="partners_content__XGtJa aos-init" data-aos="fade-up" data-aos-easing="linear" data-aos-duration="2500" data-aos-delay="700" style={{ textAlign: 'center', fontWeight: '250' }}>Align your brand with TEDxIITGuwahati and our mission to spread ideas, build community, and change lives.</p>
          </div>
        </div>
      </div>
    </div>
    <div style={{ display: 'flex', justifyContent: 'space-evenly', flexWrap: 'wrap' }}>
      <div style={{ width: '100vw', marginBottom: '6em', boxSizing: 'border-box', maxWidth: '300px', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
        <div>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1em' }}>
            <img src="/attendees.png" alt="Corporate Objectives" data-aos="zoom-out-up" data-aos-easing="ease-in-back" data-aos-duration="1500" data-aos-delay="700" style={{ width: '45%', margin: 'auto' }} className="aos-init" />
            <div data-aos="fade-down" data-aos-easing="linear" data-aos-duration="2000" data-aos-delay="700" style={{ fontSize: '30px', fontWeight: '350', textAlign: 'center' }} className="aos-init">Corporate Objectives</div>
            <p className="partners_content__XGtJa aos-init" data-aos="fade-up" data-aos-easing="linear" data-aos-duration="2500" data-aos-delay="700" style={{ textAlign: 'center', fontWeight: '250' }}>Achieve specific corporate objectives with our customized and integrated approach to partnerships.</p>
          </div>
        </div>
      </div>
      <div style={{ width: '100vw', marginBottom: '6em', boxSizing: 'border-box', maxWidth: '300px', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
        <div>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1em' }}>
            <img src="/attendees.png" alt="Thought Leadership" data-aos="zoom-out-up" data-aos-easing="ease-in-back" data-aos-duration="1500" data-aos-delay="700" style={{ width: '45%', margin: 'auto' }} className="aos-init" />
            <div data-aos="fade-down" data-aos-easing="linear" data-aos-duration="2000" data-aos-delay="700" style={{ fontSize: '30px', fontWeight: '350', textAlign: 'center' }} className="aos-init">Thought Leadership</div>
            <p className="partners_content__XGtJa aos-init" data-aos="fade-up" data-aos-easing="linear" data-aos-duration="2500" data-aos-delay="700" style={{ textAlign: 'center', fontWeight: '250' }}>Be a leader in bringing together corporations, start-ups, entrepreneurs, and individuals who are inspired by remarkable thinking</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

      <section style={{ background: 'rgb(247, 247, 247)' }}>

  <div>
    <div style={{ padding: '40px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '20px' }}>
      <h1 className="partners_title__cWB8o"><span>Our Audience</span></h1>
      <p className="partners_content__XGtJa" style={{ width: '45vw' }}><span>Since 2019, TEDxIITGuwahati has been working to galvanize the local community, bringing together corporations, community organizations, entrepreneurs, and individuals, providing a platform for exceptional ideas, and a catalyst for profound change.</span></p>
    </div>
    <div style={{ display: 'flex', justifyContent: 'space-evenly', flexWrap: 'wrap' }}>
      <div style={{ width: '100em', marginBottom: '16px', boxSizing: 'border-box', maxWidth: '200px' }}>
        <div>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1em' }}>
            <img src="/attendees.png" alt="ATTENDEES" style={{ width: '45%', margin: 'auto' }} />
            <div style={{ fontSize: '24px', fontWeight: '350', textAlign: 'center' }}>ATTENDEES</div>
            <span className="partners_content__XGtJa" style={{ textAlign: 'center', fontWeight: '250' }}></span>
          </div>
        </div>
      </div>
      <div style={{ width: '100em', marginBottom: '16px', boxSizing: 'border-box', maxWidth: '200px' }}>
        <div>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1em' }}>
            <img src="/attendees.png" alt="SOCIAL REACH" style={{ width: '45%', margin: 'auto' }} />
            <div style={{ fontSize: '24px', fontWeight: '350', textAlign: 'center' }}>SOCIAL REACH</div>
            <span className="partners_content__XGtJa" style={{ textAlign: 'center', fontWeight: '250' }}>1.5K+ Fans & Followers</span>
          </div>
        </div>
      </div>
      <div style={{ width: '100em', marginBottom: '16px', boxSizing: 'border-box', maxWidth: '200px' }}>
        <div>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1em' }}>
            <img src="/attendees.png" alt="YOUTUBE VIEWS" style={{ width: '45%', margin: 'auto' }} />
            <div style={{ fontSize: '24px', fontWeight: '350', textAlign: 'center' }}>YOUTUBE VIEWS</div>
            <span className="partners_content__XGtJa" style={{ textAlign: 'center', fontWeight: '250' }}>1M+ views</span>
          </div>
        </div>
      </div>
      <div style={{ width: '100em', marginBottom: '16px', boxSizing: 'border-box', maxWidth: '200px' }}>
        <div>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1em' }}>
            <img src="/attendees.png" alt="IMPRESSIONS" style={{ width: '45%', margin: 'auto' }} />
            <div style={{ fontSize: '24px', fontWeight: '350', textAlign: 'center' }}>IMPRESSIONS</div>
            <span className="partners_content__XGtJa" style={{ textAlign: 'center', fontWeight: '250' }}>7K+ Impressions</span></div></div></div></div></div></section>
            <section>
  <div>
    <div style={{ padding: '40px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '20px', textAlign: 'center' }}>
      <h1 className="partners_title__cWB8o"><span>Sponsorship Opportunities</span></h1>
      <p className="partners_content__XGtJa" style={{ width: '45vw' }}>Below are just a few of this year's sponsorship opportunities. To learn more, just click the button below</p>
    </div>
    <div style={{ display: 'flex', justifyContent: 'space-evenly', flexWrap: 'wrap', marginBottom: '40px' }}>
      <div style={{ width: '100vw', marginBottom: '16px', boxSizing: 'border-box', maxWidth: '200px' }}>
        <div>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1em' }}>
            <img src="/attendees.png" alt="ALL YEAR ROUND" style={{ width: '45%', margin: 'auto' }} />
            <div style={{ fontSize: '24px', fontWeight: '350', textAlign: 'center' }}>ALL YEAR ROUND</div>
            <span className="partners_content__XGtJa" style={{ textAlign: 'center', fontWeight: '250' }}>
              <div>Executive Committee</div>
              <div style={{ marginBottom: '10px' }}></div>
              <div>Host Committee</div>
              <div style={{ marginBottom: '10px' }}></div>
              <div>Special Events</div>
              <div style={{ marginBottom: '10px' }}></div>
              <div>Sustainability Partner</div>
            </span>
          </div>
        </div>
      </div>
      <div style={{ width: '100vw', marginBottom: '16px', boxSizing: 'border-box', maxWidth: '200px' }}>
        <div>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1em' }}>
            <img src="/attendees.png" alt="LIVE CONFERENCES" style={{ width: '45%', margin: 'auto' }} />
            <div style={{ fontSize: '24px', fontWeight: '350', textAlign: 'center' }}>LIVE CONFERENCES</div>
            <span className="partners_content__XGtJa" style={{ textAlign: 'center', fontWeight: '250' }}>
              <div>Global Partner</div>
              <div style={{ marginBottom: '10px' }}></div>
              <div>Tech. Lounge Host</div>
              <div style={{ marginBottom: '10px' }}></div>
              <div>Connection Cafe Host</div>
              <div style={{ marginBottom: '10px' }}></div>
              <div>After Party Host</div>
            </span>
          </div>
        </div>
      </div>
      <div style={{ width: '100vw', marginBottom: '16px', boxSizing: 'border-box', maxWidth: '200px' }}>
        <div>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1em' }}>
            <img src="/attendees.png" alt="IN-KIND SUPPORT" style={{ width: '45%', margin: 'auto' }} />
            <div style={{ fontSize: '24px', fontWeight: '350', textAlign: 'center' }}>IN-KIND SUPPORT</div>
            <span className="partners_content__XGtJa" style={{ textAlign: 'center', fontWeight: '250' }}>
              <div>Media Partner</div>
              <div style={{ marginBottom: '10px' }}></div>
              <div>Marketing PR Partner</div>
              <div style={{ marginBottom: '10px' }}></div>
              <div>Co-Working Partner</div>
              <div style={{ marginBottom: '10px' }}></div>
              <div>Printing Partner</div>
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

      <div className="newsletter_container__ZfLoB">
        <img src="./Images/Newsletter/newsletter.svg" alt="" className="newsletter_newimg__ZpZHM" />
        <div className="newsletter_right__mGdQ8">
          <div className="newsletter_heading__UotNR">Newsletter</div>
          <div className="newsletter_subheading__53QGB">I want to receive news from TEDxIITGuwahati</div>
          <form className="form newsletter_form__dqxuO" onSubmit={handleSubmit}>
            <div>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                placeholder="Leave your email here!" 
              />
            </div>
            <button type="submit" className="newsletter_btn__jJJ-P" style={{cursor:'pointer'}}>Subscribe me</button>

          </form>
        { showThanks && <div className="Thanks"> Thank you for your response!</div>}

        </div>
      </div>
    </div>
  );
};

export default Sponsors;
