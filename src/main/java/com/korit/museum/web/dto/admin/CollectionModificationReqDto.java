package com.korit.museum.web.dto.admin;

import com.korit.museum.entity.CollectionMst;
import org.springframework.web.multipart.MultipartFile;

import javax.validation.constraints.Max;
import javax.validation.constraints.Min;
import javax.validation.constraints.NotBlank;
import java.util.List;

public class CollectionModificationReqDto {

    @NotBlank(message = "빈 값일 수 없습니다.")
    private String collectionName;

    @Max(value = 500000000, message = "최대 금액은 5억원 까지만 설정 가능합니다.")
    @Min(value = 1000000, message = "최소 금액은 100만원입니다.")
    private int price;

    private String author;

    @NotBlank(message = "빈 값일 수 없습니다.")
    private String location;

    @NotBlank(message = "빈 값일 수 없습니다.")
    private String collectionSize;

    private String year_of_Manufacture;

    @NotBlank(message = "빈 값일 수 없습니다.")
    private String material;

    private List<String> deleteImgFiles;
    private List<MultipartFile> files;

    public CollectionMst toCollectionEntity(){
        return CollectionMst.builder()
                .collectionName(collectionName)
                .price(price)
                .author(author)
                .location(location)
                .collectionSize(collectionSize)
                .year_of_Manufacture(year_of_Manufacture)
                .material(material)
                .build();
    }
}
