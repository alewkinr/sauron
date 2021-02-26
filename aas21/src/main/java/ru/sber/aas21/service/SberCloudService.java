package ru.sber.aas21.service;

import com.cloud.apigateway.sdk.utils.Client;
import com.cloud.apigateway.sdk.utils.Request;
import lombok.RequiredArgsConstructor;
import org.apache.http.Header;
import org.apache.http.HttpEntity;
import org.apache.http.HttpResponse;
import org.apache.http.client.methods.HttpRequestBase;
import org.apache.http.impl.client.CloseableHttpClient;
import org.apache.http.impl.client.HttpClients;
import org.apache.http.util.EntityUtils;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import ru.sber.aas21.configuration.SberCloudConfig;

import javax.annotation.PostConstruct;
import java.io.IOException;


@RequiredArgsConstructor
@Transactional
@Service
public class SberCloudService {

    private final SberCloudConfig sberCloudConfig;

    @PostConstruct
    public void main() {
        //Create a new request.
        Request request = new Request();
        try {
            //Set the AK/SK to sign and authenticate the request.
            request.setKey(sberCloudConfig.getKey());
            request.setSecret(sberCloudConfig.getSecret());

            //The following example shows how to set the request URL and parameters to query a VPC list.

            //Specify a request method, such as GET, PUT, POST, DELETE, HEAD, and PATCH.
            request.setMethod("GET");

            //Set a request URL in the format of https://{Endpoint}/{URI}.
            request.setUrl("https://" + sberCloudConfig.getEndpoint() + "/v1/" + sberCloudConfig.getProjectId() + "/vpcs?limit=2");

            //Add header parameters, for example, x-domain-id for invoking a global service and x-project-id for invoking a project-level service.
            request.addHeader("Content-Type", "application/json");

            //Add a body if you have specified the PUT or POST method. Special characters, such as the double quotation mark ("), contained in the body must be escaped.
            //request.setBody("demo");

        } catch (Exception e) {
            e.printStackTrace();
            return;
        }

        CloseableHttpClient client = null;
        try {
            //Sign the request.
            HttpRequestBase signedRequest = Client.sign(request);

            //Send the request.
            client = HttpClients.custom().build();
            HttpResponse response = client.execute(signedRequest);

            //Print the status line of the response.
            System.out.println(response.getStatusLine().toString());

            //Print the header fields of the response.
            Header[] resHeaders = response.getAllHeaders();
            for (Header h : resHeaders) {
                System.out.println(h.getName() + ":" + h.getValue());
            }

            //Print the body of the response.
            HttpEntity resEntity = response.getEntity();
            if (resEntity != null) {
                System.out.println(System.getProperty("line.separator") + EntityUtils.toString(resEntity, "UTF-8"));
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
    }
}
