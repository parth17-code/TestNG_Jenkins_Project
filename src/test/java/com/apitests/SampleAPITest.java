package com.apitests;

import org.testng.annotations.Test;
import static io.restassured.RestAssured.given;

public class SampleAPITest {

    @Test
    public void verifyGitHubStatusIs200() {
        given()
            .when()
                .get("https://api.github.com/users/octocat")
            .then()
                .statusCode(200);
    }

    @Test
    public void verifyInvalidEndpointStatusIs404() {
        given()
            .when()
                .get("https://api.github.com/nonexistent")
            .then()
                .statusCode(404);
    }
}

