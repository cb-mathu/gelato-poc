import { defineComponent } from 'vue';

export default defineComponent({
  name: 'loader',
  props: ['width', 'class', 'fill'],
  render() {
    return (
      <svg class="g-loader-icon" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
        <circle class="g-loader-icon-circle" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
        <path
          class="g-loader-icon-path"
          fill="currentColor"
          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
        >
          <animateTransform
            attributeType="xml"
            attributeName="transform"
            type="rotate"
            from="0 12 12"
            to="360 12 12"
            dur="1s"
            repeatCount="indefinite"
          ></animateTransform>
        </path>
      </svg>
    );
  },
});
