import { mapActions } from 'vuex';

export default {
  props: {
    skill: Object
  },
  data () {
    return {
      editMode: false,
      editedSkill: { ...this.skill }
    };
  },
  components: {
    vcInput: () => import('components/input/input.vue/')
  },
  methods: {
    ...mapActions('skills', ['deleteSkill', 'editSkill']),
    editExistedSkill () {
      this.editMode = !this.editMode;
      this.editSkill(this.editedSkill);
    }
  }
};