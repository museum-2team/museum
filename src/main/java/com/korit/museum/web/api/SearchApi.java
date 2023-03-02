package com.korit.museum.web.api;

import com.korit.museum.security.PrincipalDetails;
import com.korit.museum.service.SearchService;
import com.korit.museum.web.dto.CMRespDto;
import com.korit.museum.web.dto.SearchPaintingReqDto;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
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
                                               @AuthenticationPrincipal PrincipalDetails principalDetails) {
        if (principalDetails != null) {
            searchPaintingReqDto.setUserId(principalDetails.getUser().getUserId());
        }

        return ResponseEntity.ok()
                .body(new CMRespDto<>(HttpStatus.OK.value(),
                        "Successfully",
                        searchService.getSearchPaintings(searchPaintingReqDto)));
    }

    @GetMapping("/search/totalcount")
    public ResponseEntity<CMRespDto<Integer>> getSearchTotalCount(SearchPaintingReqDto searchPaintingReqDto){
        return ResponseEntity.ok()
                .body(new CMRespDto<> (HttpStatus.OK.value(),
                        "Successfully",
                        searchService.getSearchTotalCount(searchPaintingReqDto)));
    }

}