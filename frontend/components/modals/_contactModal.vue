<template>
  <div class="inner-modal">
      <h2 class="inner-modal__title font-reduce">CONTACT US</h2>
      <div class="inner-modal__desc center"><p>Do you have a suggestion for a feature on the site ?<br/> How about a general questions about what we do ?<br/> An inquiry about being a dealer or sponsor ?<br/> Please enter your details below and we'll get back to you as soon as possible...usually within 24 hours.</p></div>
      <div class="form-container">
        <form class="contact-form" @submit.stop>
            <div class="contact-form__row">
                <div>
                    <label for="name" class="contact-form__row--label">Name</label>
                    <input v-model="name" type="text" name="name" id="name" required>
                </div>
                <div>
                    <label for="email" class="contact-form__row--label">Email</label>
                    <input v-model="email" type="email" name="email" id="email" required>
                </div>
            </div>
            <div class="contact-form__row center-row">
                <label for="select-box" class="contact-form__row--label">Select Subject</label>
                <select id="select-box" class="select-box" v-model="mssgType">
                    <option value="general">General</option>
                    <option value="advertise">Advertise</option>
                    <option value="vendors">Vendors</option>
                </select>
            </div>
            <div class="contact-form__row center-row">
                <label for="mssg">MESSAGE&nbsp;&nbsp;</label>
                <textarea v-model="mssg" name="mssg" id="mssg" rows="5" cols="65" placeholder="What can we help you with ?" required></textarea>
            </div>
            <div class="button send-btn" @click="sendEmail($event)">SEND</div>
        </form>
      </div>
  </div>
</template>


<script>
export default {
    data() {
        return {
            name: null,
            email: null,
            mssgType: "general",
            mssg: null
        }
    },
    methods: {
        sendEmail(event) {
            console.log('sending')
            console.log(this.name)
            console.log(this.email)
            console.log(this.mssgType)
            console.log(this.mssg)
            console.log(event.target.parentElement)
            event.target.parentElement.reset()
        }
    },
    computed: {
        isSelectSelected() {
            return this.mssgType == null
        }
    }

}
</script>
