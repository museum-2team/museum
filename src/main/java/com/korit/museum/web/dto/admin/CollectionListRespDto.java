package com.korit.museum.web.dto.admin;

import com.korit.museum.entity.CollectionImage;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Builder
@NoArgsConstructor
@AllArgsConstructor
@Data
public class CollectionListRespDto {
    private int collectionId;

    private String collectionName;
    private int price;
    private String author;
    private String location;
    private String collectionSize;
    private String year_of_Manufacture;
    private String material;

    private List<CollectionImage> collectionImagesFiles;

}
