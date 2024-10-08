<template>
    <div>
        <dialog-comp
            v-if="dialogVisible"
            title="Add a User?"
            @close="hideDialog">
        </dialog-comp>
        <section class="card">
            <div class="head-part">
                <h1>Modal dialog Accessibility considerations</h1>
                <p>Modal dialogs are a common UI element in web and application design, but they can present accessibility challenges for users, particularly those who rely on screen readers or keyboard navigation. Here are some key accessibility considerations for modal dialogs:</p>
            </div>
            
            <ul>
                <li>Keyboard Accessibility: Ensure that users can navigate to the modal and interact with its contents using only the keyboard. This means making sure that keyboard focus is trapped within the modal while it's open and that users can close the modal easily with the keyboard.</li>
                <li>Focus Management: When a modal opens, ensure that focus is shifted to the first interactive element within the modal, such as a close button or the first input field. When the modal is closed, return focus to the element that triggered its opening.</li>   
            </ul>
            <button
                @click="showDialog"
                ref="showButton"
                class="primary-button">
                Trigger Dialog
            </button>
        </section>
    </div>
</template>

<script>
import DialogComp from './DialogComp.vue';

export default {
    name: 'AddView',

    components: {
        DialogComp,
    },
    data() {
        return {
            dialogVisible: false,
        }
    },
    methods: {
        showDialog() {
            this.dialogVisible = true
        },
        hideDialog() {
            this.dialogVisible = false;
            this.$refs.showButton.focus()
        },
        handleKeydown(event) {
            if (event.key === 'Escape') {
                this.hideDialog();
            }
        }
    },
    mounted() {
        window.addEventListener('keydown', this.handleKeydown);
    },
    beforeUnmount() {
        window.removeEventListener('keydown', this.handleKeydown);
    }
}
</script>

<style scoped>
.card {
    background-color: white;
    border-radius: 8px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
    padding: 2rem;
    margin: 1rem;
}

.head-part {
    background-color: rgb(18, 18, 82);
    color: white;
    padding: 1rem;
    border-radius: 8px 8px 0 0; /* Rounded top corners */
}

.primary-button {
    background-color: rgb(8, 8, 23); /* Change this to your primary color */
    color: white;
    border: none;
    border-radius: 4px;
    padding: 0.5rem 1rem;
    font-size: 1rem;
    cursor: pointer;
    transition: background-color 0.3s;
}

.primary-button:hover {
    background-color: darkblue; /* Darker shade for hover effect */
}

.primary-button:focus {
    outline: 2px solid rgb(5, 5, 5); /* Outline for accessibility */
    outline-offset: 2px;
}
</style>
