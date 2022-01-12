export default function (instance) {
  return {
    analyze() {
      let text_analysis = null;
      instance.post("/fin-ad-analyze").then((meta) => {
        text_analysis = meta.data;
      });
      return text_analysis;
    },
  };
}
