import { mapGetters, mapActions, mapState } from 'vuex';

export default {
  data: () => ({
    showAddingCard: false,
    work: {
      title: '',
      link: 'http://test.com',
      description: '',
      techs: '',
      photo: ''
    }
  }),
  components: {
    vcInput: () => import('components/input/input.vue/'),
    vcWorksItem: () => import('components/works-item/works-item.vue/'),
    vcWorksAddNew: () => import('components/works-add-new/works-add-new.vue/'),
  },
  methods: {
    ...mapActions('works', ['loadWorks']),

    hideAddingCard () {
      this.showAddingCard = false;
      this.work = { ...{
          title: '',
          link: 'http://test.com',
          description: '',
          techs: '',
          photo: ''
        } }
    },
    editWork (payload) {
      this.work = payload;
      this.showAddingCard = true;
    }
  },
  computed: {
    ...mapGetters('works', ['getWorks']),
    ...mapState('user', {
      userID: state => state.user.id
    })
  },
  created () {
    this.loadWorks(this.userID);
  }
};