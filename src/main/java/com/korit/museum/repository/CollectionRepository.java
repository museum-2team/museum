package com.korit.museum.repository;

import com.korit.museum.entity.CollectionImage;
import com.korit.museum.entity.CollectionMst;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;
import java.util.Map;

@Mapper
public interface CollectionRepository {

    public int saveImageFiles(List<CollectionImage> collection_image_files) throws Exception;


    public List<CollectionMst> getCollectionList(Map<String, Object> map) throws Exception;

    public int setCollection(CollectionMst collectionMst) throws Exception;

    public List<CollectionImage> getCollectionImageList(String collectionName) throws Exception;

    public int deleteImageFiles(Map<String, Object> map) throws Exception;


    public int saveCollection(CollectionMst collectionMst);

    public int deleteCollection(String collectionName);
}
