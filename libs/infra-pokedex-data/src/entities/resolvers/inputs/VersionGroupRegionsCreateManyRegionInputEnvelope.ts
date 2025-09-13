import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { VersionGroupRegionsCreateManyRegionInput } from "../inputs/VersionGroupRegionsCreateManyRegionInput";

@TypeGraphQL.InputType("VersionGroupRegionsCreateManyRegionInputEnvelope", {})
export class VersionGroupRegionsCreateManyRegionInputEnvelope {
  @TypeGraphQL.Field(_type => [VersionGroupRegionsCreateManyRegionInput], {
    nullable: false
  })
  data!: VersionGroupRegionsCreateManyRegionInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
