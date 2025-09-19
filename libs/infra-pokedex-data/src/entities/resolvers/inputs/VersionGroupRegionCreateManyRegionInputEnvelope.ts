import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { VersionGroupRegionCreateManyRegionInput } from "../inputs/VersionGroupRegionCreateManyRegionInput";

@TypeGraphQL.InputType("VersionGroupRegionCreateManyRegionInputEnvelope", {})
export class VersionGroupRegionCreateManyRegionInputEnvelope {
  @TypeGraphQL.Field(_type => [VersionGroupRegionCreateManyRegionInput], {
    nullable: false
  })
  data!: VersionGroupRegionCreateManyRegionInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
