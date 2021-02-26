package ru.sber.aas21.util;

import com.cloud.apigateway.sdk.utils.Client;
import com.cloud.apigateway.sdk.utils.Request;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.apache.http.Header;
import org.apache.http.HttpEntity;
import org.apache.http.HttpResponse;
import org.apache.http.client.methods.HttpRequestBase;
import org.apache.http.impl.client.CloseableHttpClient;
import org.apache.http.impl.client.HttpClients;
import org.apache.http.util.EntityUtils;
import org.springframework.stereotype.Component;
import ru.sber.aas21.configuration.SberCloudConfig;

import java.io.IOException;

@Slf4j
@RequiredArgsConstructor
@Component
public class SberSDKUtils {

    public enum Method {
        GET, POST, PUT, DELETE, HEAD, PATCH
    }

    private static final String URL = "https://%s/%s/%s/%s";
    private static final String CONTENT_TYPE = "Content-Type";
    private static final String APPLICATION_JSON = "application/json";

    private final SberCloudConfig sberCloudConfig;
    private final ObjectMapper objectMapper;

    public <T> T callForObject(String serviceEndpoint, String appendixUrl, Method method, Class<T> resultClass) throws JsonProcessingException {
        String call = call(serviceEndpoint, appendixUrl, method);
        return objectMapper.readValue(call, resultClass);
    }

    public String call(String serviceEndpoint, String appendixUrl, Method method) {
        //Create a new request.
        Request request = new Request();
        String result = null;
        try {
            //Set the AK/SK to sign and authenticate the request.
            request.setKey(sberCloudConfig.getKey());
            request.setSecret(sberCloudConfig.getSecret());

            //The following example shows how to set the request URL and parameters to query a VPC list.

            //Specify a request method, such as GET, PUT, POST, DELETE, HEAD, and PATCH.
            request.setMethod(method.name());

            //Set a request URL in the format of https://{Endpoint}/{URI}.
            String url = URL.formatted(serviceEndpoint, sberCloudConfig.getApiVersion(), sberCloudConfig.getProjectId(), appendixUrl);
            request.setUrl(url);

            //Add header parameters, for example, x-domain-id for invoking a global service and x-project-id for invoking a project-level service.
            request.addHeader(CONTENT_TYPE, APPLICATION_JSON);

            //Add a body if you have specified the PUT or POST method. Special characters, such as the double quotation mark ("), contained in the body must be escaped.
            //request.setBody("demo");

        } catch (Exception e) {
            e.printStackTrace();
            return null;
        }

        CloseableHttpClient client = null;
        try {
            //Sign the request.
            HttpRequestBase signedRequest = Client.sign(request);

            //Send the request.
            client = HttpClients.custom().build();
            HttpResponse response = client.execute(signedRequest);

            //Print the status line of the response.
            log.info("Response status: " + response.getStatusLine().toString());

            //Print the header fields of the response.
            Header[] resHeaders = response.getAllHeaders();
            for (Header h : resHeaders) {
                System.out.println(h.getName() + ":" + h.getValue());
            }

            //Print the body of the response.
            HttpEntity resEntity = response.getEntity();
            if (resEntity != null) {
//                System.out.println(System.getProperty("line.separator") + EntityUtils.toString(resEntity, "UTF-8"));
                result = EntityUtils.toString(resEntity, "UTF-8");
            }

        } catch (Exception e) {
            e.printStackTrace();
        } finally {
            try {
                if (client != null) {
                    client.close();
                }
            } catch (IOException e) {
                e.printStackTrace();
            }
        }

        return result;
    }

}
