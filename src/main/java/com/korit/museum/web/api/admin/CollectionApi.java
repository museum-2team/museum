package com.korit.museum.web.api.admin;


import com.korit.museum.aop.annotation.ValidAspect;
import com.korit.museum.service.admin.CollectionServiceImpl;
import com.korit.museum.web.dto.CMRespDto;
import com.korit.museum.web.dto.admin.CollectionAdditionReqDto;
import com.korit.museum.web.dto.admin.CollectionModificationReqDto;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.lang.Nullable;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;

@RequestMapping("api/admin")
@RestController
@RequiredArgsConstructor
public class CollectionApi {

    private  final CollectionServiceImpl collectionService;

    @ValidAspect
    @PostMapping("/collection")
    public ResponseEntity<?> addCollection(CollectionAdditionReqDto collectionAdditionReqDto, BindingResult bindingResult) throws Exception{
        return ResponseEntity
                .created(null)
                .body(new CMRespDto<>(1, "Successfully", collectionService.addCollection(collectionAdditionReqDto)));
    }

    @GetMapping("/collections")
    public ResponseEntity<?> getCollectionList(@RequestParam int page,
                                               @RequestParam @Nullable String searchValue) throws Exception {
        return ResponseEntity.ok(new CMRespDto<>(1,"Successfully", collectionService.getCollectionList(page, searchValue)));
    }

    @ValidAspect
    @PostMapping("/collection/modification")
    public ResponseEntity<?> updateCollection(@Valid CollectionModificationReqDto collectionModificationReqDto, BindingResult bindingResult) throws Exception {

        return ResponseEntity.ok((new CMRespDto<>(1, "Successfully", collectionService.updateCollection(collectionModificationReqDto))));
    }

    @DeleteMapping("/collection/{collectionId}")
    public ResponseEntity<?> deleteCollection(@PathVariable int collectionId) throws Exception {
        return ResponseEntity.ok((new CMRespDto<>(1, "Successfully", collectionService.deleteCollection(collectionId))));
    }


}


























