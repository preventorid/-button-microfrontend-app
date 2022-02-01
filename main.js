const pvtButton = document.querySelector("pvt-button");

pvtButton.addEventListener("loaded", () => {
  const config = {
    flowType: "YOUR_FLOW_TYPE",
    credentials: {
      apiKey: "YOUR_API_KEY",
      clientSecret: "YOUR_CLIENT_SECRET",
      tenant: "YOUR_TENANT",
      banknu: "YOUR_BANKNU",
      env: "YOUR_ENV",
    },
    currentUserInfo: {
      cifCode: "YOUR_CIFCODE",
    },
    deskVerificationEnabled: false,
    events: {
      onStart: () => console.log("onStart"),
      onSubmitted: () => console.log("onSubmitted"),
      onFinish: () => console.log("onFinish"),
      onError: (code) => console.log("onError", code),
    },
  };
  pvtButton.initialize(config);
});
