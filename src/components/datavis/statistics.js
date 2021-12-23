import React, { Component } from "react";
import Dimensions from "react-dimensions";
import { Divider, Statistic } from "semantic-ui-react";

export class Statistics extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Statistic.Group size="mini" widths="two">
          <Statistic>
            <Statistic.Value>{this.props.days_active}</Statistic.Value>
            <Statistic.Label>
              {this.props.language === "en" ? "Days Active" : "活動した日数"}
            </Statistic.Label>
          </Statistic>
          <Statistic>
            <Statistic.Value>{this.props.num_total_sents}</Statistic.Value>
            <Statistic.Label>
              {this.props.language === "en" ? "Sentences" : "文章"}
            </Statistic.Label>
          </Statistic>
        </Statistic.Group>
        <Divider hidden />
        <Statistic.Group size="mini" widths="two">
          <Statistic>
            <Statistic.Value>{this.props.num_total_words_user}</Statistic.Value>
            <Statistic.Label>
              {this.props.language === "en" ? "Words" : "単語"}
            </Statistic.Label>
          </Statistic>
          <Statistic>
            <Statistic.Value>{this.props.vocabulary_size_user}</Statistic.Value>
            <Statistic.Label>
              {this.props.language === "en" ? "Vocabulary" : "ボキャブラリー"}
            </Statistic.Label>
          </Statistic>
        </Statistic.Group>
      </div>
    );
  }
}

export default Dimensions()(Statistics);

// vocabulary_size_user
// num_total_words_user
// num_total_sents
// days_active
