<template>
  <div class="page">
      <h1 class="page__title">Advertise With Us</h1>
      <div class="underline"></div>
      <div class="page__pitch">
        <div class="page__pitch--headline">Thanks for Interest in Joining the Iowa Antique Network ! 
        </div>
        <div class="page__pitch--desc">
          <p><strong>Our mission is to bring folks who love antiques together.</strong> For Us, that not only means putting a buyer together with a seller, but also helping facilitate an experience of discovery. Antiques have meaning and reverence, not only because of where they came from and how they were made, but becuase of the journey that comes along with aquiring them. Antiques are special to us becuase they tell a story. They're like friends that we discover, that we feel like we've know our entire lives. What we realize is... is that they've been a part of us the entire time.</p>
        </div>
      </div>
      <h3 class="page__title page__title--sub">Just a Few Of the Benefits</h3>
      <div class="underline short"></div>
      <ul class="page__ul">
          <li class="page__li">Your shop will receive a second to none Dealer profile page.</li>
          <li class="page__li">Show items, vendors, shop pictures etc with descriptions & picture uploads. Even YouTube videos.</li>
          <li class="page__li">Unlimited item changes anytime in real time.</li>
          <li class="page__li">Effective branding and results at an affordable cost.</li>
          <li class="page__li">Outstanding exposure to new potential buyers.</li>
          <li class="page__li">Be in the same place your Iowa peers are!</li>
      </ul>
      <div class="pricing">
          <div class="pricing__container">
              <div class="pricing__card">
                  <div class="pricing__card--title">Option 1</div>
                  <div class="pricing__card--subtitle">YEARLY DEALER<br />MALL PACKAGE</div>
                  <div class="pricing__card--price">$180</div>
                  <div class="pricing__card--desc">Show off your Shop with Pictures, About Us info, Road Trip Map Flag, Website & Social Links plus Contact Info
                  </div>
                  <div class="pricing__card--desc">Purchase through PayPal or email IowaAntiqueNetwork@gmail.com for more info.
                  </div>
                  <div class="button gold bottom">SELECT</div>
              </div>
              <div class="pricing__card">  
                <div class="pricing__card--title">Option 2</div>
                <div class="pricing__card--subtitle">YEARLY ROAD TRIP<br />MAP FLAG</div>
                <div class="pricing__card--price">$120</div>
                <div class="pricing__card--desc">Lodging, Food, Wineries/Breweries & Select Other Businesses.. Have a Flag on the Road Trip Map linked to your website or social page.
                </div>
                <div class="pricing__card--desc">Purchase through PayPal or email IowaAntiqueNetwork@gmail.com for more info.
                </div>
                <div class="button gold bottom">SELECT</div>
              </div>
              <div class="pricing__card">
                  <div class="pricing__card--title">Option 3</div>
                  <div class="pricing__card--subtitle">SPONSOR PACKAGE<br />
                       <span class="limited">*LIMITED NUMBER</span>
                    </div>
                  <div class="pricing__card--price">$120</div>  
                  <div class="pricing__card--desc">Same or similar user demographics businesses will receive a banner near the top of the page linked to your website or social page. Primary Network users are 75% female/25% male mid 20's to early 60's.
                  </div>   
                  <div class="pricing__card--desc">Purchase through PayPal or email IowaAntiqueNetwork@gmail.com for more info.
                  </div>   
                  <div class="button gold bottom">SELECT</div>
              </div>
              <div class="pricing__card">
                  <div class="pricing__card--title">Option 4</div>
                  <div class="pricing__card--subtitle">EVENT<br />ANNOUNCEMENT</div>
                  <div class="pricing__card--price">$25</div>
                  <div class="pricing__card--desc">Announce your Show, Grand Opening, Auction by putting your logo on the Slide Show for 3 months prior to your event. Linked to a page of your choice.
                  </div>
                  <div class="pricing__card--desc">Purchase through PayPal or email IowaAntiqueNetwork@gmail.com for more info.
                  </div>
                <div class="button gold bottom">SELECT</div>
              </div>
          </div>
      </div>
  </div>
</template>

<script>
export default {
    transition: 'fade'
}
</script>

<style lang="scss" scoped>
@import '../assets/scss/buttons.scss';

.short {
    width: 60% !important;
}

.limited {
    font-size: 1.1rem;
    font-style: italic;
}

.bottom {
    margin-top: auto;
}

.pricing {
    width: 80%;
    margin: 0 auto;
    color: white;

    &__container {
        display: flex;
        justify-content: space-evenly;
    }

    &__card {
        width: 25%;
        margin: 0 .7rem;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: center;
        border-radius: 1rem;
        background: $color2;
        padding-bottom: 3rem;
        

        &--title {
            color: white;
            text-transform: uppercase;
            margin-top: 3rem;
            font-size: 3rem;
            font-family: $font2;
            letter-spacing: 3px;
            margin-bottom: 2rem;
        }

        &--subtitle {
            text-align: center;
            font-size: 1.5rem;
            padding: 0 .5rem;
            margin-bottom: 2rem;
        }

        &--price {
            font-size: 4rem;
        }

        &--desc {
            width: 80%;
            padding: 1rem 0;
            line-height: 2.4rem;
            font-size: 1.5rem;
            text-align: center;
            overflow-wrap: break-word;
            word-wrap: break-word;
        }
    }
}

.underline{
    border-bottom: 2px solid $color1;
    width: 70%;
    margin: 0 auto;
    margin-bottom: 3rem;
}


</style>