package com.korit.museum.web.api.admin;

import com.korit.museum.aop.annotation.ValidAspect;
import com.korit.museum.entity.PaintingImage;
import com.korit.museum.entity.PaintingMst;
import com.korit.museum.service.PaintingService;
import com.korit.museum.web.dto.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import javax.validation.Valid;
import java.util.List;
import java.util.Map;

@RequestMapping("/api/admin")
@RestController
public class PaintingApi {

    @Autowired
    private PaintingService paintingService;

    @GetMapping("/painting/{paintingCode}")
    public ResponseEntity<CMRespDto<Map<String, Object>>> getPainting(@PathVariable String paintingCode){
        return ResponseEntity
                .ok()
                .body(new CMRespDto<>(HttpStatus.OK.value(), "Successfully", paintingService.getPaintingAndImage(paintingCode)));
    }

    @ValidAspect
    @GetMapping("/paintings")
    public ResponseEntity<CMRespDto<List<PaintingMst>>> searchPainting(@Valid SearchReqDto searchReqDto, BindingResult bindingResult){
        System.out.println(searchReqDto);
        return ResponseEntity
                .ok()
                .body(new CMRespDto<>(HttpStatus.OK.value(), "Successfully", paintingService.searchPainting(searchReqDto)));
    }

    @ValidAspect
    @PostMapping("/painting")
    public ResponseEntity<CMRespDto<?>> registerPainting(@Valid @RequestBody PaintingReqDto paintingReqDto, BindingResult bindingResult){
        paintingService.registerPainting(paintingReqDto);
        return ResponseEntity
                .created(null)
                .body(new CMRespDto<>(HttpStatus.OK.value(), "Successfully", true));
    }

    @ValidAspect
    @PostMapping("/painting/{paintingCode}")
    public ResponseEntity<CMRespDto<?>> modifyPainting(@PathVariable String paintingCode ,@Valid @RequestBody PaintingReqDto paintingReqDto, BindingResult bindingResult){
        paintingService.registerPainting(paintingReqDto);
        return ResponseEntity
                .created(null)
                .body(new CMRespDto<>(HttpStatus.OK.value(), "Successfully", true));
    }

    @DeleteMapping("/painting/{paintingCode}")
    public ResponseEntity<CMRespDto<?>> removePainting(@PathVariable String paintingCode){
        paintingService.removePainting(paintingCode);
        return ResponseEntity
                .ok()
                .body(new CMRespDto<>(HttpStatus.OK.value(), "Successfully", true));
    }
    @DeleteMapping("/paintings")
    public ResponseEntity<CMRespDto<?>> removePaintings(@RequestBody DeletePaintingsReqDto deletePaintingsReqDto){
        paintingService.removePaintings(deletePaintingsReqDto);
        return ResponseEntity
                .ok()
                .body(new CMRespDto<>(HttpStatus.OK.value(), "Successfully", true));
    }

    @PostMapping("/painting/{paintingCode}/images")
    public ResponseEntity<CMRespDto<?>> registerPaintingImg(@PathVariable String paintingCode, @RequestBody List<MultipartFile> files){
        paintingService.registerPaintingImages(paintingCode, files);
        return ResponseEntity
                .ok()
                .body(new CMRespDto<>(HttpStatus.OK.value(), "Successfully", true));
    }

    @PostMapping("/painting/{paintingCode}/images/edit")
    public ResponseEntity<CMRespDto<?>> modifyPaintingImg(@PathVariable String paintingCode, @RequestBody List<MultipartFile> files){
        paintingService.registerPaintingImages(paintingCode, files);
        return ResponseEntity
                .ok()
                .body(new CMRespDto<>(HttpStatus.OK.value(), "Successfully", true));
    }

    @GetMapping("/painting/{paintingCode}/images")
    public ResponseEntity<CMRespDto<List<PaintingImage>>> getImages(@PathVariable String paintingCode){
        List<PaintingImage> paintingImages = paintingService.getPaintings(paintingCode);
        return ResponseEntity
                .ok()
                .body(new CMRespDto<>(HttpStatus.OK.value(), "Successfully", paintingImages));
    }

    @DeleteMapping("/painting/{paintingCode}/image/{imageId}")
    public ResponseEntity<CMRespDto<?>> removePaintingImg(
        @PathVariable String paintingCode,
        @PathVariable int imageId){
        paintingService.removePaintingImage(imageId);

        return ResponseEntity
                .ok()
                .body(new CMRespDto<>(HttpStatus.OK.value(), "Successfully", null));

    }
    @GetMapping("/paintings/totalcount")
    public ResponseEntity<CMRespDto<?>> getBookTotalCount(SearchNumberListReqDto searchNumberListReqDto) {
        return ResponseEntity
                .ok()
                .body(new CMRespDto<>(HttpStatus.OK.value(), "Successfully", paintingService.getPaintingTotalCount(searchNumberListReqDto)));
    }


}
