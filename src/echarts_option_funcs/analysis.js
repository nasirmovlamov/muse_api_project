import * as echarts from "echarts";
import _ from "lodash";
import { createGeoSvg } from "../components/geosvg/GeoSvg";

export function analysisDataToScatter(analysis_data) {
  echarts.registerMap(`analysis_map_${analysis_data.id}`, {
    svg: createGeoSvg(
      analysis_data.map.image,
      analysis_data.map.image_width,
      analysis_data.map.image_height
    ),
  });

  const resolution = analysis_data.map.resolution;
  let option = {
    backgroundColor: "#cdcdcd",

    geo: {
      map: `analysis_map_${analysis_data.id}`,
      roam: true,
    },
    tooltip: {
      showDelay: 0,
      formatter: function (params) {
        if (params.value.length > 1) {
          return `<img src=${params.value[2]}/>`;
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
      data: analysis_data.identifiedplant_set.map((ips) => {
        return {
          image: ips.image,
          name: ips.plant_id_res
            ? `Cluster ${ips.label} - ${ips.plant_id_res.suggestions[0].plant_name}`
            : `Cluster ${ips.label} `,
        };
      }),
      orient: "vertical",
      padding: 5,
      right: 20,
      top: 20,
    },
    series: [],
  };

  _.forEach(analysis_data.identifiedplant_set, (ips) => {
    option.series.push({
      name: ips.plant_id_res
        ? `Cluster ${ips.label} - ${ips.plant_id_res.suggestions[0].plant_name}`
        : `Cluster ${ips.label}`,
      type: "scatter",
      coordinateSystem: "geo",
      emphasis: {
        focus: "series",
      },
      data: ips.detected_objects.map((detected_object) => {
        return [
          detected_object.mid_x / resolution -
            analysis_data.map.origin_x / resolution,
          -(
            detected_object.mid_y / resolution -
            analysis_data.map.origin_y / resolution
          ) + analysis_data.map.image_height,
          detected_object.image,
        ];
      }),
    });
  });
  return option;
}

export function analysisDataToHeatmap(analysis_data) {
  echarts.registerMap(`analysis_map_${analysis_data.id}`, {
    svg: createGeoSvg(
      analysis_data.map.image,
      analysis_data.map.image_width,
      analysis_data.map.image_height
    ),
  });

  const resolution = analysis_data.map.resolution;
  let option = {
    backgroundColor: "#cdcdcd",

    geo: {
      map: `analysis_map_${analysis_data.id}`,
      roam: true,
    },
    visualMap: {
      calculable: true,
      inRange: {
        color: ["blue", "blue", "green", "yellow", "red"],
      },

      top: "top",
    },
    tooltip: {
      showDelay: 0,
      formatter: function (params) {
        if (params.value.length > 1) {
          return `<img src=${params.value[2]}/>`;
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
      data: analysis_data.identifiedplant_set.map((ips) => {
        return {
          image: ips.image,
          name: ips.plant_id_res
            ? `Cluster ${ips.label} - ${ips.plant_id_res.suggestions[0].plant_name}`
            : `Cluster ${ips.label} `,
        };
      }),
      orient: "vertical",
      padding: 5,
      right: 20,
      top: 20,
    },
    series: [],
  };

  _.forEach(analysis_data.identifiedplant_set, (ips) => {
    // _.forEach(ips.detected_objects, (detected_object) => {
    //   option.series[0].data.push([
    //     detected_object.mid_x / resolution -
    //       analysis_data.map.origin_x / resolution,
    //     -(
    //       detected_object.mid_y / resolution -
    //       analysis_data.map.origin_y / resolution
    //     ) + analysis_data.map.image_height,
    //     20,
    //     detected_object.image,
    //   ]);
    // });
    option.series.push({
      name: ips.plant_id_res
        ? `Cluster ${ips.label} - ${ips.plant_id_res.suggestions[0].plant_name}`
        : `Cluster ${ips.label}`,
      type: "heatmap",
      coordinateSystem: "geo",
      emphasis: {
        focus: "series",
      },
      pointSize: 10,
      blurSize: 20,
      data: ips.detected_objects.map((detected_object) => {
        return [
          detected_object.mid_x / resolution -
            analysis_data.map.origin_x / resolution,
          -(
            detected_object.mid_y / resolution -
            analysis_data.map.origin_y / resolution
          ) + analysis_data.map.image_height,
          20,
          detected_object.image,
        ];
      }),
    });
  });
  return option;
}
