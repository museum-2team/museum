package com.korit.museum.web.dto;

import com.korit.museum.entity.CollectionMst;
import lombok.Data;
import org.springframework.web.multipart.MultipartFile;

import javax.validation.constraints.Max;
import javax.validation.constraints.Min;
import javax.validation.constraints.NotBlank;
import java.util.List;

@Data
public class CollectionAdditionReqDto {

    @NotBlank(message = "빈 값일 수 없습니다.")
    private String collectionName;

    @Max(value = 500000000, message = "최대 금액은 5억원 까지만 설정 가능합니다.")
    @Min(value = 10000, message = "최소 금액은 1만원입니다.")
    private int price;

    private String author;

    @NotBlank(message = "빈 값일 수 없습니다.")
    private String location;

    @NotBlank(message = "빈 값일 수 없습니다.")
    private String collectionSize;

    private String year_of_Manufacture;

    @NotBlank(message = "빈 값일 수 없습니다.")
    private String material;

    private List<MultipartFile> files;

    public CollectionMst toCollectionMstEntity(){
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
