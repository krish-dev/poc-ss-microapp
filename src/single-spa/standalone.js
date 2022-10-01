// SystemJS
singleSpa.registerApplication({
  name: "@pwc/microapp",
  //@ts-ignore
  app: () => System.import("http://localhost:4201/main.js"),
  activeWhen: ["/"],
});

singleSpa.start({
  urlRerouteOnly: true,
});
