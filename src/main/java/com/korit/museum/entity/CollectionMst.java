package com.korit.museum.entity;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;

@Builder
@NoArgsConstructor
@AllArgsConstructor
@Data
public class CollectionMst {

    private int collectionId;

    private String collectionName;
    private String author;
    private String location;
    private String collectionSize;
    private String year_of_Manufacture;
    private String material;

    private LocalDateTime create_date;
    private LocalDateTime update_date;

}
