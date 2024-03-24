<template>
    <div class="comments mt-3">
        <a-descriptions title="Bình luận"> </a-descriptions>

        <a-list
            item-layout="vertical"
            size="large"
            :pagination="pagination"
            :data-source="listData"
        >
            <template #renderItem="{ item }">
                <a-list-item key="item.title">
                    <template #extra>
                        <img
                            width="272"
                            alt="logo"
                            src="https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png"
                        />
                    </template>
                    <a-list-item-meta :description="item.description">
                        <template #title>
                            <a :href="item.href">{{ item.title }}</a>
                        </template>
                        <template #avatar>
                            <a-avatar
                                :src="item.avatar"
                                size="medium"
                                class="me-2"
                                :style="{
                                    backgroundColor: '#f50',
                                    verticalAlign: 'middle',
                                }"
                            >
                                {{ item.title[0].toUpperCase() }}
                            </a-avatar>
                        </template>
                    </a-list-item-meta>
                    {{ item.content }}
                </a-list-item>
            </template>
        </a-list>
    </div>
</template>

<script setup>
// begin: comments
const listData = [];
for (let i = 0; i < 23; i++) {
    listData.push({
        href: "https://www.antdv.com/",
        title: "Nguyễn Văn Bách",
        avatar: "",
        description: "2024-03-23 6:58",
        content:
            "We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.",
    });
}
const pagination = {
    onChange: (page) => {},
    pageSize: 3,
};

// end: comments
</script>

<script>
export default {};
</script>
<style></style>
