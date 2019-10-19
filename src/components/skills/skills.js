import xhr from '../../scripts/xhrRequests';
import Skill from '../skill/skill';

export default {
  template: '#skills-template',
  components: {
    vcSkill: Skill
  },
  data () {
    return {
      skillsGroups: []
    }
  },
  mounted() {
    xhr('get', 'categories/174')
      .then(skillsGroups => this.skillsGroups = skillsGroups)
  }
}