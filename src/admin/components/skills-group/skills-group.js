import { mapActions, mapState } from 'vuex';

export default {
  props: ['category'],
  data () {
    return {
      formBlocked: false,
      skill: {
        title: '',
        percent: 0,
        category: this.category.id
      }
    };
  },
  components: {
    vcInput: () => import('components/input/input.vue/'),
    vcSkillsItem: () => import('components/skills-item/skills-item.vue/'),
    vcSkillsTitle: () => import('components/skills-title/skills-title.vue/'),
  },
  methods: {
    ...mapActions('categories', ['addCategory', 'loadCategories']),
    ...mapActions('skills', ['addSkill']),
    ...mapActions('tooltip', ['showTooltip']),

    async addNewSkill () {
      this.formBlocked = true;

      try {
        await this.addSkill(this.skill);
        this.showTooltip({ type: 'success', message: 'Скилл успешно добавлен' });
      } catch ({ message }) {
        this.showTooltip({ type: 'error', message });
      } finally {
        this.formBlocked = "";
        this.skill.percent = 0;
        this.skill.title = "";
      }
    }
  }
};