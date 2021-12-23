import * as echarts from "echarts";
import _ from "lodash";
import { createGeoSvg } from "../components/geosvg/GeoSvg";

export function sessionDataToScatter(session_data, prob_threshold = 0.5) {
  echarts.registerMap(`session_map_${session_data.run_id}`, {
    svg: createGeoSvg(
      session_data.map.image,
      session_data.map.image_width,
      session_data.map.image_height
    ),
  });

  const resolution = session_data.map.resolution;

  const x = _.map(
    _.toPairs(
      _.groupBy(
        session_data.detectedobject_set.filter(
          (el) => el.probability >= prob_threshold
        ),
        (el) => el.classname
      )
    ),
    (k) => {
      return {
        name: k[0],
        type: "scatter",
        coordinateSystem: "geo",
        emphasis: {
          focus: "series",
        },
        data: _.map(k[1], (detected_object) => {
          return [
            detected_object.mid_x / resolution -
              session_data.map.origin_x / resolution,
            -(
              detected_object.mid_y / resolution -
              session_data.map.origin_y / resolution
            ) + session_data.map.image_height,
            detected_object.image,
            detected_object.probability,
          ];
        }),
      };
    }
  );

  const legend_data = _.map(
    _.toPairs(_.groupBy(session_data.detectedobject_set, (el) => el.classname)),
    (k) => {
      return {
        name: k[0],
      };
    }
  );

  let option = {
    backgroundColor: "#cdcdcd",

    geo: {
      map: `session_map_${session_data.run_id}`,
      roam: true,
    },

    legend: {
      tooltip: {
        showDelay: 0,
        formatter: function (params) {
          console.log(params);
          return `<img src=${params.image}/>`;
        },
      },
      borderColor: "#252625",
      borderWidth: 1,
      borderRadius: 5,
      backgroundColor: "#fff",
      itemStyle: { borderColor: "#252625", borderWidth: 1 },
      type: "scroll",
      data: legend_data,
      orient: "vertical",
      padding: 5,
      right: 20,
      top: 20,
    },
    tooltip: {
      showDelay: 0,
      formatter: function (params) {
        if (params.value.length > 1) {
          return `<span>${params.seriesName}</span><br/><span>${
            (params.value[3] * 100).toFixed(0) + "%"
          }</span><br/><img src=${params.value[2]}/>`;
        } else {
          return (
            params.seriesName +
            " :<br/>" +
            params.name +
            " : " +
            params.value +
            "m "
          );
        }
      },
    },

    series: x,
  };

  console.log(option);
  return option;
}

export function sessionDataToHeatmap(session_data, prob_threshold = 0.5) {
  echarts.registerMap(`session_map_${session_data.run_id}`, {
    svg: createGeoSvg(
      session_data.map.image,
      session_data.map.image_width,
      session_data.map.image_height
    ),
  });

  const resolution = session_data.map.resolution;

  const x = _.map(
    _.toPairs(
      _.groupBy(
        session_data.detectedobject_set.filter(
          (el) => el.probability >= prob_threshold
        ),
        (el) => el.classname
      )
    ),
    (k) => {
      return {
        name: k[0],
        type: "heatmap",
        coordinateSystem: "geo",
        emphasis: {
          focus: "series",
        },
        data: _.map(k[1], (detected_object) => {
          return [
            detected_object.mid_x / resolution -
              session_data.map.origin_x / resolution,
            -(
              detected_object.mid_y / resolution -
              session_data.map.origin_y / resolution
            ) + session_data.map.image_height,
            detected_object.image,
            detected_object.probability,
          ];
        }),
      };
    }
  );

  const legend_data = _.map(
    _.toPairs(_.groupBy(session_data.detectedobject_set, (el) => el.classname)),
    (k) => {
      return {
        name: k[0],
      };
    }
  );

  let option = {
    backgroundColor: "#cdcdcd",

    geo: {
      map: `session_map_${session_data.run_id}`,
      roam: true,
    },
    visualMap: {
      calculable: true,
      inRange: {
        color: ["blue", "blue", "green", "yellow", "red"],
      },

      top: "top",
    },
    legend: {
      tooltip: {
        showDelay: 0,
        formatter: function (params) {
          console.log(params);
          return `<img src=${params.image}/>`;
        },
      },
      borderColor: "#252625",
      borderWidth: 1,
      borderRadius: 5,
      backgroundColor: "#fff",
      itemStyle: { borderColor: "#252625", borderWidth: 1 },
      type: "scroll",
      data: legend_data,
      orient: "vertical",
      padding: 5,
      right: 20,
      top: 20,
    },
    tooltip: {
      showDelay: 0,
      formatter: function (params) {
        if (params.value.length > 1) {
          return `<span>${params.seriesName}</span><br/><img src=${params.value[2]}/>`;
        } else {
          return (
            params.seriesName +
            " :<br/>" +
            params.name +
            " : " +
            params.value +
            "m "
          );
        }
      },
    },

    series: x,
  };

  console.log(option);
  return option;
}
