<template>
    <ul class="pagination vl-pagination"
        v-show="!config.hideIfEmpty || !(config.hideIfEmpty && !next_page_url && !prev_page_url)">
        <li :class="{ disabled: current_page == 1 }">
            <span v-if="current_page == 1" v-html="config.previous_button_text"></span>
            <a href="#" rel="prev"
               v-else
               @click.prevent="fetchData(prev_page_url)"
               v-html="config.previous_button_text">
            </a>
        </li>
        <li v-for="el in elements" :class="{ disabled: el.key == 'divider', active: el.key == current_page}">
            <span v-if="el.key == current_page">{{ el.key }}</span>
            <span v-else-if="el.key === 'divider'">{{ el.item }}</span>
            <a href="#" v-else @click.prevent="fetchData(el.item)">{{ el.key }}</a>
        </li>
        <li :class="{ disabled: current_page == last_page }">
            <a href="#" rel="next"
               v-if="current_page < last_page"
               @click.prevent="fetchData(next_page_url)"
               v-html="config.next_button_text">
            </a>
            <span v-else v-html="config.next_button_text"></span>
        </li>
    </ul>
</template>

<script>
    export default {
        props: {
            resourceUrl: {
                type: String,
                required: true
            },
            options: {
                type: Object,
                required: false,
                default() {
                    return {};
                }
            },
            bus: {
                type: Object,
                default() {
                    return VueBus || { $on() {} };
                }
            }
        },
        data() {
            return {
                current_page: '',
                last_page: '',
                next_page_url: '',
                prev_page_url: '',
                config: {
                    remote_data: 'data',
                    remote_current_page: 'current_page',
                    remote_last_page: 'last_page',
                    remote_next_page_url: 'next_page_url',
                    remote_prev_page_url: 'prev_page_url',
                    previous_button_text: '&laquo;',
                    next_button_text: '&raquo;',
                    onEachSide: 3,
                    divider: '...',
                    hideIfEmpty: true,
                    params: {},
                    headers: {}
                }
            };
        },
        methods: {
            fetchData(pageUrl) {
                const { url, params } = this.transformPageUrl(pageUrl);

                this.$emit('beforeRequest');

                axios
                    .get(url, {
                        headers: this.config.headers,
                        params: Object.assign({}, params, this.config.params),
                    })
                    .then(({ data }) => {
                        this.handleResponseData(data);
                    })
                    .catch(response => {
                        this.$emit('failed', response);
                    });
            },

            handleResponseData(response) {
                this.makePagination(response);
                const data = this.getNestedValue(response, this.config.remote_data);
                this.$emit('update', data);
            },

            makePagination(data) {
                this.current_page = this.getNestedValue(data, this.config.remote_current_page);
                this.last_page = this.getNestedValue(data, this.config.remote_last_page);

                this.next_page_url = this.current_page === this.last_page
                    ? null
                    : this.getNestedValue(data, this.config.remote_next_page_url);

                this.prev_page_url = this.current_page === 1
                    ? null
                    : this.getNestedValue(data, this.config.remote_prev_page_url);
            },

            updateConfig() {
                this.config = Object.assign({}, this.config, (this.$options.config || {}), this.options);
            },

            transformPageUrl(pageUrl) {
                pageUrl = pageUrl || this.resourceUrl;
                const splitUrl = pageUrl.split('?');

                if (splitUrl.length === 2) {
                    const queries = splitUrl[1].split('&');
                    const params = {};

                    queries.forEach(query => {
                        query = query.split('=');
                        params[query[0]] = query[1];
                    });

                    return {
                        url: splitUrl[0],
                        params
                    }
                }

                return { url: splitUrl[0], params: {} };
            },

            getNestedValue(object, path) {
                if (!path) {
                    return object;
                }

                const originalPath = path;
                path = path.split('.');
                let response = object;

                for (let i = 0; i < path.length; i++) {
                    response = response[path[i]];
                }

                if (typeof response === 'undefined') {
                    console.log(`[VueLaravelPagination] Response doesn't contain key ${originalPath}!`);
                }

                return response;
            }
        },
        computed: {
            elements() {
                const onEachSide = this.config.onEachSide;
                const divider = this.config.divider;
                const elements = [];

                // First case.
                if (this.last_page < (onEachSide * 2) + 6) {
                    for (let i = 1; i <= this.last_page; i++) {
                        elements.push({
                            key: i,
                            item: `${this.resourceUrl}?page=${i}`
                        });
                    }

                    return elements;
                }

                const onSides = onEachSide * 2;

                // Second case.
                if (this.current_page <= onSides) {
                    for (let i = 1; i <= onSides + 2; i++) {
                        elements.push({
                            key: i,
                            item: `${this.resourceUrl}?page=${i}`
                        });
                    }

                    elements.push({ key: 'divider', item: divider });

                    for (let i = this.last_page - 1; i <= this.last_page; i++) {
                        elements.push({
                            key: i,
                            item: `${this.resourceUrl}?page=${i}`
                        });
                    }

                    return elements;
                }

                // Third case.
                if (this.current_page > this.last_page - onSides) {
                    for (let i = 1; i <= 2; i++) {
                        elements.push({
                            key: i,
                            item: `${this.resourceUrl}?page=${i}`
                        });
                    }

                    elements.push({ key: 'divider', item: divider });

                    for (let i = this.last_page - (onSides + 2); i <= this.last_page; i++) {
                        elements.push({
                            key: i,
                            item: `${this.resourceUrl}?page=${i}`
                        });
                    }

                    return elements;
                }

                // Fourth case.
                for (let i = 1; i <= 2; i++) {
                    elements.push({
                        key: i,
                        item: `${this.resourceUrl}?page=${i}`
                    });
                }

                elements.push({ key: 'divider', item: divider });

                for (let i = this.current_page - onEachSide; i <= this.current_page + onEachSide; i++) {
                    elements.push({
                        key: i,
                        item: `${this.resourceUrl}?page=${i}`
                    });
                }

                elements.push({ key: 'divider', item: divider });

                for (let i = this.last_page - 1; i <= this.last_page; i++) {
                    elements.push({
                        key: i,
                        item: `${this.resourceUrl}?page=${i}`
                    });
                }

                return elements;
            }
        },
        watch: {
            resourceUrl() {
                this.fetchData();
            },

            options: {
                handler() {
                    this.updateConfig();
                },
                deep: true
            }
        },
        created() {
            this.updateConfig();
            this.fetchData();
            this.bus.$on('update-pagination-items', (page) => {
                page = page || this.current_page;
                this.fetchData(`${this.resourceUrl}?page=${page}`);
            });
        }
    }
</script>
