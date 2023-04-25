// import * as acm from "@aws-cdk/aws-certificatemanager";
// import * as route53 from "@aws-cdk/aws-route53";
import { use, AstroSite } from "sst/constructs";

import type { StackContext } from "sst/constructs";

import { RestApi } from "./RestApi";

export function Web({ app, stack }: StackContext) {
  const { api } = use(RestApi);

  // Look up hosted zone
  // const hostedZone = route53.HostedZone.fromLookup(stack, "HostedZone", {
  //   domainName: "rubyjasmin.com",
  // });

  // Create a certificate with alternate domain names
  // const certificate = new acm.DnsValidatedCertificate(stack, "Certificate", {
  //   domainName: "onword.rubyjasmin.com",
  //   hostedZone,
  //   region: "us-east-1",
  // });

  const site = new AstroSite(stack, "AstroClient", {
    path: "apps/onword-webclient/",
    // customDomain: {
    //   domainName: "onword.rubyjasmin.com",
    // },
    environment: {
      PUBLIC_API_URL: api.url,
    },
  });

  stack.addOutputs({
    SiteURL: site.url || "localhost",
  });
}
