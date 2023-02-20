package com.korit.museum.web.dto;

import lombok.Data;

import java.util.List;

@Data
public class DeleteCollectionsReqDto{
    private List<Integer> userIds;
}
