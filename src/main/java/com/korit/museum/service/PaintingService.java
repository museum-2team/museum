package com.korit.museum.service;

import com.korit.museum.entity.PaintingMst;
import com.korit.museum.exception.CustomValidationException;
import com.korit.museum.repository.PaintingRepository;
import com.korit.museum.web.dto.PaintingReqDto;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.HashMap;
import java.util.Map;

@Service
public class PaintingService {

    @Autowired
    private PaintingRepository paintingRepository;

    public Map<String, Object> getPaintingAndImage(String paintingCode) {
        Map<String, Object> result = new HashMap<>();
        result.put("paintingMst", paintingRepository.findPaintingByPaintingCode(paintingCode));
        result.put("paintingImage", paintingRepository.findPaintingByImageCode(paintingCode));
        return result;
    }

    public void registerPainting(PaintingReqDto paintingReqDto){
        duplicatePaintingCode(paintingReqDto.getPaintingCode());
        PaintingRepository.savePainting(PaintingReqDto);
    }

    private void duplicatePaintingCode(String paintingCode) {
        PaintingMst paintingMst = PaintingRepository.findPaintingByPaintingCode(paintingCode);
        if(paintingMst != null) {
            Map<String, String> errorMap = new HashMap<>();
            errorMap.put("paintingCode", "이미 존재하는 작품입니다.");

            throw new CustomValidationException(errorMap);
        }
    }

}
