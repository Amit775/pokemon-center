import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { VersionGroupRegionsUpdateWithoutRegionInput } from "../inputs/VersionGroupRegionsUpdateWithoutRegionInput";
import { VersionGroupRegionsWhereUniqueInput } from "../inputs/VersionGroupRegionsWhereUniqueInput";

@TypeGraphQL.InputType("VersionGroupRegionsUpdateWithWhereUniqueWithoutRegionInput", {})
export class VersionGroupRegionsUpdateWithWhereUniqueWithoutRegionInput {
  @TypeGraphQL.Field(_type => VersionGroupRegionsWhereUniqueInput, {
    nullable: false
  })
  where!: VersionGroupRegionsWhereUniqueInput;

  @TypeGraphQL.Field(_type => VersionGroupRegionsUpdateWithoutRegionInput, {
    nullable: false
  })
  data!: VersionGroupRegionsUpdateWithoutRegionInput;
}
