import moment from "moment";
import React, { Component } from "react";
import { connect } from "react-redux";
import {
  Container,
  Dimmer,
  Divider,
  Header,
  Icon,
  Loader,
  Segment,
} from "semantic-ui-react";
import { fetchAnalysis } from "../redux/actions/actions";
import AllUserHistogram from "./datavis/allUserHistogram";
import PieChart from "./datavis/pieChart";
import ReadingGradeHistogram from "./datavis/readingGradeHistogram";
import SentenceLengthHistogram from "./datavis/sentenceLengthHistogram";
// import Statistics from './datavis/statistics'
import TimestampHistogram from "./datavis/timestampHistogram";
import WeekDayFrequency from "./datavis/weekDayFrequency";
import WordCloud from "./datavis/wordCloud";
import WordCloudColored from "./datavis/wordCloudColored";

export default class Visualization extends Component {
  constructor(props) {
    super(props);
    this.state = {
      width:
        window.outerWidth < window.innerWidth
          ? window.innerWidth
          : window.outerWidth,
      language: "en",
    };
    this.windowResizeHandler = this.windowResizeHandler.bind(this);
  }

  windowResizeHandler() {
    this.setState({
      width:
        window.outerWidth < window.innerWidth
          ? window.outerWidth
          : window.innerWidth,
    });
  }

  componentWillMount() {
    this.props.dispatch(fetchAnalysis());
    window.addEventListener("resize", this.windowResizeHandler.bind(this));
  }

  render() {
    if (this.props.fetched) {
      if (this.props.chartsData) {
        var toRender = (
          <Container style={{ width: "600px" }}>
            <div style={{ textAlign: "center" }}>
              <Header as="h2" icon>
                <Icon circular name="bar chart" />
                {this.state.language === "en"
                  ? "Your Statistics"
                  : this.props.chartsData.email + "の記録"}
                <Header.Subheader>
                  {this.state.language === "en"
                    ? "Visualizations of interactions from the trial page"
                    : "Musioとの活動記録"}
                </Header.Subheader>
              </Header>
              <div>
                <i>
                  {this.state.language === "en"
                    ? "*Results are updated every 30 minutes."
                    : "*活動記録は30分ごとに更新されます"}
                </i>
              </div>
              <div>
                {this.state.language === "en"
                  ? "Data as of " +
                    moment
                      .utc(this.props.chartsData.updated_at)
                      .local()
                      .format("YYYY-MM-DD h:mm a")
                  : "日時: " +
                    moment
                      .utc(this.props.chartsData.updated_at)
                      .local()
                      .format("YYYY-MM-DD h:mm a")}
              </div>
            </div>

            <Divider />

            <PieChart
              language={this.state.language}
              width={500}
              title={
                this.state.language === "en"
                  ? "Your Vocabulary Level"
                  : "あなたの語彙レベル"
              }
              arcData={
                this.props.chartsData.wordlevel_pi_chart_data.arc_series_data
              }
              arc_series_legend_items={
                this.props.chartsData.wordlevel_pi_chart_data
                  .arc_series_legend_items
              }
            />

            <Divider />

            <WeekDayFrequency
              language={this.state.language}
              width={500}
              wfData={this.props.chartsData.weekday_freq}
            />

            <Divider />

            <TimestampHistogram
              language={this.state.language}
              width={500}
              thData={this.props.chartsData.timestamp_hist}
            />

            <Divider />

            <ReadingGradeHistogram
              language={this.state.language}
              width={500}
              averageReadingGrade={this.props.chartsData.average_reading_grade}
              rgData={this.props.chartsData.reading_grade_hist}
            />

            <Divider />

            <SentenceLengthHistogram
              language={this.state.language}
              width={500}
              slData={this.props.chartsData.word_count_hist}
              average_word_count={this.props.chartsData.average_word_count}
            />

            <Divider />

            <PieChart
              width={500}
              title={
                this.state.language === "en"
                  ? "Sentiment of Your Sentences"
                  : "あなたの文章の感情分析"
              }
              arcData={
                this.props.chartsData.sentiment_pi_chart_data.arc_series_data
              }
              arc_series_legend_items={
                this.props.chartsData.sentiment_pi_chart_data
                  .arc_series_legend_items
              }
            />

            <Divider hidden />

            <WordCloudColored
              width={500}
              color={"#3498db"}
              title={
                this.state.language === "en"
                  ? "Positive Things"
                  : "ポジティブなもの"
              }
              wcData={this.props.chartsData.wordcloud_nc_pos}
            />

            <WordCloudColored
              width={500}
              color={"#e74c3c"}
              title={
                this.state.language === "en"
                  ? "Negative Things"
                  : "ネガティブなもの"
              }
              wcData={this.props.chartsData.wordcloud_nc_neg}
            />

            <Divider />

            <AllUserHistogram
              language={this.state.language}
              width={500}
              auhData={this.props.chartsData.all_user_sentence_count_hist}
              numTotalSents={this.props.chartsData.num_total_sents}
            />

            <Divider />

            <Segment basic>
              <Header as="h3">
                {this.state.language === "en"
                  ? "Your favorite..."
                  : "あなたのお気に入り..."}
              </Header>
            </Segment>

            <WordCloud
              width={500}
              title={this.state.language === "en" ? "Words" : "単語"}
              wcData={this.props.chartsData.wordcloud_user}
            />

            <Segment textAlign="center">
              <i>
                {this.state.language === "en"
                  ? "Stop words are removed."
                  : "ストップワードは除外されています。"}
              </i>
            </Segment>

            <Divider hidden />

            <WordCloud
              width={500}
              title={this.state.language === "en" ? "Nouns" : "名詞"}
              wcData={this.props.chartsData.wordcloud_nc}
            />
          </Container>
        );
      } else {
        var toRender = (
          <div style={{ marginTop: 50 }}>
            <div style={{ textAlign: "center" }}>
              <Header as="h2" icon>
                <Icon circular name="bar chart" />
                {this.state.language === "en"
                  ? "Statistics for " + this.props.chartsData.email
                  : this.props.chartsData.email + "の記録"}
                <Header.Subheader>
                  {this.state.language === "en"
                    ? "Visualizations of your interactions"
                    : "Musioとの活動記録"}
                </Header.Subheader>
              </Header>
              <div>
                <i>
                  {this.state.language === "en"
                    ? "*Results are updated every 30 minutes."
                    : "*活動記録は30分ごとに更新されます"}
                </i>
              </div>
              <div>
                {this.state.language === "en"
                  ? "Data as of " +
                    moment
                      .utc(this.props.chartsData.updated_at)
                      .local()
                      .format("YYYY-MM-DD h:mm a")
                  : "日時: " +
                    moment
                      .utc(this.props.chartsData.updated_at)
                      .local()
                      .format("YYYY-MM-DD h:mm a")}
              </div>
            </div>

            <Divider />
            <Divider />

            <div style={{ textAlign: "center" }}>
              <Icon.Group size="huge">
                <Icon name="database" />
                <Icon corner name="attention" color="red" />
              </Icon.Group>
              <Header as="h3">
                {this.state.language === "en"
                  ? "Not enough data!"
                  : "データが不足しています。"}
              </Header>
              {this.state.language === "en"
                ? "Go talk to Musio some more and check back again later. "
                : "Musioにもっと話しかけた後で、確認してください。"}
            </div>
          </div>
        );
      }
    } else {
      var toRender = (
        <div style={{ height: "10vh" }}>
          <Loader active={this.props.fetching}>
            {this.state.language === "en"
              ? "Processing your data. This might take a while."
              : "データを読み込んでいます。しばらく時間がかかる場合があります。"}
          </Loader>
          {!this.props.fetching && !this.props.fetched && (
            <Container style={{ paddingTop: 30 }} textAlign="center">
              <Header>Not enough data</Header>
              <p>
                Try out the Chat API demo to accumulate conversation data first,
                and then come back here to see the result.
              </p>
            </Container>
          )}
        </div>
      );
    }

    return <div>{toRender}</div>;
  }
}

Visualization = connect((store) => {
  return {
    chartsData: store.launcherapi.chartsData,
    fetching: store.launcherapi.fetchingChartsData,
    fetched: store.launcherapi.fetchedChartsData,
  };
})(Visualization);
