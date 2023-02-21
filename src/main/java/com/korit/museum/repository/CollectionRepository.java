package com.korit.museum.repository;

import com.korit.museum.entity.CollectionImage;
import com.korit.museum.entity.CollectionMst;
import com.korit.museum.web.dto.admin.CollectionAdditionReqDto;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;
import java.util.Map;

@Mapper
public interface CollectionRepository {

    public int saveImageFiles(List<CollectionImage> collection_image_files) throws Exception;


    public List<CollectionMst> getCollectionList(Map<String, Object> map) throws Exception;

    public int setCollection(CollectionMst collectionMst) throws Exception;


    public CollectionMst findCollectionByCollectionName(String collectionName);

    public int saveCollection(CollectionMst collectionMst);

    public int updateCollectionByCollectionCode(CollectionAdditionReqDto collectionReqDto);

    public int deleteCollection(String collectionName);

    public int deleteCollections(List<Integer> userIds);

    public List<CollectionImage> findCollectionImageAll(String collectionName);

    public CollectionImage findCollectionImageByImageId(int imageId);

    public CollectionImage findCollectionImageByCollectionCode(String collectionName);

    public int deleteCollectionImage(int imageId);
}
