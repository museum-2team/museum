package com.korit.museum.service;

import com.korit.museum.entity.CollectionImage;
import com.korit.museum.entity.CollectionMst;
import com.korit.museum.exception.CustomInternalServerErrorException;
import com.korit.museum.repository.CollectionRepository;
import com.korit.museum.web.dto.CollectionAdditionReqDto;
import com.korit.museum.web.dto.CollectionListRespDto;
import com.korit.museum.web.dto.CollectionModificationReqDto;
import lombok.RequiredArgsConstructor;
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
@RequiredArgsConstructor
public class CollectionServiceImpl implements CollectionService{

    @Value("${file.path}")
    private String filepath;

    @Autowired
    private CollectionRepository collectionRepository;



    @Override
    public boolean addCollection(CollectionAdditionReqDto collectionAdditionReqDto) throws Exception {
        int resultCount = 0;

        List<MultipartFile> files = collectionAdditionReqDto.getFiles();
        List<CollectionImage> collectionImagesFiles = null;

        CollectionMst collection = collectionAdditionReqDto.toCollectionMstEntity();
        resultCount = collectionRepository.saveCollection(collection);

        if (files != null){
            String collectionName = collection.getCollectionName();
            collectionImagesFiles = getCollectionImageFiles(files, collectionName);
            resultCount = collectionRepository.saveImageFiles(collectionImagesFiles);
        }

        if (resultCount == 0){
            throw new CustomInternalServerErrorException("작품 등록 실패");
        }
        return true;
    }

    private List<CollectionImage> getCollectionImageFiles(List<MultipartFile> files, String collectionName) throws Exception{
        List<CollectionImage> collectionImagesFiles = new ArrayList<CollectionImage>();

        files.forEach(file ->{
            String originName = file.getOriginalFilename();
            String extension = originName.substring(originName.lastIndexOf("."));
            String saveName = UUID.randomUUID().toString() + extension;

            Path uploadPath = Paths.get(filepath + "/collection/" + saveName);

            File f = new File(filepath + "/collecton");
            if (!f.exists()){
                f.mkdirs();
            }
            try {
                Files.write(uploadPath, file.getBytes());
            }catch (IOException e){
                throw new RuntimeException(e);
            }

            CollectionImage collectionImage = CollectionImage.builder()
                    .collectionName(collectionName)
                    .originName(originName)
                    .saveName(saveName)
                    .build();
            collectionImagesFiles.add(collectionImage);
        });
        return collectionImagesFiles;
    }
    @Override
    public List<CollectionListRespDto> getCollectionList(int pageNumber, String searchText) throws Exception {
        Map<String, Object> parmsMap = new HashMap<String, Object>();
        parmsMap.put("index", (pageNumber - 1) * 10);
        parmsMap.put("searchText", searchText);

        List<CollectionListRespDto> list = new ArrayList<CollectionListRespDto>();

        collectionRepository.getCollectionList(parmsMap).forEach(collectionMst -> {
            list.add(collectionMst.toListRespDto());
        });
        return list;
    }

    @Override
    public boolean updateCollection(CollectionModificationReqDto collectionModificationReqDto) throws Exception {

        boolean status = false;

        int result =  collectionRepository.setCollection(collectionModificationReqDto.toCollectionEntity());

        if(result != 0){
            status = true;
            boolean insertStatus = true;
            boolean deleteStatus = true;

            if (collectionModificationReqDto.getFiles() != null){
                insertStatus = insertCollectionImg(collectionModificationReqDto.getFiles(), collectionModificationReqDto.getCollectionName());
            }
        }

        return status;
    }

    private boolean insertCollectionImg(List<MultipartFile> files, String collectionName) throws Exception{
        boolean status = false;

        List<CollectionImage> collectionImages = getCollectionImageFiles(files, collectionName);

        return collectionRepository.saveImageFiles(collectionImages) > 0;
    }

    private boolean deleteCollectionImg(List<String> deleteImageFiles, String collectionName) throws Exception{
        boolean status = false;

        Map<String, Object> map = new HashMap<String, Object>();
        map.put("collectionName", collectionName);
        map.put("deleteImageFiles", deleteImageFiles);

        int result = collectionRepository.deleteImageFiles(map);
        if(result != 0){
            deleteImageFiles.forEach(temp_name -> {
                Path uploadPath = Paths.get(filepath + "/collection/" + temp_name);

                File file = new File(uploadPath.toUri());
                if(file.exists()) {
                    file.delete();
                }
            });
            status = true;
        }

        return status;
    }

    @Override
    public boolean deleteCollection(String collectionName) throws Exception {
        List<CollectionImage> collectionImages = collectionRepository.getCollectionImageList(collectionName);

        if(collectionRepository.deleteCollection(collectionName) > 0){
            collectionImages.forEach(collectionImage -> {
                Path uploadPath = Paths.get(filepath + "/collection/" + collectionImage.getSaveName());

                File file = new File(uploadPath.toUri());
                if(file.exists()){
                    file.delete();
                }
            });
            return true;
        }
        return false;
    }
}






































