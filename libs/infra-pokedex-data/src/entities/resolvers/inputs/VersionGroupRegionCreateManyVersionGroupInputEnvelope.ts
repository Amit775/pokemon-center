import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { VersionGroupRegionCreateManyVersionGroupInput } from "../inputs/VersionGroupRegionCreateManyVersionGroupInput";

@TypeGraphQL.InputType("VersionGroupRegionCreateManyVersionGroupInputEnvelope", {})
export class VersionGroupRegionCreateManyVersionGroupInputEnvelope {
  @TypeGraphQL.Field(_type => [VersionGroupRegionCreateManyVersionGroupInput], {
    nullable: false
  })
  data!: VersionGroupRegionCreateManyVersionGroupInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
