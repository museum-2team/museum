package com.korit.museum.repository;

import com.korit.museum.entity.SearchPainting;
import com.korit.museum.web.dto.SearchPaintingReqDto;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;

@Mapper
public interface SearchRepository {
    public List<SearchPainting> userSearchPaintings(SearchPaintingReqDto searchPaintingReqDto);
}
