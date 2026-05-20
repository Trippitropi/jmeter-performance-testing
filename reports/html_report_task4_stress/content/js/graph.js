/*
   Licensed to the Apache Software Foundation (ASF) under one or more
   contributor license agreements.  See the NOTICE file distributed with
   this work for additional information regarding copyright ownership.
   The ASF licenses this file to You under the Apache License, Version 2.0
   (the "License"); you may not use this file except in compliance with
   the License.  You may obtain a copy of the License at

       http://www.apache.org/licenses/LICENSE-2.0

   Unless required by applicable law or agreed to in writing, software
   distributed under the License is distributed on an "AS IS" BASIS,
   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   See the License for the specific language governing permissions and
   limitations under the License.
*/
$(document).ready(function() {

    $(".click-title").mouseenter( function(    e){
        e.preventDefault();
        this.style.cursor="pointer";
    });
    $(".click-title").mousedown( function(event){
        event.preventDefault();
    });

    // Ugly code while this script is shared among several pages
    try{
        refreshHitsPerSecond(true);
    } catch(e){}
    try{
        refreshResponseTimeOverTime(true);
    } catch(e){}
    try{
        refreshResponseTimePercentiles();
    } catch(e){}
});


var responseTimePercentilesInfos = {
        data: {"result": {"minY": 115.0, "minX": 0.0, "maxY": 30498.0, "series": [{"data": [[0.0, 115.0], [0.1, 116.0], [0.2, 116.0], [0.3, 116.0], [0.4, 116.0], [0.5, 116.0], [0.6, 116.0], [0.7, 116.0], [0.8, 116.0], [0.9, 117.0], [1.0, 117.0], [1.1, 117.0], [1.2, 117.0], [1.3, 117.0], [1.4, 117.0], [1.5, 117.0], [1.6, 117.0], [1.7, 117.0], [1.8, 117.0], [1.9, 117.0], [2.0, 117.0], [2.1, 117.0], [2.2, 117.0], [2.3, 117.0], [2.4, 117.0], [2.5, 117.0], [2.6, 117.0], [2.7, 117.0], [2.8, 117.0], [2.9, 117.0], [3.0, 117.0], [3.1, 117.0], [3.2, 117.0], [3.3, 118.0], [3.4, 118.0], [3.5, 118.0], [3.6, 118.0], [3.7, 118.0], [3.8, 118.0], [3.9, 118.0], [4.0, 118.0], [4.1, 118.0], [4.2, 118.0], [4.3, 118.0], [4.4, 118.0], [4.5, 118.0], [4.6, 118.0], [4.7, 118.0], [4.8, 118.0], [4.9, 118.0], [5.0, 118.0], [5.1, 118.0], [5.2, 118.0], [5.3, 118.0], [5.4, 118.0], [5.5, 118.0], [5.6, 118.0], [5.7, 118.0], [5.8, 118.0], [5.9, 118.0], [6.0, 118.0], [6.1, 118.0], [6.2, 118.0], [6.3, 118.0], [6.4, 118.0], [6.5, 118.0], [6.6, 118.0], [6.7, 118.0], [6.8, 119.0], [6.9, 119.0], [7.0, 119.0], [7.1, 119.0], [7.2, 119.0], [7.3, 119.0], [7.4, 119.0], [7.5, 119.0], [7.6, 119.0], [7.7, 119.0], [7.8, 119.0], [7.9, 119.0], [8.0, 119.0], [8.1, 119.0], [8.2, 119.0], [8.3, 119.0], [8.4, 119.0], [8.5, 119.0], [8.6, 119.0], [8.7, 119.0], [8.8, 119.0], [8.9, 119.0], [9.0, 119.0], [9.1, 119.0], [9.2, 120.0], [9.3, 120.0], [9.4, 120.0], [9.5, 120.0], [9.6, 120.0], [9.7, 120.0], [9.8, 120.0], [9.9, 120.0], [10.0, 120.0], [10.1, 120.0], [10.2, 120.0], [10.3, 120.0], [10.4, 120.0], [10.5, 120.0], [10.6, 120.0], [10.7, 120.0], [10.8, 120.0], [10.9, 120.0], [11.0, 120.0], [11.1, 120.0], [11.2, 120.0], [11.3, 120.0], [11.4, 120.0], [11.5, 120.0], [11.6, 120.0], [11.7, 120.0], [11.8, 120.0], [11.9, 120.0], [12.0, 121.0], [12.1, 121.0], [12.2, 121.0], [12.3, 121.0], [12.4, 121.0], [12.5, 121.0], [12.6, 121.0], [12.7, 121.0], [12.8, 121.0], [12.9, 121.0], [13.0, 121.0], [13.1, 121.0], [13.2, 121.0], [13.3, 121.0], [13.4, 121.0], [13.5, 121.0], [13.6, 121.0], [13.7, 121.0], [13.8, 121.0], [13.9, 121.0], [14.0, 121.0], [14.1, 121.0], [14.2, 121.0], [14.3, 121.0], [14.4, 121.0], [14.5, 121.0], [14.6, 121.0], [14.7, 121.0], [14.8, 121.0], [14.9, 121.0], [15.0, 121.0], [15.1, 121.0], [15.2, 121.0], [15.3, 121.0], [15.4, 121.0], [15.5, 121.0], [15.6, 121.0], [15.7, 121.0], [15.8, 121.0], [15.9, 121.0], [16.0, 121.0], [16.1, 121.0], [16.2, 122.0], [16.3, 122.0], [16.4, 122.0], [16.5, 122.0], [16.6, 122.0], [16.7, 122.0], [16.8, 122.0], [16.9, 122.0], [17.0, 122.0], [17.1, 122.0], [17.2, 122.0], [17.3, 122.0], [17.4, 122.0], [17.5, 122.0], [17.6, 122.0], [17.7, 122.0], [17.8, 122.0], [17.9, 122.0], [18.0, 122.0], [18.1, 122.0], [18.2, 122.0], [18.3, 122.0], [18.4, 122.0], [18.5, 122.0], [18.6, 122.0], [18.7, 122.0], [18.8, 122.0], [18.9, 122.0], [19.0, 122.0], [19.1, 122.0], [19.2, 122.0], [19.3, 122.0], [19.4, 122.0], [19.5, 122.0], [19.6, 122.0], [19.7, 122.0], [19.8, 122.0], [19.9, 122.0], [20.0, 122.0], [20.1, 122.0], [20.2, 122.0], [20.3, 122.0], [20.4, 122.0], [20.5, 122.0], [20.6, 122.0], [20.7, 122.0], [20.8, 122.0], [20.9, 122.0], [21.0, 122.0], [21.1, 122.0], [21.2, 122.0], [21.3, 122.0], [21.4, 122.0], [21.5, 122.0], [21.6, 122.0], [21.7, 122.0], [21.8, 122.0], [21.9, 122.0], [22.0, 122.0], [22.1, 122.0], [22.2, 122.0], [22.3, 122.0], [22.4, 122.0], [22.5, 122.0], [22.6, 122.0], [22.7, 122.0], [22.8, 122.0], [22.9, 122.0], [23.0, 123.0], [23.1, 123.0], [23.2, 123.0], [23.3, 123.0], [23.4, 123.0], [23.5, 123.0], [23.6, 123.0], [23.7, 123.0], [23.8, 123.0], [23.9, 123.0], [24.0, 123.0], [24.1, 123.0], [24.2, 123.0], [24.3, 123.0], [24.4, 123.0], [24.5, 123.0], [24.6, 123.0], [24.7, 123.0], [24.8, 123.0], [24.9, 123.0], [25.0, 123.0], [25.1, 123.0], [25.2, 123.0], [25.3, 123.0], [25.4, 123.0], [25.5, 123.0], [25.6, 123.0], [25.7, 123.0], [25.8, 123.0], [25.9, 123.0], [26.0, 123.0], [26.1, 123.0], [26.2, 123.0], [26.3, 123.0], [26.4, 123.0], [26.5, 123.0], [26.6, 123.0], [26.7, 123.0], [26.8, 123.0], [26.9, 123.0], [27.0, 123.0], [27.1, 123.0], [27.2, 123.0], [27.3, 123.0], [27.4, 123.0], [27.5, 123.0], [27.6, 123.0], [27.7, 123.0], [27.8, 123.0], [27.9, 123.0], [28.0, 123.0], [28.1, 123.0], [28.2, 123.0], [28.3, 123.0], [28.4, 123.0], [28.5, 123.0], [28.6, 123.0], [28.7, 123.0], [28.8, 124.0], [28.9, 124.0], [29.0, 124.0], [29.1, 124.0], [29.2, 124.0], [29.3, 124.0], [29.4, 124.0], [29.5, 124.0], [29.6, 124.0], [29.7, 124.0], [29.8, 124.0], [29.9, 124.0], [30.0, 124.0], [30.1, 124.0], [30.2, 124.0], [30.3, 124.0], [30.4, 124.0], [30.5, 124.0], [30.6, 124.0], [30.7, 124.0], [30.8, 124.0], [30.9, 124.0], [31.0, 124.0], [31.1, 124.0], [31.2, 124.0], [31.3, 124.0], [31.4, 124.0], [31.5, 124.0], [31.6, 124.0], [31.7, 124.0], [31.8, 124.0], [31.9, 124.0], [32.0, 124.0], [32.1, 124.0], [32.2, 124.0], [32.3, 124.0], [32.4, 125.0], [32.5, 125.0], [32.6, 125.0], [32.7, 125.0], [32.8, 125.0], [32.9, 125.0], [33.0, 125.0], [33.1, 125.0], [33.2, 125.0], [33.3, 125.0], [33.4, 125.0], [33.5, 125.0], [33.6, 125.0], [33.7, 125.0], [33.8, 125.0], [33.9, 125.0], [34.0, 125.0], [34.1, 125.0], [34.2, 125.0], [34.3, 125.0], [34.4, 125.0], [34.5, 125.0], [34.6, 125.0], [34.7, 125.0], [34.8, 125.0], [34.9, 125.0], [35.0, 125.0], [35.1, 125.0], [35.2, 125.0], [35.3, 126.0], [35.4, 126.0], [35.5, 126.0], [35.6, 126.0], [35.7, 126.0], [35.8, 126.0], [35.9, 126.0], [36.0, 126.0], [36.1, 126.0], [36.2, 126.0], [36.3, 126.0], [36.4, 126.0], [36.5, 126.0], [36.6, 126.0], [36.7, 126.0], [36.8, 126.0], [36.9, 126.0], [37.0, 126.0], [37.1, 126.0], [37.2, 126.0], [37.3, 126.0], [37.4, 126.0], [37.5, 126.0], [37.6, 127.0], [37.7, 127.0], [37.8, 127.0], [37.9, 127.0], [38.0, 127.0], [38.1, 127.0], [38.2, 127.0], [38.3, 127.0], [38.4, 127.0], [38.5, 127.0], [38.6, 127.0], [38.7, 127.0], [38.8, 127.0], [38.9, 127.0], [39.0, 127.0], [39.1, 127.0], [39.2, 127.0], [39.3, 127.0], [39.4, 127.0], [39.5, 127.0], [39.6, 127.0], [39.7, 128.0], [39.8, 128.0], [39.9, 128.0], [40.0, 128.0], [40.1, 128.0], [40.2, 128.0], [40.3, 128.0], [40.4, 128.0], [40.5, 128.0], [40.6, 128.0], [40.7, 128.0], [40.8, 128.0], [40.9, 128.0], [41.0, 128.0], [41.1, 128.0], [41.2, 128.0], [41.3, 128.0], [41.4, 128.0], [41.5, 128.0], [41.6, 129.0], [41.7, 129.0], [41.8, 129.0], [41.9, 129.0], [42.0, 129.0], [42.1, 129.0], [42.2, 129.0], [42.3, 129.0], [42.4, 129.0], [42.5, 129.0], [42.6, 129.0], [42.7, 129.0], [42.8, 129.0], [42.9, 129.0], [43.0, 129.0], [43.1, 130.0], [43.2, 130.0], [43.3, 130.0], [43.4, 130.0], [43.5, 130.0], [43.6, 130.0], [43.7, 130.0], [43.8, 130.0], [43.9, 130.0], [44.0, 130.0], [44.1, 130.0], [44.2, 130.0], [44.3, 131.0], [44.4, 131.0], [44.5, 131.0], [44.6, 131.0], [44.7, 131.0], [44.8, 131.0], [44.9, 131.0], [45.0, 131.0], [45.1, 132.0], [45.2, 132.0], [45.3, 132.0], [45.4, 132.0], [45.5, 132.0], [45.6, 132.0], [45.7, 132.0], [45.8, 132.0], [45.9, 132.0], [46.0, 133.0], [46.1, 133.0], [46.2, 133.0], [46.3, 133.0], [46.4, 133.0], [46.5, 133.0], [46.6, 133.0], [46.7, 133.0], [46.8, 133.0], [46.9, 134.0], [47.0, 134.0], [47.1, 134.0], [47.2, 134.0], [47.3, 134.0], [47.4, 134.0], [47.5, 134.0], [47.6, 135.0], [47.7, 135.0], [47.8, 135.0], [47.9, 135.0], [48.0, 135.0], [48.1, 135.0], [48.2, 135.0], [48.3, 136.0], [48.4, 136.0], [48.5, 136.0], [48.6, 136.0], [48.7, 136.0], [48.8, 136.0], [48.9, 136.0], [49.0, 137.0], [49.1, 137.0], [49.2, 137.0], [49.3, 137.0], [49.4, 137.0], [49.5, 137.0], [49.6, 137.0], [49.7, 137.0], [49.8, 137.0], [49.9, 137.0], [50.0, 138.0], [50.1, 138.0], [50.2, 138.0], [50.3, 138.0], [50.4, 138.0], [50.5, 138.0], [50.6, 138.0], [50.7, 138.0], [50.8, 139.0], [50.9, 139.0], [51.0, 139.0], [51.1, 139.0], [51.2, 139.0], [51.3, 139.0], [51.4, 139.0], [51.5, 140.0], [51.6, 140.0], [51.7, 140.0], [51.8, 140.0], [51.9, 140.0], [52.0, 140.0], [52.1, 140.0], [52.2, 141.0], [52.3, 141.0], [52.4, 141.0], [52.5, 141.0], [52.6, 141.0], [52.7, 142.0], [52.8, 142.0], [52.9, 142.0], [53.0, 142.0], [53.1, 142.0], [53.2, 142.0], [53.3, 143.0], [53.4, 143.0], [53.5, 143.0], [53.6, 144.0], [53.7, 144.0], [53.8, 144.0], [53.9, 144.0], [54.0, 144.0], [54.1, 144.0], [54.2, 144.0], [54.3, 145.0], [54.4, 145.0], [54.5, 145.0], [54.6, 145.0], [54.7, 146.0], [54.8, 146.0], [54.9, 146.0], [55.0, 146.0], [55.1, 146.0], [55.2, 146.0], [55.3, 147.0], [55.4, 147.0], [55.5, 147.0], [55.6, 147.0], [55.7, 147.0], [55.8, 147.0], [55.9, 148.0], [56.0, 148.0], [56.1, 148.0], [56.2, 148.0], [56.3, 148.0], [56.4, 149.0], [56.5, 149.0], [56.6, 149.0], [56.7, 149.0], [56.8, 149.0], [56.9, 150.0], [57.0, 150.0], [57.1, 150.0], [57.2, 150.0], [57.3, 150.0], [57.4, 151.0], [57.5, 151.0], [57.6, 151.0], [57.7, 151.0], [57.8, 151.0], [57.9, 152.0], [58.0, 152.0], [58.1, 152.0], [58.2, 152.0], [58.3, 152.0], [58.4, 153.0], [58.5, 153.0], [58.6, 153.0], [58.7, 153.0], [58.8, 153.0], [58.9, 154.0], [59.0, 154.0], [59.1, 154.0], [59.2, 154.0], [59.3, 155.0], [59.4, 155.0], [59.5, 155.0], [59.6, 155.0], [59.7, 155.0], [59.8, 155.0], [59.9, 156.0], [60.0, 156.0], [60.1, 156.0], [60.2, 157.0], [60.3, 157.0], [60.4, 157.0], [60.5, 157.0], [60.6, 158.0], [60.7, 158.0], [60.8, 158.0], [60.9, 158.0], [61.0, 159.0], [61.1, 159.0], [61.2, 159.0], [61.3, 159.0], [61.4, 159.0], [61.5, 160.0], [61.6, 160.0], [61.7, 160.0], [61.8, 161.0], [61.9, 161.0], [62.0, 161.0], [62.1, 161.0], [62.2, 162.0], [62.3, 162.0], [62.4, 162.0], [62.5, 162.0], [62.6, 163.0], [62.7, 163.0], [62.8, 163.0], [62.9, 164.0], [63.0, 164.0], [63.1, 164.0], [63.2, 164.0], [63.3, 164.0], [63.4, 165.0], [63.5, 165.0], [63.6, 165.0], [63.7, 165.0], [63.8, 166.0], [63.9, 166.0], [64.0, 166.0], [64.1, 166.0], [64.2, 166.0], [64.3, 166.0], [64.4, 167.0], [64.5, 167.0], [64.6, 167.0], [64.7, 167.0], [64.8, 168.0], [64.9, 168.0], [65.0, 168.0], [65.1, 168.0], [65.2, 168.0], [65.3, 168.0], [65.4, 169.0], [65.5, 169.0], [65.6, 169.0], [65.7, 169.0], [65.8, 169.0], [65.9, 170.0], [66.0, 170.0], [66.1, 170.0], [66.2, 170.0], [66.3, 170.0], [66.4, 171.0], [66.5, 171.0], [66.6, 171.0], [66.7, 171.0], [66.8, 171.0], [66.9, 172.0], [67.0, 172.0], [67.1, 172.0], [67.2, 173.0], [67.3, 173.0], [67.4, 173.0], [67.5, 173.0], [67.6, 174.0], [67.7, 174.0], [67.8, 175.0], [67.9, 176.0], [68.0, 176.0], [68.1, 176.0], [68.2, 177.0], [68.3, 177.0], [68.4, 177.0], [68.5, 178.0], [68.6, 178.0], [68.7, 178.0], [68.8, 179.0], [68.9, 179.0], [69.0, 179.0], [69.1, 179.0], [69.2, 180.0], [69.3, 180.0], [69.4, 180.0], [69.5, 181.0], [69.6, 181.0], [69.7, 181.0], [69.8, 181.0], [69.9, 182.0], [70.0, 182.0], [70.1, 182.0], [70.2, 182.0], [70.3, 182.0], [70.4, 183.0], [70.5, 183.0], [70.6, 183.0], [70.7, 183.0], [70.8, 184.0], [70.9, 184.0], [71.0, 184.0], [71.1, 185.0], [71.2, 185.0], [71.3, 185.0], [71.4, 185.0], [71.5, 186.0], [71.6, 186.0], [71.7, 186.0], [71.8, 186.0], [71.9, 186.0], [72.0, 186.0], [72.1, 187.0], [72.2, 187.0], [72.3, 187.0], [72.4, 187.0], [72.5, 187.0], [72.6, 188.0], [72.7, 188.0], [72.8, 188.0], [72.9, 188.0], [73.0, 189.0], [73.1, 189.0], [73.2, 189.0], [73.3, 189.0], [73.4, 190.0], [73.5, 190.0], [73.6, 190.0], [73.7, 190.0], [73.8, 191.0], [73.9, 191.0], [74.0, 192.0], [74.1, 192.0], [74.2, 192.0], [74.3, 193.0], [74.4, 193.0], [74.5, 193.0], [74.6, 193.0], [74.7, 194.0], [74.8, 195.0], [74.9, 195.0], [75.0, 196.0], [75.1, 196.0], [75.2, 197.0], [75.3, 197.0], [75.4, 198.0], [75.5, 198.0], [75.6, 199.0], [75.7, 200.0], [75.8, 200.0], [75.9, 201.0], [76.0, 201.0], [76.1, 202.0], [76.2, 202.0], [76.3, 203.0], [76.4, 203.0], [76.5, 204.0], [76.6, 204.0], [76.7, 204.0], [76.8, 205.0], [76.9, 205.0], [77.0, 206.0], [77.1, 206.0], [77.2, 207.0], [77.3, 207.0], [77.4, 207.0], [77.5, 208.0], [77.6, 209.0], [77.7, 209.0], [77.8, 211.0], [77.9, 211.0], [78.0, 212.0], [78.1, 212.0], [78.2, 213.0], [78.3, 214.0], [78.4, 215.0], [78.5, 216.0], [78.6, 216.0], [78.7, 217.0], [78.8, 218.0], [78.9, 218.0], [79.0, 219.0], [79.1, 219.0], [79.2, 220.0], [79.3, 220.0], [79.4, 221.0], [79.5, 222.0], [79.6, 222.0], [79.7, 224.0], [79.8, 225.0], [79.9, 225.0], [80.0, 226.0], [80.1, 227.0], [80.2, 227.0], [80.3, 229.0], [80.4, 229.0], [80.5, 230.0], [80.6, 232.0], [80.7, 232.0], [80.8, 233.0], [80.9, 234.0], [81.0, 236.0], [81.1, 237.0], [81.2, 238.0], [81.3, 239.0], [81.4, 239.0], [81.5, 240.0], [81.6, 241.0], [81.7, 241.0], [81.8, 242.0], [81.9, 243.0], [82.0, 243.0], [82.1, 244.0], [82.2, 244.0], [82.3, 246.0], [82.4, 247.0], [82.5, 247.0], [82.6, 247.0], [82.7, 248.0], [82.8, 249.0], [82.9, 249.0], [83.0, 250.0], [83.1, 251.0], [83.2, 251.0], [83.3, 252.0], [83.4, 252.0], [83.5, 254.0], [83.6, 254.0], [83.7, 255.0], [83.8, 256.0], [83.9, 257.0], [84.0, 259.0], [84.1, 261.0], [84.2, 262.0], [84.3, 262.0], [84.4, 263.0], [84.5, 264.0], [84.6, 265.0], [84.7, 266.0], [84.8, 266.0], [84.9, 267.0], [85.0, 268.0], [85.1, 269.0], [85.2, 271.0], [85.3, 271.0], [85.4, 272.0], [85.5, 275.0], [85.6, 276.0], [85.7, 279.0], [85.8, 280.0], [85.9, 281.0], [86.0, 281.0], [86.1, 282.0], [86.2, 284.0], [86.3, 285.0], [86.4, 286.0], [86.5, 289.0], [86.6, 291.0], [86.7, 291.0], [86.8, 293.0], [86.9, 295.0], [87.0, 297.0], [87.1, 298.0], [87.2, 299.0], [87.3, 301.0], [87.4, 302.0], [87.5, 303.0], [87.6, 305.0], [87.7, 306.0], [87.8, 308.0], [87.9, 310.0], [88.0, 311.0], [88.1, 311.0], [88.2, 312.0], [88.3, 314.0], [88.4, 315.0], [88.5, 316.0], [88.6, 321.0], [88.7, 323.0], [88.8, 324.0], [88.9, 325.0], [89.0, 328.0], [89.1, 332.0], [89.2, 335.0], [89.3, 341.0], [89.4, 349.0], [89.5, 357.0], [89.6, 364.0], [89.7, 367.0], [89.8, 373.0], [89.9, 380.0], [90.0, 383.0], [90.1, 401.0], [90.2, 404.0], [90.3, 407.0], [90.4, 409.0], [90.5, 416.0], [90.6, 421.0], [90.7, 427.0], [90.8, 431.0], [90.9, 433.0], [91.0, 435.0], [91.1, 441.0], [91.2, 449.0], [91.3, 464.0], [91.4, 471.0], [91.5, 475.0], [91.6, 482.0], [91.7, 489.0], [91.8, 490.0], [91.9, 493.0], [92.0, 494.0], [92.1, 502.0], [92.2, 512.0], [92.3, 515.0], [92.4, 519.0], [92.5, 524.0], [92.6, 529.0], [92.7, 534.0], [92.8, 537.0], [92.9, 541.0], [93.0, 545.0], [93.1, 552.0], [93.2, 554.0], [93.3, 564.0], [93.4, 569.0], [93.5, 577.0], [93.6, 582.0], [93.7, 586.0], [93.8, 590.0], [93.9, 594.0], [94.0, 600.0], [94.1, 608.0], [94.2, 624.0], [94.3, 653.0], [94.4, 666.0], [94.5, 671.0], [94.6, 707.0], [94.7, 723.0], [94.8, 726.0], [94.9, 737.0], [95.0, 753.0], [95.1, 754.0], [95.2, 776.0], [95.3, 787.0], [95.4, 792.0], [95.5, 812.0], [95.6, 828.0], [95.7, 847.0], [95.8, 875.0], [95.9, 908.0], [96.0, 949.0], [96.1, 981.0], [96.2, 1065.0], [96.3, 1110.0], [96.4, 1125.0], [96.5, 1185.0], [96.6, 1278.0], [96.7, 1350.0], [96.8, 1456.0], [96.9, 1528.0], [97.0, 1625.0], [97.1, 1734.0], [97.2, 1820.0], [97.3, 1929.0], [97.4, 2017.0], [97.5, 2047.0], [97.6, 2056.0], [97.7, 30116.0], [97.8, 30116.0], [97.9, 30117.0], [98.0, 30117.0], [98.1, 30118.0], [98.2, 30119.0], [98.3, 30119.0], [98.4, 30120.0], [98.5, 30121.0], [98.6, 30121.0], [98.7, 30122.0], [98.8, 30122.0], [98.9, 30122.0], [99.0, 30122.0], [99.1, 30122.0], [99.2, 30123.0], [99.3, 30123.0], [99.4, 30128.0], [99.5, 30472.0], [99.6, 30484.0], [99.7, 30486.0], [99.8, 30488.0], [99.9, 30492.0], [100.0, 30498.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
        getOptions: function() {
            return {
                series: {
                    points: { show: false }
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimePercentiles'
                },
                xaxis: {
                    tickDecimals: 1,
                    axisLabel: "Percentiles",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Percentile value in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : %x.2 percentile was %y ms"
                },
                selection: { mode: "xy" },
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimePercentiles"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimesPercentiles"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimesPercentiles"), dataset, prepareOverviewOptions(options));
        }
};

/**
 * @param elementId Id of element where we display message
 */
function setEmptyGraph(elementId) {
    $(function() {
        $(elementId).text("No graph series with filter="+seriesFilter);
    });
}

// Response times percentiles
function refreshResponseTimePercentiles() {
    var infos = responseTimePercentilesInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimePercentiles");
        return;
    }
    if (isGraph($("#flotResponseTimesPercentiles"))){
        infos.createGraph();
    } else {
        var choiceContainer = $("#choicesResponseTimePercentiles");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimesPercentiles", "#overviewResponseTimesPercentiles");
        $('#bodyResponseTimePercentiles .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var responseTimeDistributionInfos = {
        data: {"result": {"minY": 1.0, "minX": 100.0, "maxY": 3026.0, "series": [{"data": [[600.0, 24.0], [700.0, 33.0], [800.0, 17.0], [200.0, 465.0], [900.0, 12.0], [1000.0, 6.0], [1100.0, 9.0], [1200.0, 6.0], [300.0, 111.0], [1300.0, 4.0], [1400.0, 4.0], [1500.0, 5.0], [1600.0, 3.0], [100.0, 3026.0], [400.0, 79.0], [1700.0, 5.0], [1800.0, 4.0], [1900.0, 3.0], [30400.0, 24.0], [30100.0, 70.0], [29700.0, 1.0], [30000.0, 1.0], [2000.0, 10.0], [500.0, 78.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 30400.0, "title": "Response Time Distribution"}},
        getOptions: function() {
            var granularity = this.data.result.granularity;
            return {
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimeDistribution'
                },
                xaxis:{
                    axisLabel: "Response times in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of responses",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                bars : {
                    show: true,
                    barWidth: this.data.result.granularity
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: function(label, xval, yval, flotItem){
                        return yval + " responses for " + label + " were between " + xval + " and " + (xval + granularity) + " ms";
                    }
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimeDistribution"), prepareData(data.result.series, $("#choicesResponseTimeDistribution")), options);
        }

};

// Response time distribution
function refreshResponseTimeDistribution() {
    var infos = responseTimeDistributionInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimeDistribution");
        return;
    }
    if (isGraph($("#flotResponseTimeDistribution"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimeDistribution");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        $('#footerResponseTimeDistribution .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var syntheticResponseTimeDistributionInfos = {
        data: {"result": {"minY": 30.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 3682.0, "series": [{"data": [[0.0, 3682.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 192.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 30.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [[3.0, 96.0]], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 3.0, "title": "Synthetic Response Times Distribution"}},
        getOptions: function() {
            return {
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendSyntheticResponseTimeDistribution'
                },
                xaxis:{
                    axisLabel: "Response times ranges",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                    tickLength:0,
                    min:-0.5,
                    max:3.5
                },
                yaxis: {
                    axisLabel: "Number of responses",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                bars : {
                    show: true,
                    align: "center",
                    barWidth: 0.25,
                    fill:.75
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: function(label, xval, yval, flotItem){
                        return yval + " " + label;
                    }
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var options = this.getOptions();
            prepareOptions(options, data);
            options.xaxis.ticks = data.result.ticks;
            $.plot($("#flotSyntheticResponseTimeDistribution"), prepareData(data.result.series, $("#choicesSyntheticResponseTimeDistribution")), options);
        }

};

// Response time distribution
function refreshSyntheticResponseTimeDistribution() {
    var infos = syntheticResponseTimeDistributionInfos;
    prepareSeries(infos.data, true);
    if (isGraph($("#flotSyntheticResponseTimeDistribution"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesSyntheticResponseTimeDistribution");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        $('#footerSyntheticResponseTimeDistribution .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var activeThreadsOverTimeInfos = {
        data: {"result": {"minY": 68.01535836177482, "minX": 1.77926706E12, "maxY": 160.95544554455466, "series": [{"data": [[1.77926706E12, 160.95544554455466], [1.77926712E12, 68.01535836177482]], "isOverall": false, "label": "Thread Group", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.77926712E12, "title": "Active Threads Over Time"}},
        getOptions: function() {
            return {
                series: {
                    stack: true,
                    lines: {
                        show: true,
                        fill: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of active threads",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 6,
                    show: true,
                    container: '#legendActiveThreadsOverTime'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                selection: {
                    mode: 'xy'
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : At %x there were %y active threads"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesActiveThreadsOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotActiveThreadsOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewActiveThreadsOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Active Threads Over Time
function refreshActiveThreadsOverTime(fixTimestamps) {
    var infos = activeThreadsOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 10800000);
    }
    if(isGraph($("#flotActiveThreadsOverTime"))) {
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesActiveThreadsOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotActiveThreadsOverTime", "#overviewActiveThreadsOverTime");
        $('#footerActiveThreadsOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var timeVsThreadsInfos = {
        data: {"result": {"minY": 117.0, "minX": 1.0, "maxY": 6788.222222222223, "series": [{"data": [[2.0, 123.0], [3.0, 123.0], [4.0, 122.0], [5.0, 123.0], [6.0, 117.0], [7.0, 121.5], [8.0, 122.0], [9.0, 119.5], [10.0, 121.86666666666666], [11.0, 122.0], [12.0, 122.21052631578948], [13.0, 123.0], [14.0, 121.73333333333333], [15.0, 121.625], [16.0, 124.85714285714286], [17.0, 126.66666666666666], [18.0, 129.14285714285714], [19.0, 121.0], [20.0, 122.5], [21.0, 120.83333333333334], [22.0, 122.0], [23.0, 121.85294117647058], [24.0, 121.0], [25.0, 121.16666666666666], [26.0, 121.38461538461539], [27.0, 122.75], [28.0, 118.5], [29.0, 120.5], [30.0, 120.5], [31.0, 120.33333333333334], [33.0, 121.0], [32.0, 125.28571428571428], [35.0, 123.0], [34.0, 126.0], [37.0, 121.0], [36.0, 119.5], [39.0, 119.8], [38.0, 120.5], [41.0, 123.39999999999999], [40.0, 122.4], [43.0, 121.0], [42.0, 118.25], [45.0, 119.625], [44.0, 122.72727272727272], [47.0, 124.6], [46.0, 121.0], [49.0, 6788.222222222223], [48.0, 124.50000000000001], [51.0, 136.83333333333331], [50.0, 134.0], [53.0, 3884.75], [52.0, 139.0], [55.0, 145.4], [54.0, 148.1], [57.0, 134.0], [56.0, 143.0], [59.0, 131.91666666666674], [58.0, 136.3], [61.0, 134.4], [60.0, 136.0], [63.0, 130.5], [62.0, 126.75], [67.0, 123.79166666666667], [66.0, 5384.650000000001], [65.0, 5120.499999999999], [64.0, 5121.3], [71.0, 120.0], [70.0, 121.99999999999999], [69.0, 124.16666666666666], [68.0, 121.0], [75.0, 121.5], [74.0, 124.66666666666667], [73.0, 124.0], [72.0, 3280.1578947368416], [79.0, 125.0], [78.0, 123.85], [77.0, 119.42857142857143], [76.0, 119.0], [83.0, 2432.923076923077], [82.0, 2697.771428571429], [81.0, 121.13636363636364], [80.0, 125.42857142857143], [87.0, 3895.062500000001], [86.0, 119.55555555555556], [85.0, 119.0], [84.0, 3454.1111111111113], [89.0, 217.23999999999995], [90.0, 514.0], [91.0, 425.203125], [88.0, 123.80645161290323], [92.0, 1298.730769230769], [93.0, 272.9], [94.0, 122.66666666666664], [95.0, 2247.0704225352124], [96.0, 3556.1243523316034], [97.0, 134.33333333333331], [98.0, 154.0], [99.0, 180.19047619047618], [100.0, 283.4117647058823], [101.0, 190.22727272727272], [102.0, 121.4], [103.0, 178.33333333333331], [104.0, 123.5], [105.0, 135.4], [107.0, 131.5], [106.0, 120.5], [110.0, 161.99999999999997], [111.0, 194.6], [109.0, 117.0], [108.0, 122.0], [112.0, 229.66666666666669], [113.0, 294.14285714285717], [114.0, 276.22222222222223], [115.0, 162.11111111111111], [116.0, 356.30000000000007], [117.0, 223.33333333333331], [118.0, 312.57142857142856], [119.0, 192.6], [120.0, 294.33333333333337], [121.0, 342.6], [122.0, 244.2857142857143], [127.0, 120.83333333333334], [126.0, 121.27272727272728], [125.0, 131.88888888888889], [124.0, 136.33333333333334], [128.0, 233.4], [130.0, 233.94117647058823], [131.0, 591.7500000000001], [132.0, 773.25], [133.0, 578.0285714285714], [134.0, 303.72222222222223], [135.0, 402.0869565217391], [129.0, 129.39999999999998], [136.0, 381.5], [137.0, 429.47826086956525], [138.0, 436.25], [139.0, 293.50000000000006], [143.0, 270.6], [142.0, 124.42857142857143], [141.0, 124.0], [140.0, 118.66666666666667], [144.0, 191.2], [145.0, 227.0], [146.0, 246.48000000000005], [147.0, 159.2], [148.0, 170.625], [149.0, 217.55555555555554], [150.0, 409.35294117647055], [151.0, 350.0625], [152.0, 199.93333333333337], [153.0, 199.1428571428571], [154.0, 195.19999999999996], [155.0, 122.85714285714286], [156.0, 125.66666666666667], [157.0, 134.33333333333337], [158.0, 160.57142857142858], [159.0, 243.49999999999994], [160.0, 174.19999999999996], [161.0, 257.9], [162.0, 168.88888888888886], [163.0, 234.95555555555555], [164.0, 255.6969696969697], [165.0, 276.45454545454544], [166.0, 201.15999999999997], [167.0, 185.3333333333333], [169.0, 145.99999999999997], [170.0, 165.33333333333334], [171.0, 190.0], [172.0, 206.68421052631578], [173.0, 239.7222222222222], [174.0, 202.99999999999997], [175.0, 234.7], [168.0, 135.5], [176.0, 153.33333333333334], [177.0, 154.69444444444449], [178.0, 130.5], [179.0, 293.3333333333333], [180.0, 167.8461538461538], [182.0, 187.36363636363637], [183.0, 210.2857142857143], [181.0, 152.625], [184.0, 253.5], [185.0, 279.1333333333333], [186.0, 280.17647058823536], [187.0, 268.6923076923077], [189.0, 279.5], [190.0, 278.1724137931035], [191.0, 154.0], [188.0, 173.33333333333334], [192.0, 271.7142857142857], [193.0, 242.33333333333331], [194.0, 218.30769230769226], [195.0, 214.2222222222222], [196.0, 190.78048780487805], [197.0, 166.72000000000003], [198.0, 162.2307692307692], [199.0, 149.4193548387097], [200.0, 180.2097902097903], [1.0, 125.0]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[133.72399999999996, 924.7407500000015]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 200.0, "title": "Time VS Threads"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    axisLabel: "Number of active threads",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response times in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: { noColumns: 2,show: true, container: '#legendTimeVsThreads' },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s: At %x.2 active threads, Average response time was %y.2 ms"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesTimeVsThreads"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotTimesVsThreads"), dataset, options);
            // setup overview
            $.plot($("#overviewTimesVsThreads"), dataset, prepareOverviewOptions(options));
        }
};

// Time vs threads
function refreshTimeVsThreads(){
    var infos = timeVsThreadsInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyTimeVsThreads");
        return;
    }
    if(isGraph($("#flotTimesVsThreads"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTimeVsThreads");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTimesVsThreads", "#overviewTimesVsThreads");
        $('#footerTimeVsThreads .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var bytesThroughputOverTimeInfos = {
        data : {"result": {"minY": 3008.133333333333, "minX": 1.77926706E12, "maxY": 224472.58333333334, "series": [{"data": [[1.77926706E12, 224472.58333333334], [1.77926712E12, 91813.16666666667]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.77926706E12, 7258.533333333334], [1.77926712E12, 3008.133333333333]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.77926712E12, "title": "Bytes Throughput Over Time"}},
        getOptions : function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity) ,
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Bytes / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendBytesThroughputOverTime'
                },
                selection: {
                    mode: "xy"
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y"
                }
            };
        },
        createGraph : function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesBytesThroughputOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotBytesThroughputOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewBytesThroughputOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Bytes throughput Over Time
function refreshBytesThroughputOverTime(fixTimestamps) {
    var infos = bytesThroughputOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 10800000);
    }
    if(isGraph($("#flotBytesThroughputOverTime"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesBytesThroughputOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotBytesThroughputOverTime", "#overviewBytesThroughputOverTime");
        $('#footerBytesThroughputOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var responseTimesOverTimeInfos = {
        data: {"result": {"minY": 778.3235502121646, "minX": 1.77926706E12, "maxY": 1278.0409556313978, "series": [{"data": [[1.77926706E12, 778.3235502121646], [1.77926712E12, 1278.0409556313978]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.77926712E12, "title": "Response Time Over Time"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average response time was %y ms"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Response Times Over Time
function refreshResponseTimeOverTime(fixTimestamps) {
    var infos = responseTimesOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimeOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 10800000);
    }
    if(isGraph($("#flotResponseTimesOverTime"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimesOverTime", "#overviewResponseTimesOverTime");
        $('#footerResponseTimesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var latenciesOverTimeInfos = {
        data: {"result": {"minY": 778.2376237623761, "minX": 1.77926706E12, "maxY": 1277.940273037541, "series": [{"data": [[1.77926706E12, 778.2376237623761], [1.77926712E12, 1277.940273037541]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.77926712E12, "title": "Latencies Over Time"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response latencies in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendLatenciesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average latency was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesLatenciesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotLatenciesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewLatenciesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Latencies Over Time
function refreshLatenciesOverTime(fixTimestamps) {
    var infos = latenciesOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyLatenciesOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 10800000);
    }
    if(isGraph($("#flotLatenciesOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesLatenciesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotLatenciesOverTime", "#overviewLatenciesOverTime");
        $('#footerLatenciesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var connectTimeOverTimeInfos = {
        data: {"result": {"minY": 1.54522184300341, "minX": 1.77926706E12, "maxY": 44.81364922206508, "series": [{"data": [[1.77926706E12, 44.81364922206508], [1.77926712E12, 1.54522184300341]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.77926712E12, "title": "Connect Time Over Time"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getConnectTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average Connect Time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendConnectTimeOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average connect time was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesConnectTimeOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotConnectTimeOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewConnectTimeOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Connect Time Over Time
function refreshConnectTimeOverTime(fixTimestamps) {
    var infos = connectTimeOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyConnectTimeOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 10800000);
    }
    if(isGraph($("#flotConnectTimeOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesConnectTimeOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotConnectTimeOverTime", "#overviewConnectTimeOverTime");
        $('#footerConnectTimeOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var responseTimePercentilesOverTimeInfos = {
        data: {"result": {"minY": 115.0, "minX": 1.77926706E12, "maxY": 2056.0, "series": [{"data": [[1.77926706E12, 2056.0], [1.77926712E12, 509.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.77926706E12, 423.8000000000011], [1.77926712E12, 133.0]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.77926706E12, 1563.6199999999958], [1.77926712E12, 151.0]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.77926706E12, 614.8999999999992], [1.77926712E12, 139.0]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.77926706E12, 116.0], [1.77926712E12, 115.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.77926706E12, 164.0], [1.77926712E12, 123.0]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.77926712E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true,
                        fill: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Response Time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimePercentilesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Response time was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimePercentilesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimePercentilesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimePercentilesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Response Time Percentiles Over Time
function refreshResponseTimePercentilesOverTime(fixTimestamps) {
    var infos = responseTimePercentilesOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 10800000);
    }
    if(isGraph($("#flotResponseTimePercentilesOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesResponseTimePercentilesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimePercentilesOverTime", "#overviewResponseTimePercentilesOverTime");
        $('#footerResponseTimePercentilesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var responseTimeVsRequestInfos = {
    data: {"result": {"minY": 122.0, "minX": 35.0, "maxY": 30124.0, "series": [{"data": [[528.0, 123.0], [574.0, 175.0], [35.0, 122.0], [650.0, 172.5], [41.0, 122.0], [170.0, 122.0], [219.0, 309.0], [70.0, 1377.0], [314.0, 122.0], [406.0, 261.5], [107.0, 123.0], [433.0, 125.0], [453.0, 130.0]], "isOverall": false, "label": "Successes", "isController": false}, {"data": [[528.0, 30122.0], [35.0, 30124.0], [314.0, 30122.0], [433.0, 30121.0]], "isOverall": false, "label": "Failures", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 650.0, "title": "Response Time Vs Request"}},
    getOptions: function() {
        return {
            series: {
                lines: {
                    show: false
                },
                points: {
                    show: true
                }
            },
            xaxis: {
                axisLabel: "Global number of requests per second",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            yaxis: {
                axisLabel: "Median Response Time in ms",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            legend: {
                noColumns: 2,
                show: true,
                container: '#legendResponseTimeVsRequest'
            },
            selection: {
                mode: 'xy'
            },
            grid: {
                hoverable: true // IMPORTANT! this is needed for tooltip to work
            },
            tooltip: true,
            tooltipOpts: {
                content: "%s : Median response time at %x req/s was %y ms"
            },
            colors: ["#9ACD32", "#FF6347"]
        };
    },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesResponseTimeVsRequest"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotResponseTimeVsRequest"), dataset, options);
        // setup overview
        $.plot($("#overviewResponseTimeVsRequest"), dataset, prepareOverviewOptions(options));

    }
};

// Response Time vs Request
function refreshResponseTimeVsRequest() {
    var infos = responseTimeVsRequestInfos;
    prepareSeries(infos.data);
    if (isGraph($("#flotResponseTimeVsRequest"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimeVsRequest");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimeVsRequest", "#overviewResponseTimeVsRequest");
        $('#footerResponseRimeVsRequest .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var latenciesVsRequestInfos = {
    data: {"result": {"minY": 122.0, "minX": 35.0, "maxY": 30124.0, "series": [{"data": [[528.0, 123.0], [574.0, 175.0], [35.0, 122.0], [650.0, 172.5], [41.0, 122.0], [170.0, 122.0], [219.0, 309.0], [70.0, 1377.0], [314.0, 122.0], [406.0, 261.5], [107.0, 123.0], [433.0, 124.0], [453.0, 130.0]], "isOverall": false, "label": "Successes", "isController": false}, {"data": [[528.0, 30122.0], [35.0, 30124.0], [314.0, 30122.0], [433.0, 30121.0]], "isOverall": false, "label": "Failures", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 650.0, "title": "Latencies Vs Request"}},
    getOptions: function() {
        return{
            series: {
                lines: {
                    show: false
                },
                points: {
                    show: true
                }
            },
            xaxis: {
                axisLabel: "Global number of requests per second",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            yaxis: {
                axisLabel: "Median Latency in ms",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            legend: { noColumns: 2,show: true, container: '#legendLatencyVsRequest' },
            selection: {
                mode: 'xy'
            },
            grid: {
                hoverable: true // IMPORTANT! this is needed for tooltip to work
            },
            tooltip: true,
            tooltipOpts: {
                content: "%s : Median Latency time at %x req/s was %y ms"
            },
            colors: ["#9ACD32", "#FF6347"]
        };
    },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesLatencyVsRequest"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotLatenciesVsRequest"), dataset, options);
        // setup overview
        $.plot($("#overviewLatenciesVsRequest"), dataset, prepareOverviewOptions(options));
    }
};

// Latencies vs Request
function refreshLatenciesVsRequest() {
        var infos = latenciesVsRequestInfos;
        prepareSeries(infos.data);
        if(isGraph($("#flotLatenciesVsRequest"))){
            infos.createGraph();
        }else{
            var choiceContainer = $("#choicesLatencyVsRequest");
            createLegend(choiceContainer, infos);
            infos.createGraph();
            setGraphZoomable("#flotLatenciesVsRequest", "#overviewLatenciesVsRequest");
            $('#footerLatenciesVsRequest .legendColorBox > div').each(function(i){
                $(this).clone().prependTo(choiceContainer.find("li").eq(i));
            });
        }
};

var hitsPerSecondInfos = {
        data: {"result": {"minY": 17.933333333333334, "minX": 1.77926706E12, "maxY": 48.733333333333334, "series": [{"data": [[1.77926706E12, 48.733333333333334], [1.77926712E12, 17.933333333333334]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.77926712E12, "title": "Hits Per Second"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of hits / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendHitsPerSecond"
                },
                selection: {
                    mode : 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y.2 hits/sec"
                }
            };
        },
        createGraph: function createGraph() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesHitsPerSecond"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotHitsPerSecond"), dataset, options);
            // setup overview
            $.plot($("#overviewHitsPerSecond"), dataset, prepareOverviewOptions(options));
        }
};

// Hits per second
function refreshHitsPerSecond(fixTimestamps) {
    var infos = hitsPerSecondInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 10800000);
    }
    if (isGraph($("#flotHitsPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesHitsPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotHitsPerSecond", "#overviewHitsPerSecond");
        $('#footerHitsPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var codesPerSecondInfos = {
        data: {"result": {"minY": 0.7166666666666667, "minX": 1.77926706E12, "maxY": 46.28333333333333, "series": [{"data": [[1.77926706E12, 46.28333333333333], [1.77926712E12, 18.816666666666666]], "isOverall": false, "label": "200", "isController": false}, {"data": [[1.77926706E12, 0.85], [1.77926712E12, 0.7166666666666667]], "isOverall": false, "label": "503", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.77926712E12, "title": "Codes Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of responses / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendCodesPerSecond"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "Number of Response Codes %s at %x was %y.2 responses / sec"
                }
            };
        },
    createGraph: function() {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesCodesPerSecond"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotCodesPerSecond"), dataset, options);
        // setup overview
        $.plot($("#overviewCodesPerSecond"), dataset, prepareOverviewOptions(options));
    }
};

// Codes per second
function refreshCodesPerSecond(fixTimestamps) {
    var infos = codesPerSecondInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 10800000);
    }
    if(isGraph($("#flotCodesPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesCodesPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotCodesPerSecond", "#overviewCodesPerSecond");
        $('#footerCodesPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var transactionsPerSecondInfos = {
        data: {"result": {"minY": 0.75, "minX": 1.77926706E12, "maxY": 46.28333333333333, "series": [{"data": [[1.77926706E12, 46.28333333333333], [1.77926712E12, 18.783333333333335]], "isOverall": false, "label": "HTTP Request-success", "isController": false}, {"data": [[1.77926706E12, 0.85], [1.77926712E12, 0.75]], "isOverall": false, "label": "HTTP Request-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.77926712E12, "title": "Transactions Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of transactions / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendTransactionsPerSecond"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y transactions / sec"
                }
            };
        },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesTransactionsPerSecond"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotTransactionsPerSecond"), dataset, options);
        // setup overview
        $.plot($("#overviewTransactionsPerSecond"), dataset, prepareOverviewOptions(options));
    }
};

// Transactions per second
function refreshTransactionsPerSecond(fixTimestamps) {
    var infos = transactionsPerSecondInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyTransactionsPerSecond");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 10800000);
    }
    if(isGraph($("#flotTransactionsPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTransactionsPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTransactionsPerSecond", "#overviewTransactionsPerSecond");
        $('#footerTransactionsPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var totalTPSInfos = {
        data: {"result": {"minY": 0.75, "minX": 1.77926706E12, "maxY": 46.28333333333333, "series": [{"data": [[1.77926706E12, 46.28333333333333], [1.77926712E12, 18.783333333333335]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [[1.77926706E12, 0.85], [1.77926712E12, 0.75]], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.77926712E12, "title": "Total Transactions Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of transactions / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendTotalTPS"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y transactions / sec"
                },
                colors: ["#9ACD32", "#FF6347"]
            };
        },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesTotalTPS"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotTotalTPS"), dataset, options);
        // setup overview
        $.plot($("#overviewTotalTPS"), dataset, prepareOverviewOptions(options));
    }
};

// Total Transactions per second
function refreshTotalTPS(fixTimestamps) {
    var infos = totalTPSInfos;
    // We want to ignore seriesFilter
    prepareSeries(infos.data, false, true);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 10800000);
    }
    if(isGraph($("#flotTotalTPS"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTotalTPS");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTotalTPS", "#overviewTotalTPS");
        $('#footerTotalTPS .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

// Collapse the graph matching the specified DOM element depending the collapsed
// status
function collapse(elem, collapsed){
    if(collapsed){
        $(elem).parent().find(".fa-chevron-up").removeClass("fa-chevron-up").addClass("fa-chevron-down");
    } else {
        $(elem).parent().find(".fa-chevron-down").removeClass("fa-chevron-down").addClass("fa-chevron-up");
        if (elem.id == "bodyBytesThroughputOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshBytesThroughputOverTime(true);
            }
            document.location.href="#bytesThroughputOverTime";
        } else if (elem.id == "bodyLatenciesOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshLatenciesOverTime(true);
            }
            document.location.href="#latenciesOverTime";
        } else if (elem.id == "bodyCustomGraph") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshCustomGraph(true);
            }
            document.location.href="#responseCustomGraph";
        } else if (elem.id == "bodyConnectTimeOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshConnectTimeOverTime(true);
            }
            document.location.href="#connectTimeOverTime";
        } else if (elem.id == "bodyResponseTimePercentilesOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimePercentilesOverTime(true);
            }
            document.location.href="#responseTimePercentilesOverTime";
        } else if (elem.id == "bodyResponseTimeDistribution") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimeDistribution();
            }
            document.location.href="#responseTimeDistribution" ;
        } else if (elem.id == "bodySyntheticResponseTimeDistribution") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshSyntheticResponseTimeDistribution();
            }
            document.location.href="#syntheticResponseTimeDistribution" ;
        } else if (elem.id == "bodyActiveThreadsOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshActiveThreadsOverTime(true);
            }
            document.location.href="#activeThreadsOverTime";
        } else if (elem.id == "bodyTimeVsThreads") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTimeVsThreads();
            }
            document.location.href="#timeVsThreads" ;
        } else if (elem.id == "bodyCodesPerSecond") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshCodesPerSecond(true);
            }
            document.location.href="#codesPerSecond";
        } else if (elem.id == "bodyTransactionsPerSecond") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTransactionsPerSecond(true);
            }
            document.location.href="#transactionsPerSecond";
        } else if (elem.id == "bodyTotalTPS") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTotalTPS(true);
            }
            document.location.href="#totalTPS";
        } else if (elem.id == "bodyResponseTimeVsRequest") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimeVsRequest();
            }
            document.location.href="#responseTimeVsRequest";
        } else if (elem.id == "bodyLatenciesVsRequest") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshLatenciesVsRequest();
            }
            document.location.href="#latencyVsRequest";
        }
    }
}

/*
 * Activates or deactivates all series of the specified graph (represented by id parameter)
 * depending on checked argument.
 */
function toggleAll(id, checked){
    var placeholder = document.getElementById(id);

    var cases = $(placeholder).find(':checkbox');
    cases.prop('checked', checked);
    $(cases).parent().children().children().toggleClass("legend-disabled", !checked);

    var choiceContainer;
    if ( id == "choicesBytesThroughputOverTime"){
        choiceContainer = $("#choicesBytesThroughputOverTime");
        refreshBytesThroughputOverTime(false);
    } else if(id == "choicesResponseTimesOverTime"){
        choiceContainer = $("#choicesResponseTimesOverTime");
        refreshResponseTimeOverTime(false);
    }else if(id == "choicesResponseCustomGraph"){
        choiceContainer = $("#choicesResponseCustomGraph");
        refreshCustomGraph(false);
    } else if ( id == "choicesLatenciesOverTime"){
        choiceContainer = $("#choicesLatenciesOverTime");
        refreshLatenciesOverTime(false);
    } else if ( id == "choicesConnectTimeOverTime"){
        choiceContainer = $("#choicesConnectTimeOverTime");
        refreshConnectTimeOverTime(false);
    } else if ( id == "choicesResponseTimePercentilesOverTime"){
        choiceContainer = $("#choicesResponseTimePercentilesOverTime");
        refreshResponseTimePercentilesOverTime(false);
    } else if ( id == "choicesResponseTimePercentiles"){
        choiceContainer = $("#choicesResponseTimePercentiles");
        refreshResponseTimePercentiles();
    } else if(id == "choicesActiveThreadsOverTime"){
        choiceContainer = $("#choicesActiveThreadsOverTime");
        refreshActiveThreadsOverTime(false);
    } else if ( id == "choicesTimeVsThreads"){
        choiceContainer = $("#choicesTimeVsThreads");
        refreshTimeVsThreads();
    } else if ( id == "choicesSyntheticResponseTimeDistribution"){
        choiceContainer = $("#choicesSyntheticResponseTimeDistribution");
        refreshSyntheticResponseTimeDistribution();
    } else if ( id == "choicesResponseTimeDistribution"){
        choiceContainer = $("#choicesResponseTimeDistribution");
        refreshResponseTimeDistribution();
    } else if ( id == "choicesHitsPerSecond"){
        choiceContainer = $("#choicesHitsPerSecond");
        refreshHitsPerSecond(false);
    } else if(id == "choicesCodesPerSecond"){
        choiceContainer = $("#choicesCodesPerSecond");
        refreshCodesPerSecond(false);
    } else if ( id == "choicesTransactionsPerSecond"){
        choiceContainer = $("#choicesTransactionsPerSecond");
        refreshTransactionsPerSecond(false);
    } else if ( id == "choicesTotalTPS"){
        choiceContainer = $("#choicesTotalTPS");
        refreshTotalTPS(false);
    } else if ( id == "choicesResponseTimeVsRequest"){
        choiceContainer = $("#choicesResponseTimeVsRequest");
        refreshResponseTimeVsRequest();
    } else if ( id == "choicesLatencyVsRequest"){
        choiceContainer = $("#choicesLatencyVsRequest");
        refreshLatenciesVsRequest();
    }
    var color = checked ? "black" : "#818181";
    if(choiceContainer != null) {
        choiceContainer.find("label").each(function(){
            this.style.color = color;
        });
    }
}

