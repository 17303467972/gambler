import mqtt from "mqtt";
export default Vue.extend({
    data() {
        return {
            mqttConnectionStatus: '',
        };
    },
    mounted() {
        this.initMqtt()
    },
    methods: {
        initMqtt() {
            // 连接配置选项
            const options = {
                port: 8083,
                connectTimeout: 4000, // 超时时间
                clientId: "", // 不填默认随机生成一个ID
            }
            // 连接成功
            this.client = mqtt.connect("ws://106.15.121.181:8083/mqtt", options)
            this.client1 = mqtt.connect("ws://122.51.210.27:8083/mqtt", options)
            this.client.on("connect", () => {
                this.mqttConnectionStatus = "已连接"
                console.log("连接成功")
            })

            // 重连提醒
            this.client.on("reconnect", () => {
                this.mqttConnectionStatus = "正在重连"
                console.log("正在重连")
            })

            // 连接失败提醒
            this.client.on("error", (error) => {
                this.mqttConnectionStatus = "连接失败"
                console.log("连接失败", error)
            })
        },
    },
});