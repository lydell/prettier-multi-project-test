module.exports = () => {
  eventStore.update(
    id,
    _.flow(
      updater,
      incrementVersion
    )
  );
};
