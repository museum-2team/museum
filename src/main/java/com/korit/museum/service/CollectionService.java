package com.korit.museum.service;

import com.korit.museum.entity.CollectionImage;
import com.korit.museum.entity.CollectionMst;
import com.korit.museum.exception.CustomValidationException;
import com.korit.museum.repository.CollectionRepository;
import com.korit.museum.web.dto.CollectionReqDto;
import com.korit.museum.web.dto.DeleteCollectionsReqDto;
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
public class CollectionService {

    @Value("${file.path}")
    private String filepath;

    @Autowired
    private CollectionRepository collectionRepository;

    public Map<String, Object> getCollectionAndImage(String collectionName){
        Map<String, Object> result = new HashMap<>();
        result.put("collectionMst", collectionRepository.findCollectionByCollectionName(collectionName));
        result.put("collectionImage", collectionRepository.findCollectionImageByCollectionCode(collectionName));

        return result;

    }

    public void registerCollection(CollectionReqDto collectionReqDto){
        duplicateCollectionCode(collectionReqDto.getCollectionName());
        collectionRepository.saveCollection(collectionReqDto);
    }

    private void duplicateCollectionCode(String collectionName){
        CollectionMst collectionMst = collectionRepository.findCollectionByCollectionName(collectionName);
        if(collectionMst != null){
            Map<String, String> errorMap = new HashMap<>();
            errorMap.put("collectionName", "이미 존재하는 컬렉션입니다.");

            throw new CustomValidationException(errorMap);
        }
    }

    private void modifyCollection(DeleteCollectionsReqDto deleteCollectionsReqDto){
        collectionRepository.deleteCollections(deleteCollectionsReqDto.getUserIds());
    }

    public void registerCollectionImages(String collecitonName, List<MultipartFile> files){
        if(files.size() < 1) {
            Map<String, String> errorMap = new HashMap<String, String>();
            errorMap.put("files", "이미지를 선택해주세요.");

            throw new CustomValidationException(errorMap);
        }

        List<CollectionImage> collectionImages = new ArrayList<CollectionImage>();

        files.forEach(file -> {
            String originFileName = file.getOriginalFilename();
            String extension = originFileName.substring(originFileName.lastIndexOf(""));
            String tempFileName = UUID.randomUUID().toString().replaceAll("-","") + extension;

            Path uploadPath = Paths.get(filepath + "collections/" + tempFileName);

            File f = new File((filepath + "collection"));
            if(!f.exists()){
                f.mkdirs();
            }

            try {
                Files.write(uploadPath, file.getBytes());
            } catch (IOException e) {
                throw new RuntimeException(e);
            }

            CollectionImage collectionImage = CollectionImage.builder()
                    .collectionName(collecitonName)
                    .saveName(tempFileName)
                    .originName(originFileName)
                    .build();
           collectionImages.add(collectionImage);
        });
        collectionRepository.registerCollectionImages(collectionImages);

    }

    public List<CollectionImage> getCollections(String collectionCode){
        return collectionRepository.findCollectionImageAll(collectionCode);
    }

    public void  removeCollectionImage(int imageId){
        CollectionImage collectionImage = collectionRepository.findCollectionImageByImageId(imageId);

        if(collectionImage == null){
            Map<String, String> errorMap = new HashMap<>();
            errorMap.put("error", "존재하지 않는 이미지 ID 입니다.");

            throw new CustomValidationException(errorMap);
        }

        if(collectionRepository.deleteCollectionImage(imageId) > 0) {
            File file = new File(filepath + "collection/" + collectionImage.getSaveName());
            if(file.exists()){
                file.delete();
            }
        }
    }

}






































