export default (context, error) => {
  context.commit('tooltip/SHOW_TOOLTIP', {
    type: 'error',
    message: error.response.data.error || error.response.data.message
  }, { root: true });
};