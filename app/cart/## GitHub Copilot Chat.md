## GitHub Copilot Chat

- Extension: 0.51.0 (prod)
- VS Code: 1.123.0 (6a44c352bd24569c417e530095901b649960f9f8)
- OS: win32 10.0.22000 x64
- GitHub Account: Adedeji-Abdullah

## Network

User Settings:
```json
  "http.systemCertificatesNode": true,
  "github.copilot.advanced.debug.useElectronFetcher": true,
  "github.copilot.advanced.debug.useNodeFetcher": false,
  "github.copilot.advanced.debug.useNodeFetchFetcher": true
```

Connecting to https://api.github.com:
- DNS ipv4 Lookup: 140.82.121.5 (42 ms)
- DNS ipv6 Lookup: Error (4 ms): getaddrinfo ENOTFOUND api.github.com
- Proxy URL: None (1 ms)
- Electron fetch (configured): Error (209 ms): Error: net::ERR_CONNECTION_TIMED_OUT
	at SimpleURLLoaderWrapper.<anonymous> (node:electron/js2c/utility_init:2:10658)
	at SimpleURLLoaderWrapper.emit (node:events:509:28)
  {"is_request_error":true,"network_process_crashed":false}
- Node.js https: timed out after 10 seconds
- Node.js fetch: timed out after 10 seconds

Connecting to https://api.githubcopilot.com/_ping:
- DNS ipv4 Lookup: 140.82.113.21 (44 ms)
- DNS ipv6 Lookup: Error (4 ms): getaddrinfo ENOTFOUND api.githubcopilot.com
- Proxy URL: None (12 ms)
- Electron fetch (configured): timed out after 10 seconds
- Node.js https: timed out after 10 seconds
- Node.js fetch: 