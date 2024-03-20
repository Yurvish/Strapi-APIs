module.exports = ({ env }) => ({
  // ...
  email: {
    config: {
      provider: 'sendgrid', // For community providers pass the full package name (e.g. provider: 'strapi-provider-email-mandrill')
      providerOptions: {
        apiKey: env('SENDGRID'),
      },
      settings: {
        defaultFrom: 'yurvishpatel143@gmail.com',
        defaultReplyTo: 'yurvishpatel143@gmail.com',
        testAddress: 'yurvishpatel143@gmail.com',
      },
    },
  },
  // upload: {
  //   config: {
  //     provider: 'local',
  //     providerOptions: {
  //       sizeLimit: 100000,
  //     },
  //   },
  // },
  // ...
});
