<template>
    <div class="dialog" v-if="show" @click.stop="hideDialog">
        <div @click.stop class="dialog_content">
            <slot @setClose="$emit('setShow', value)"></slot>
        </div>
    </div>
</template>

<script>
    import toggleMixin from "@/mixins/toggleMixin";

    export default {
        name: "my-dialog",
        mixins: [toggleMixin],
        props: {
            show: { 
                type: Boolean, 
                required: true
            }
        }
    }
</script>

<style scoped>
.dialog {
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    background: rgba(0, 0, 0, 0.5);
    position: fixed;
    display: flex;
}
.dialog_content {
    margin: auto;
}
</style>