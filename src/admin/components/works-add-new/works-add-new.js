import SimpleVueValidator from 'simple-vue-validator';
import { mapActions } from 'vuex';

const Validator = SimpleVueValidator.Validator;

export default {
  mixins: [SimpleVueValidator.mixin],
  name: 'work-add-new',
  props: ['work'],
  data () {
    return {
      isBlocked: false,
      renderedPhoto: '',
      newWork: { ...this.work }
    };
  },
  components: {
    vcInput: () => import('components/input/input.vue/'),
    vcTooltipInput: () => import('components/tooltip-input/tooltip-input.vue/'),
    vcTags: () => import('components/tags/tags.vue/'),
  },
  validators: {
    'newWork.title': function (value) {
      return Validator.value(value).required()
    },
    'newWork.link': function (value) {
      return Validator.value(value).required()
    },
    'newWork.description': function (value) {
      return Validator.value(value).required()
    },
    'newWork.techs': function (value) {
      return Validator.value(value).required()
    },
    'newWork.photo': function (value) {
      return Validator.value(value).required();
    }
  },
  methods: {
    ...mapActions('works', ['saveWork', 'updateWork']),
    hideAddingCard () {
      this.$emit('hideAddingCard');
    },
    appendFileAndRenderPhoto (e) {
      this.newWork.photo = e.target.files[0];
      const reader = new FileReader();

      try {
        reader.readAsDataURL(this.newWork.photo);
        reader.onload = () => {
          this.renderedPhoto = reader.result;
        };
      } catch (error) {
        //-----------------
      }
    },
    async workCard () {
      console.log(this.newWork);
      if (await this.$validate()) {
        this.isBlocked = true;

        const isChanged = Object.keys(this.newWork).some(key => {
          return this.newWork[key] !== this.work[key];
        });

        if (isChanged) {
          this.newWork.id ? await this.updateWork(this.newWork) : await this.saveWork(this.newWork);
        }

        this.$emit('hideAddingCard');
      }
    },
    updateTag (tags) {
      this.newWork.techs = tags;
    }
  },
  created () {
    this.newWork = { ...this.work };
    if(this.work.photo) {
      this.renderedPhoto = 'https://webdev-api.loftschool.com/' + this.work.photo;
    }
  },
  watch: {
    work () {
      console.log('watch');
      this.newWork = { ...this.work };
      this.renderedPhoto = 'https://webdev-api.loftschool.com/' + this.work.photo;
    }
  }
};