export type DramaItem = {
	id: string; // 唯一标识
	title: string; // 剧名
	cover?: string; // 封面图片URL
	description?: string; // 简介
	rating?: number; // 评分
	year?: number; // 年份
	episodes?: number; // 集数
	status?: string; // 状态（已完结/更新中）
	link?: string | string[]; // 网盘链接，支持单个或多个链接
	driveType?: string | string[]; // 网盘类型（夸克/百度/阿里等），与link对应
	tags?: string[]; // 标签
	updatedAt?: string; // 更新时间
};

export type DramaCategory = {
	id: string; // 分类ID
	name: string; // 分类名称
	items: DramaItem[]; // 该分类下的剧集列表
};

export type DramaData = {
	categories: DramaCategory[]; // 所有分类
	lastUpdated: string; // 最后更新时间
	totalItems: number; // 总条目数
};