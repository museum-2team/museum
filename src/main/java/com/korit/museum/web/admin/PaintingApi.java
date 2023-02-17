package com.korit.museum.web.admin;

import com.korit.museum.aop.annotation.ValidAspect;
import com.korit.museum.service.PaintingService;
import com.korit.museum.web.dto.CMRespDto;
import com.korit.museum.web.dto.PaintingReqDto;
import io.swagger.annotations.Api;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.Map;

@Api(tags = {"작품 API"})
@RequestMapping("/api/")
@RestController
public class PaintingApi {

    @Autowired
    private PaintingService paintingService;

//    @GetMapping("/painting/{paintingCode}")
//    public ResponseEntity<CMRespDto<Map<String, Object>>> getPainting(@PathVariable String paintingCode) {
//
//        return ResponseEntity
//                .ok()
//                .body(new CMRespDto<>(HttpStatus.OK.value(), "Successfully", paintingService.getPaintingAndImage(paintingCode)));
//    }
//
//    @ValidAspect
//    @PostMapping("painting")
//    public ResponseEntity<CMRespDto<?>> registerPainting(@Valid @RequestBody PaintingReqDto paintingReqDto, BindingResult bindingResult){
//        PaintingService.registerPainting(paintingReqDto);
//        return ResponseEntity
//                .created(null)
//                .body(new CMRespDto<>(HttpStatus.CREATED.value(), "Successfully", true));
//    }

}
