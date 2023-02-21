package com.korit.museum.service.admin;

import com.korit.museum.entity.CollectionImage;
import com.korit.museum.entity.CollectionMst;
import com.korit.museum.exception.CustomInternalServerErrorException;
import com.korit.museum.repository.CollectionRepository;
import com.korit.museum.web.dto.admin.CollectionAdditionReqDto;
import com.korit.museum.web.dto.admin.CollectionListRespDto;
import com.korit.museum.web.dto.admin.CollectionModificationReqDto;
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
                insertStatus = insertCollectionImg(collectionModificationReqDto.getFiles(), collectionModificationReqDto getName());
            }
        }

        return status;
    }

    private boolean insertCollectionImg(List<MultipartFile> files, String collectionName) throws Exception{
        boolean status = false;

        List<CollectionImage> collectionImages = getCollectionImageFiles(files, collectionName);

        return collectionRepository.saveImageFiles(collectionImages) > 0;
    }

    @Override
    public boolean deleteCollection(int collectionId) throws Exception {
        return false;
    }

//    public Map<String, Object> getCollectionAndImage(String collectionName){
//        Map<String, Object> result = new HashMap<>();
//        result.put("collectionMst", collectionRepository.findCollectionByCollectionName(collectionName));
//        result.put("collectionImage", collectionRepository.findCollectionImageByCollectionCode(collectionName));
//
//        return result;
//
//    }

//    public void registerCollection(CollectionAdditionReqDto collectionReqDto){
//        duplicateCollectionCode(collectionReqDto.getCollectionName());
//        collectionRepository.saveCollection(collectionReqDto);
//    }
//
//    private void duplicateCollectionCode(String collectionName){
//        CollectionMst collectionMst = collectionRepository.findCollectionByCollectionName(collectionName);
//        if(collectionMst != null){
//            Map<String, String> errorMap = new HashMap<>();
//            errorMap.put("collectionName", "이미 존재하는 컬렉션입니다.");
//
//            throw new CustomValidationException(errorMap);
//        }
//    }
//
////    private void modifyCollection(CollectionAdditionReqDto deleteCollectionsReqDto){
////        collectionRepository.deleteCollections(deleteCollectionsReqDto.getUserIds());
////    }
//

//
//    public List<CollectionImage> getCollections(String collectionCode){
//        return collectionRepository.findCollectionImageAll(collectionCode);
//    }
//
//    public void  removeCollectionImage(int imageId){
//        CollectionImage collectionImage = collectionRepository.findCollectionImageByImageId(imageId);
//
//        if(collectionImage == null){
//            Map<String, String> errorMap = new HashMap<>();
//            errorMap.put("error", "존재하지 않는 이미지 ID 입니다.");
//
//            throw new CustomValidationException(errorMap);
//        }
//
//        if(collectionRepository.deleteCollectionImage(imageId) > 0) {
//            File file = new File(filepath + "collection/" + collectionImage.getSaveName());
//            if(file.exists()){
//                file.delete();
//            }
//        }
//    }

}






































