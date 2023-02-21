package com.korit.museum.service;


import com.korit.museum.entity.SearchPainting;
import com.korit.museum.repository.SearchRepository;
import com.korit.museum.web.dto.SearchPaintingReqDto;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class SearchService {

    private final SearchRepository searchRepository;

    public List<SearchPainting> getSearchPaintings(SearchPaintingReqDto searchPaintingReqDto){
        searchPaintingReqDto.setIndex();
        return searchRepository.userSearchPaintings(searchPaintingReqDto);
    }
}
