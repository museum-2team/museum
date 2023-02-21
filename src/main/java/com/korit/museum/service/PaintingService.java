package com.korit.museum.service;

import com.korit.museum.entity.PaintingImage;
import com.korit.museum.entity.PaintingMst;
import com.korit.museum.exception.CustomValidationException;
import com.korit.museum.repository.PaintingRepository;
import com.korit.museum.web.dto.DeletePaintingsReqDto;
import com.korit.museum.web.dto.PaintingReqDto;
import com.korit.museum.web.dto.SearchPaintingReqDto;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.File;
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.*;

@Service
public class PaintingService {

    @Value("${file.path}")
    private String filePath;

    @Autowired
    private PaintingRepository paintingRepository;

    public Map<String, Object> getPaintingAndImage(String paintingCode) {
        Map<String, Object> result = new HashMap<>();
        result.put("paintingMst", paintingRepository.findPaintingByPaintingCode(paintingCode));
        result.put("paintingImage", paintingRepository.findPaintingByImageCode(paintingCode));
        return result;
    }

    public List<PaintingMst> searchPainting(SearchPaintingReqDto searchPaintingReqDto) {
        searchPaintingReqDto.setIndex();
        return paintingRepository.searchPainting(searchPaintingReqDto);
    }

    public void registerPainting(PaintingReqDto paintingReqDto){
        duplicatePaintingCode(paintingReqDto.getPaintingCode());
        paintingRepository.savePainting(paintingReqDto);
    }

    private void duplicatePaintingCode(String paintingCode) {
        PaintingMst paintingMst = paintingRepository.findPaintingByPaintingCode(paintingCode);
        if(paintingMst != null) {
            Map<String, String> errorMap = new HashMap<>();
            errorMap.put("paintingCode", "이미 존재하는 작품입니다.");

            throw new CustomValidationException(errorMap);
        }
    }

    public void modifyPainting(PaintingReqDto paintingReqDto){
        paintingRepository.updatePaintingByPaintingCode(paintingReqDto);
    }

    public void removePainting(String paintingCode){
        paintingRepository.deletePainting(paintingCode);
    }

    public void removePaintings(DeletePaintingsReqDto deletePaintingsReqDto){
        paintingRepository.deletePaintings(deletePaintingsReqDto.getUserIds());
    }

    public void registerPaintingImages(String paintingCode, List<MultipartFile> files){
        if(files.size() > 1){
            Map<String, String> errorMap = new HashMap<String, String>();
            errorMap.put("files", "이미지를 선택하세요.");

            throw new CustomValidationException(errorMap);
        }

        List<PaintingImage> paintingImages = new ArrayList<PaintingImage>();

        files.forEach(file ->{
            String originFileName = file.getOriginalFilename();
            String extension = originFileName.substring(originFileName.lastIndexOf("."));
            String tempFileName = UUID.randomUUID().toString().replaceAll("-","") + extension;

            Path uploadPath = Paths.get(filePath + "painting/" + tempFileName);

            File f = new File(filePath + "painting");
            if (!f.exists()){
                f.mkdir();
            }
            try {
                Files.write(uploadPath, file.getBytes());
            }catch (IOException e){
                throw new RuntimeException(e);
            }

            PaintingImage paintingImage = PaintingImage.builder()
                    .paintingCode(paintingCode)
                    .saveName(tempFileName)
                    .originName(originFileName)
                    .build();

            paintingImages.add(paintingImage);
        });
        paintingRepository.registerPaintingImages(paintingImages);
    }

    public List<PaintingImage> getPaintings(String paintingCode){
        return paintingRepository.findPaintingImageAll(paintingCode);
    }

    public void removePaintingImage(int imageId){
        PaintingImage paintingImage =  paintingRepository.findPaintingByImageId(imageId);

        if(paintingImage == null){
            Map<String, String> errorMap = new HashMap<>();
            errorMap.put("error", "존재하지 않는 이미지 ID 입니다.");

            throw new CustomValidationException(errorMap);
        }
        if (paintingRepository.deletePaintingImage(imageId) > 0) {
            File file = new File(filePath + "painting/" + paintingImage.getSaveName());
            if (file.exists()){
                file.delete();
            }
        }
    }



}
