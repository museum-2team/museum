package com.korit.museum.web.api;

import com.korit.museum.security.PrincipalDetails;
import com.korit.museum.service.SearchService;
import com.korit.museum.web.dto.SearchPaintingReqDto;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api")
@RequiredArgsConstructor
public class SearchApi {

    private final SearchService searchService;

    @GetMapping("/search")
    public ResponseEntity<CMRespDto<?>> search(SearchPaintingReqDto searchPaintingReqDto,
                                               @AuthenticationPrincipal PrincipalDetails principalDetails);

}