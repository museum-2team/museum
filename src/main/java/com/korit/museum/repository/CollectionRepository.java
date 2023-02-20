package com.korit.museum.repository;

import com.korit.museum.entity.CollectionImage;
import com.korit.museum.entity.CollectionMst;
import com.korit.museum.web.dto.CollectionReqDto;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;

@Mapper
public interface CollectionRepository {

    public CollectionMst findCollectionByCollectionCode(String collectionCode);

    public int saveCollection(CollectionReqDto collectionReqDto);

    public int updateCollectionByCollectionCode(CollectionReqDto collectionReqDto);

    public int deleteCollection(String collectionCode);

    public int deleteCollections(List<Integer> userIds);

    public int registerCollectionImages(List<CollectionImage> collectionImages);

    public List<CollectionImage> findCollectionImageAll(String collectionCode);

    public CollectionImage findCollectionImageByImageId(int imageId);

    public CollectionImage findCollectionImageByCollectionCode(String collectionCode);

    public int deleteCollectionImage(int imageId);
}
