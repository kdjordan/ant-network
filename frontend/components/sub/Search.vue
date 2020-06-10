<template>
  <div class="search">  
    <input type="text" placeholder="Search for a shop...">
    <img role="img" src="~assets/svg/mag-glass.svg" alt="">
    </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>

.search {
    position: relative;
    
    & input {
        width: 98%;
        
        margin-left: 15%;
        border-radius: 2rem;
        outline: none;
        border: none;
        padding: .9rem 2rem;
        font-family: $font4;
        font-size: 1.6rem;
    }

    & img {
        width: 2.2rem;
        z-index: 1;
        position: absolute;
        top: .6rem;
        left: 100%;
    }
}
</style>