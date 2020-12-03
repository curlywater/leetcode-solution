import { getSortedPostList as getAllSortedPosts } from "./post";
import { getSortedPostList as getAllSortedProblems } from "./leetcode";

export function getAllTopics() {
	const topicIndexMap = new Map();
	const topics = [];

	const pushPostToTopic = (post) => {
		const { topic, tag } = post;
		const tags = tag ? (Array.isArray(tag) ? tag : [tag]) : [];

		[topic].concat(tags).forEach((topic) => {
			if (!topicIndexMap.has(topic)) {
				topics.push({
					id: topic,
					title: topic,
					postData: [],
				});
				topicIndexMap.set(topic, topics.length - 1);
			}
			topics[topicIndexMap.get(topic)]["postData"].push(post);
		});
	};

	getAllSortedPosts().forEach((post) => {
		post.url = `/post/${post.id}`;
		pushPostToTopic(post);
	});

	getAllSortedProblems().forEach((post) => {
		post.url = `/leetcode/${post.id}`;
		pushPostToTopic(post);
	});

	return topics;
}
