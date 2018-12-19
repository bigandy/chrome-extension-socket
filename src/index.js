// import io from "socket.io-client";

// const socket = io("http://localhost:6767");

// socket.on("server-status", async message => {
// 	console.log('server-status', message);
// });

// const clickMeButton = document.querySelector("#clickMe");

// clickMeButton.addEventListener("click", function () {
//     socket.emit("message-from-frontend", "hi from front-end");
// });
    const chromeExtensionID = "pbpdchlmjagdinmgepcpifejacfgimad";

	chrome.webRequest.onBeforeRequest.addListener(
		function(info) {
			console.log("Cat intercepted: " + info.url);
			// Redirect the lolcal request to a random loldog URL.
			return {
				redirectUrl: `chrome-extension://${chromeExtensionID}/blocked.html`
			};
		},
		{ urls: ["*://twitter.com/*"] },
		["blocking"]
	);
	// const tabStorage = {};

	// chrome.webRequest.onBeforeRequest.addListener((details) => {
	//     const { tabId, requestId } = details;
	//     if (!tabStorage.hasOwnProperty(tabId)) {
	//         return;
	//     }

	//     tabStorage[tabId].requests[requestId] = {
	//         requestId: requestId,
	//         url: 'https://cnn.com',
	//         startTime: details.timeStamp,
	//         status: 'pending',

	//     };
	//     console.log(tabStorage[tabId].requests[requestId]);
	// }, networkFilters);

	// chrome.webRequest.onCompleted.addListener((details) => {
	//     const { tabId, requestId } = details;
	//     if (!tabStorage.hasOwnProperty(tabId) || !tabStorage[tabId].requests.hasOwnProperty(requestId)) {
	//         return;
	//     }

	//     const request = tabStorage[tabId].requests[requestId];

	//     Object.assign(request, {
	//         endTime: details.timeStamp,
	//         requestDuration: details.timeStamp - request.startTime,
	//         status: 'complete'
	//     });
	//     console.log(tabStorage[tabId].requests[details.requestId]);
	// }, networkFilters);

	// chrome.webRequest.onErrorOccurred.addListener((details) => {
	//     const { tabId, requestId } = details;
	//     if (!tabStorage.hasOwnProperty(tabId) || !tabStorage[tabId].requests.hasOwnProperty(requestId)) {
	//         return;
	//     }

	//     const request = tabStorage[tabId].requests[requestId];
	//     Object.assign(request, {
	//         endTime: details.timeStamp,
	//         status: 'error',
	//     });
	//     console.log(tabStorage[tabId].requests[requestId]);
	// }, networkFilters);

	// chrome.tabs.onActivated.addListener((tab) => {
	//     const tabId = tab ? tab.tabId : chrome.tabs.TAB_ID_NONE;
	//     if (!tabStorage.hasOwnProperty(tabId)) {
	//         tabStorage[tabId] = {
	//             id: tabId,
	//             requests: {},
	//             registerTime: new Date().getTime()
	//         };
	//     }
	// });
	// chrome.tabs.onRemoved.addListener((tab) => {
	//     const tabId = tab.tabId;
	//     if (!tabStorage.hasOwnProperty(tabId)) {
	//         return;
	//     }
	//     tabStorage[tabId] = null;
	// });
