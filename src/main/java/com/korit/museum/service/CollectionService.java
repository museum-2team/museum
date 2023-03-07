package com.korit.museum.service;

import com.korit.museum.web.dto.CollectionAdditionReqDto;
import com.korit.museum.web.dto.CollectionListRespDto;
import com.korit.museum.web.dto.CollectionModificationReqDto;

import java.util.List;

public interface CollectionService {

    public boolean addCollection(CollectionAdditionReqDto collectionAdditionReqDto) throws Exception;

    public List<CollectionListRespDto> getCollectionList(int pageNumber, String searchText) throws Exception;

    public boolean updateCollection(CollectionModificationReqDto collectionModificationReqDto) throws Exception;

    public boolean deleteCollection(String collectionName) throws Exception;

}
