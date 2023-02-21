package com.korit.museum.entity;

import com.korit.museum.web.dto.admin.CollectionListRespDto;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;
import java.util.List;

import static com.fasterxml.jackson.databind.type.LogicalType.Collection;

@Builder
@NoArgsConstructor
@AllArgsConstructor
@Data
public class CollectionMst {

    private int collectionId;

    private String collectionName;
    private int price;
    private String author;
    private String location;
    private String collectionSize;
    private String year_of_Manufacture;
    private String material;

    private List<CollectionImage> collectionImagesFiles;

    private LocalDateTime create_date;
    private LocalDateTime update_date;

    public CollectionListRespDto toListRespDto() {
        return CollectionListRespDto.builder()
                .collectionId(collectionId)
                .collectionName(collectionName)
                .price(price)
                .author(author)
                .location(location)
                .collectionSize(collectionSize)
                .year_of_Manufacture(year_of_Manufacture)
                .material(material)
                .collectionImagesFiles(collectionImagesFiles)
                .build();
    }

}
