import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { VersionGroupRegionUpdateWithoutRegionInput } from "../inputs/VersionGroupRegionUpdateWithoutRegionInput";
import { VersionGroupRegionWhereUniqueInput } from "../inputs/VersionGroupRegionWhereUniqueInput";

@TypeGraphQL.InputType("VersionGroupRegionUpdateWithWhereUniqueWithoutRegionInput", {})
export class VersionGroupRegionUpdateWithWhereUniqueWithoutRegionInput {
  @TypeGraphQL.Field(_type => VersionGroupRegionWhereUniqueInput, {
    nullable: false
  })
  where!: VersionGroupRegionWhereUniqueInput;

  @TypeGraphQL.Field(_type => VersionGroupRegionUpdateWithoutRegionInput, {
    nullable: false
  })
  data!: VersionGroupRegionUpdateWithoutRegionInput;
}
