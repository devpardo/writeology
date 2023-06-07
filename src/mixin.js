export default {
    methods: {
        go(param) {
        this.$router.push({
            name: "post",
            params: {
            id: param,
            },
        });
        },
    }
}