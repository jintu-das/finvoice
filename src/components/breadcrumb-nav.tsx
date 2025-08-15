import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { isMatch, Link, useMatches } from "@tanstack/react-router";
import * as React from "react";

export const BreadcrumbNav = () => {
  const matches = useMatches();
  const matchesWithCrumbs = matches.filter((match) =>
    isMatch(match, "loaderData.crumb")
  );

  const items = matchesWithCrumbs.map(({ pathname, loaderData }) => {
    return {
      href: pathname,
      label: loaderData?.crumb,
    };
  });

  return (
    <Breadcrumb>
      <BreadcrumbList>
        {items.map((item, index) => (
          <React.Fragment key={index}>
            <BreadcrumbItem>
              <Link to={item.href} className="breadcrumb-link">
                {item.label}
              </Link>
            </BreadcrumbItem>
            {index < items.length - 1 && <BreadcrumbSeparator />}
          </React.Fragment>
        ))}
      </BreadcrumbList>
    </Breadcrumb>
  );
};
