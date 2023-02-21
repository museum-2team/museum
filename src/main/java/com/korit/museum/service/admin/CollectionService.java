package com.korit.museum.service.admin;

import com.korit.museum.web.dto.admin.CollectionAdditionReqDto;
import com.korit.museum.web.dto.admin.CollectionListRespDto;
import com.korit.museum.web.dto.admin.CollectionModificationReqDto;

import java.util.List;

public interface CollectionService {

    public boolean addCollection(CollectionAdditionReqDto collectionAdditionReqDto) throws Exception;

    public List<CollectionListRespDto> getCollectionList(int pageNumber, String searchText) throws Exception;

    public boolean updateCollection(CollectionModificationReqDto collectionModificationReqDto) throws Exception;

    public boolean deleteCollection(int collectionId) throws Exception;

}
