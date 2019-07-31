<template>
    <ul class="pagination vl-pagination"
        v-show="!config.hideIfEmpty || !(config.hideIfEmpty && !next_page_url && !prev_page_url)">
        <li :class="{ disabled: current_page == 1 }" class="page-item">
            <span v-if="current_page == 1"
                  class="page-link"
                  v-html="config.previous_button_text">
            </span>
            <a href="#" rel="prev"
               v-else
               @click.prevent="fetchData(prevPageUrl)"
               v-html="config.previous_button_text"
               class="page-link">
            </a>
        </li>
        <li v-for="el in elements" :class="{ disabled: el.key == 'divider', active: el.key == current_page}" class="page-item">
            <span v-if="el.key == current_page" class="page-link" >{{ el.key }}</span>
            <span v-else-if="el.key === 'divider'" class="page-link" >{{ el.item }}</span>
            <a href="#" v-else @click.prevent="fetchData(el.item)" class="page-link">{{ el.key }}</a>
        </li>
        <li :class="{ disabled: current_page == last_page }" class="page-item">
            <a href="#" rel="next"
               v-if="current_page < last_page"
               @click.prevent="fetchData(nextPageUrl)"
               v-html="config.next_button_text"
               class="page-link">
            </a>
            <span v-else class="page-link" v-html="config.next_button_text"></span>
        </li>
    </ul>
</template>

<script type="text/javascript">
    export default {
        props: {
            resourceUrl: {
                type: String,
                required: true,
            },
            options: {
                type: Object,
                required: false,
                default() {
                    return {};
                },
            },
            axios: {
                required: false,
                default() {
                    return window.axios;
                },
            },
            bus: {
                type: Object,
                default() {
                    return VueBus || { $on() {} };
                },
            },
        },
        created() {
            this.updateConfig(true);

            if (this.historyModeEnabled) {
                window.onpopstate = this.handleBrowserBackButton;

                this.fetchData(
                    this.normalizeUrl(this.resourceUrl, this.$route.query)
                );
            } else {
                this.fetchData();
            }
        },
        mounted() {
            this.bus.$on('update-pagination-items', (page) => {
                page = page || this.current_page;
                this.fetchData(this.normalizeUrl(this.resourceUrl, { page }));
            });
        },
        beforeDestroy() {
            this.bus.$off('update-pagination-items');
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
                    historyMode: false,
                    divider: '...',
                    hideIfEmpty: true,
                    params: {},
                    headers: {},
                    convertBooleanToInteger: false,
                },
            };
        },
        methods: {
            fetchData(pageUrl) {
                let { url, params } = this.transformPageUrl(pageUrl);

                params = Object.assign({}, this.config.params, params);

                const queryParams = {};

                Object.keys(params).forEach((key) => {
                    if (params[key] !== undefined &&
                        typeof params[key] !== 'undefined' &&
                        params[key] !== null
                    ) {
                        queryParams[key] = this.convertBooleanToInteger(params[key]);
                    }
                });

                this.$emit('beforeRequest');

                this.axios.get(url, { headers: this.config.headers, params: queryParams })
                    .then(({ data }) => {
                        this.handleResponseData(data);
                        this.pushHistory(queryParams);
                    })
                    .catch((response) => {
                        this.$emit('failed', response);
                    });
            },

            handleResponseData(response) {
                this.makePagination(response);
                const data = this.getNestedValue(response, this.config.remote_data);
                this.$emit('update', data);
            },

            pushHistory(query) {
              if (this.historyModeEnabled) {
                  this.$router.replace({ query });
              }
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

            updateConfig(initial = false) {
                this.config = Object.assign(
                    {},
                    this.config,
                    (this.$options.config || {}),
                    this.options,
                );

                if (this.historyModeEnabled) {
                    if (initial) {
                        this.config.params = Object.assign(
                            {},
                            this.config.params,
                            this.$route.query,
                        );
                    } else {
                        this.config.params = Object.assign(
                            {},
                            this.$route.query,
                            this.config.params,
                        );
                    }
                }
            },

            transformPageUrl(pageUrl) {
                pageUrl = this.normalizeUrl(pageUrl || this.resourceUrl);
                const splitUrl = pageUrl.split('?');

                if (splitUrl.length === 2) {
                    return {
                        url: splitUrl[0],
                        params: this.getObjectFromQueryParams(splitUrl[1]),
                    };
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
                    console.log(`[VueJsLaravelPagination] Response doesn't contain key ${originalPath}!`);
                }

                return response;
            },

            convertBooleanToInteger(value) {
                if (!this.config.convertBooleanToInteger || typeof value !== 'boolean') {
                    return value;
                }

                return +value;
            },
            handleBrowserBackButton(event) {
                if (this.$route.path === event.target.location.pathname) {
                    const path = this.$route.fullPath.split('?');

                    if (path.length < 2) {
                        this.fetchData();
                    } else {
                        this.fetchData(this.normalizeUrl(this.resourceUrl, path.pop()));
                    }
                }
            },

            getObjectFromQueryParams(query) {
                const params = {};

                if (typeof query === 'string' || query instanceof String) {
                    query.split('&').forEach((query) => {
                        query = query.split('=');
                        params[query[0]] = query[1] || '';
                    });

                    return params;
                }

                return query || {};
            },

            transformQuery(query) {
                const params = [];

                Object.keys(query).forEach((key) => {
                    params.push(`${key}=${this.convertBooleanToInteger(query[key])}`);
                });

                return params;
            },

            normalizeUrl(url, query) {
                const splitUrl = url.split('?');
                let existQueryParams = {};

                query = this.getObjectFromQueryParams(query);

                if (splitUrl.length > 1) {
                    existQueryParams = this.getObjectFromQueryParams(splitUrl.pop());
                }

                const queryParams = Object.assign({}, query, existQueryParams);
                const queryString = this.transformQuery(queryParams).join('&');

                return queryString ? `${splitUrl[0]}?${queryString}` : url;
            },
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
                            item: this.normalizeUrl(this.resourceUrl, { page: i }),
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
                            item: this.normalizeUrl(this.resourceUrl, { page: i }),
                        });
                    }

                    elements.push({ key: 'divider', item: divider });

                    for (let i = this.last_page - 1; i <= this.last_page; i++) {
                        elements.push({
                            key: i,
                            item: this.normalizeUrl(this.resourceUrl, { page: i }),
                        });
                    }

                    return elements;
                }

                // Third case.
                if (this.current_page > this.last_page - onSides) {
                    for (let i = 1; i <= 2; i++) {
                        elements.push({
                            key: i,
                            item: this.normalizeUrl(this.resourceUrl, { page: i }),
                        });
                    }

                    elements.push({ key: 'divider', item: divider });

                    for (let i = this.last_page - (onSides + 2); i <= this.last_page; i++) {
                        elements.push({
                            key: i,
                            item: this.normalizeUrl(this.resourceUrl, { page: i }),
                        });
                    }

                    return elements;
                }

                // Fourth case.
                for (let i = 1; i <= 2; i++) {
                    elements.push({
                        key: i,
                        item: this.normalizeUrl(this.resourceUrl, { page: i }),
                    });
                }

                elements.push({ key: 'divider', item: divider });

                for (let i = this.current_page - onEachSide; i <= this.current_page + onEachSide; i++) {
                    elements.push({
                        key: i,
                        item: this.normalizeUrl(this.resourceUrl, { page: i }),
                    });
                }

                elements.push({ key: 'divider', item: divider });

                for (let i = this.last_page - 1; i <= this.last_page; i++) {
                    elements.push({
                        key: i,
                        item: this.normalizeUrl(this.resourceUrl, { page: i }),
                    });
                }

                return elements;
            },
            historyModeEnabled() {
                return !!(this.config.historyMode && this.$router);
            },
            nextPageUrl() {
                return this.normalizeUrl(this.resourceUrl, { page: this.current_page + 1 });
            },
            prevPageUrl() {
                return this.normalizeUrl(this.resourceUrl, { page: this.current_page - 1 });
            },
        },
        watch: {
            resourceUrl() {
                this.fetchData();
            },

            options: {
                handler() {
                    this.updateConfig();
                },
                deep: true,
            },
        },
    };
</script>
