package com.korit.museum.web.dto;

import lombok.AllArgsConstructor;
import lombok.Data;

import java.util.Map;

@AllArgsConstructor
@Data
public class CMRespDto<T> {
    private String message;
    private T data;
}
