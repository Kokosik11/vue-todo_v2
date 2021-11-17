<template>
    <header class="header">
        <div class="logo">
            <div class="logo-figure"></div>
            <h1 class="logo-heading">{{ title }}</h1>
        </div>
        <a class="link" href="https://github.com/Kokosik11/vue-todo" target="_blank">Github</a>
    </header>
</template>

<script>
    export default {
        props: {
            title: String
        }
    }
</script>

<style scoped>
    .header {
        width: 100%;
        height: 90px;
        background-color: #fff;
        box-shadow: 0 4px 16px rgba(0, 0, 0, 0.25);
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0 90px;
    }

    @media (max-width: 570px) {
        .header {
            padding: 0 20px;
        }
    }

    .logo {
        display: flex;
        align-items: center;
        justify-content: space-between;
        color: #34495E;
    }

    .logo h1 {
        margin-left: 10px;
    }

    .logo-figure {
        width: 45px;
        height: 45px;
        background-color: #41B783;
        border: 2px solid #34495E;
        border-bottom-right-radius: 30px;
        border-top-left-radius: 30px;
    }

    .link {
        text-decoration: none;
        color: #34495E;
        font-weight: 700;
        font-size: 20px;
        transition: .25s;
    }

    .link:hover {
        color: #486079;
    }
</style>