module.exports = [
  {
    name: 'My Company',
    implementation: 'My Implementation Name',
    only: true,
    issuers: [
      {
        id: 'urn:uuid:my:implementation:issuer:id',
        endpoint: 'https://localhost:40443/issuers/foo/credentials/issue',
        tags: ['eddsa-rdfc-2022', 'localhost', 'vc2.0'],
      },
    ],
    verifiers: [
      {
        id: 'https://localhost:40443/verifiers/z19uokPn3b1Z4XDbQSHo7VhFR',
        endpoint:
          'https://localhost:40443/verifiers/z19uokPn3b1Z4XDbQSHo7VhFR/credentials/verify',
        tags: ['eddsa-rdfc-2022', 'localhost'],
      },
    ],
  },
];
