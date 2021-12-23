import {
  FETCH_ANALYSIS,
  FETCH_ANALYSIS_FULFILLED,
  FETCH_TOPICLIST_REJECTED,
  FETCH_TOPICLIST_FULFILLED,
  FETCH_TOPICLIST,
  FETCH_ANALYSIS_REJECTED,
} from "../actions/action_types";

const initialState = {
  chartsData: {},
  fetchingChartsData: false,
  fetchedChartsData: false,
  topicList: {},
  fetchedTopicList: false,
  fetchingTopicList: false,
  topicDropdownOptions: [],
  chatHistory: [],
  fetchingChatResponse: false,
  fetchedChatResponse: false,
  suggestedResponses: [],
  extraSuggestedResponses: [],
};

export default function (state = initialState, action) {
  switch (action.type) {
    case FETCH_ANALYSIS: {
      return {
        ...state,
        fetchingChartsData: true,
      };
    }
    case FETCH_ANALYSIS_REJECTED: {
      return {
        ...state,
        fetchingChartsData: false,
        fetchedChartsData: false,
      };
    }
    case FETCH_ANALYSIS_FULFILLED: {
      return {
        ...state,
        fetchingChartsData: false,
        fetchedChartsData: true,
        chartsData: action.payload,
      };
    }
    case FETCH_TOPICLIST: {
      return {
        ...state,
        fetchingTopicList: true,
        fetchedTopicList: false,
      };
    }
    case FETCH_TOPICLIST_FULFILLED: {
      console.log(action.payload);
      let topicDropdownOptions = action.payload.categories.map((el) => {
        return { key: el, text: el, value: el };
      });

      return {
        ...state,
        fetchingTopicList: false,
        fetchedTopicList: true,
        topicList: action.payload,
        topicDropdownOptions: topicDropdownOptions,
      };
    }

    case "INIT_CHAT": {
      return {
        ...state,
        emSession: Date.now(),
        chatHistory: [],
        fetchingChatResponse: false,
        fetchedChatResponse: false,
        suggestedResponses: [],
        lastBotUttId: null,
        face: null,
      };
    }

    case "FETCH_CHAT_RESPONSE": {
      return { ...state, fetchingChatResponse: true };
    }
    case "FETCH_CHAT_RESPONSE_REJECTED": {
      return { ...state, fetchingChatResponse: false, error: action.payload };
    }

    case "FETCH_CHAT_RESPONSE_FULFILLED": {
      console.log(action.payload);
      let botBody = action.payload.response.bot_response.text;

      if (action.payload.response.prepend_expression !== undefined) {
        botBody = action.payload.response.prepend_expression + " " + botBody;
      }
      let botResponseCEFR = action.payload.response.bot_response.cefr;
      let botResponseScore = action.payload.response.bot_response.score;
      let userScore = action.payload.response.userscore;

      let msgUser = {
        sender: "user",
        msg: action.payload.user_utt,
        userscore: userScore,
      };
      let msgBot = {
        sender: "bot",
        msg: botBody,
        cefr: botResponseCEFR,
        score: botResponseScore,
      };
      let lastBotUttId = action.payload.response.bot_response.comment_id;
      let suggestedResponses = action.payload.response.suggested_responses;

      let extraSuggestedResponses = [...state.extraSuggestedResponses];
      if (action.payload.response.extra_suggestions) {
        extraSuggestedResponses = action.payload.response.extra_suggestions;
      }

      if (action.payload.response.is_new_conversation) {
        var newChatHistory = [msgBot];
      } else {
        var newChatHistory = [...state.chatHistory, msgUser, msgBot];
      }

      return {
        ...state,
        chatHistory: newChatHistory,
        lastBotUttId: lastBotUttId,
        suggestedResponses: suggestedResponses,
        fetchingChatResponse: false,
        fetchedChatResponse: true,
        face: action.payload.response.face,
        extraSuggestedResponses: extraSuggestedResponses,
      };
    }

    default:
      return state;
  }
}
