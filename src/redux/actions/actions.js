import { Server } from "../../api_client/api_client";
import {
  FETCH_ANALYSIS,
  FETCH_ANALYSIS_FULFILLED,
  FETCH_ANALYSIS_REJECTED,
  FETCH_TOPICLIST,
  FETCH_TOPICLIST_FULFILLED,
  FETCH_TOPICLIST_REJECTED,
} from "./action_types";

import getBrowserFingerprint from "get-browser-fingerprint";
const fingerprint = getBrowserFingerprint();
console.log(fingerprint.toString());

export function fetchAnalysis() {
  return function (dispatch) {
    dispatch({ type: FETCH_ANALYSIS });
    Server.post(`/launcher_api/analysis/`, { user_id: fingerprint })
      .then((response) => {
        dispatch({ type: FETCH_ANALYSIS_FULFILLED, payload: response.data });
      })
      .catch((error) => {
        dispatch({ type: FETCH_ANALYSIS_REJECTED, payload: error });
      });
  };
}

export function fetchTopicList() {
  return function (dispatch) {
    dispatch({ type: FETCH_ANALYSIS });
    Server.get(`/launcher_api/topic/list/`)
      .then((response) => {
        dispatch({ type: FETCH_TOPICLIST_FULFILLED, payload: response.data });
      })
      .catch((error) => {
        dispatch({ type: FETCH_TOPICLIST_REJECTED, payload: error });
      });
  };
}

export function chatLC(
  prev_bot_utt_id,
  user_utt,
  category,
  difficulty = "easy",
  user_id = fingerprint
) {
  return function (dispatch) {
    dispatch({ type: "FETCH_CHAT_RESPONSE" });
    Server.post(`/launcher_api/chat/lc/`, {
      prev_bot_cid: prev_bot_utt_id,
      user_utterance: user_utt,
      difficulty: difficulty,
      category: category,
      user_id: fingerprint,
    })
      .then((response) => {
        if (response.data.is_new_conversation) {
          // dispatch({ type: "INIT_CHAT" });
        }

        dispatch({
          type: "FETCH_CHAT_RESPONSE_FULFILLED",
          payload: {
            user_utt: user_utt,
            response: response.data,
          },
        });
      })
      .catch((err) => {
        dispatch({ type: "FETCH_CHAT_RESPONSE_REJECTED", payload: err });
      });
  };
}
