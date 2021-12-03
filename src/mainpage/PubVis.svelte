<script>
    import FusionCharts from 'fusioncharts';
    import Charts from 'fusioncharts/fusioncharts.charts';
    import FusionTheme from 'fusioncharts/themes/fusioncharts.theme.fusion';
    import SvelteFC, { fcRoot } from 'svelte-fusioncharts';

    fcRoot(FusionCharts, Charts, FusionTheme);

    const dataLineSource = {
      "chart": {
        "caption": "Динамика репутации",
        "yaxisname": "% публикаций",
        // "subcaption": '2019' + '-' + '2020',
        "showhovereffect": "1",
        "numbersuffix": "%",
        "drawcrossline": "1",
        "plottooltext": "<b>$dataValue</b> оценок $seriesName",
        "theme": "fusion"
      },
      "categories": [
        {
          "category": [
            {
              "label": "07/21"
            },
            {
              "label": "08/21"
            },
            {
              "label": "09/21"
            },
            {
              "label": "10/21"
            },
            {
              "label": "11/21"
            }
          ]
        }
      ],
      "dataset": [
        {
          "seriesname": "нейтральные",
          "data": [
            {
              "value": "16"
            },
            {
              "value": "28"
            },
            {
              "value": "34"
            },
            {
              "value": "42"
            },
            {
              "value": "54"
            }
          ]
        },
        {
          "seriesname": "положительные",
          "data": [
            {
              "value": "20"
            },
            {
              "value": "22"
            },
            {
              "value": "27"
            },
            {
              "value": "22"
            },
            {
              "value": "29"
            }
          ]
        },
        {
          "seriesname": "отрицательные",
          "data": [
            {
              "value": "18"
            },
            {
              "value": "19"
            },
            {
              "value": "21"
            },
            {
              "value": "21"
            },
            {
              "value": "24"
            }
          ]
        }
      ]
    };

    const dataCircSource = {
      "chart": {
        "caption": "Твои публикации",
        "subcaption": "За все время",
        "showpercentvalues": "1",
        "defaultcenterlabel": "Публикации",
        "aligncaptionwithcanvas": "0",
        "captionpadding": "0",
        "decimals": "1",
        "plottooltext": "<b>$percentValue</b> ваших публикаций <b>$label</b>",
        "centerlabel": "$value",
        "theme": "fusion"
      },
      "data": [
        {
          "label": "нейтральные",
          "value": "1000"
        },
        {
          "label": "положительные",
          "value": "5300"
        },
        {
          "label": "отрицательные",
          "value": "10500"
        },
      ]
    };
</script>

<div class="vis">
    <SvelteFC type="msline" width={600} height={400} dataFormat="json" dataSource={dataLineSource} />
    <SvelteFC type="doughnut2d" width={600} height={400} dataFormat="json" dataSource={dataCircSource}/>
</div>

<style>
    .vis {
        display: flex;
        justify-content: center;
    }
</style>
