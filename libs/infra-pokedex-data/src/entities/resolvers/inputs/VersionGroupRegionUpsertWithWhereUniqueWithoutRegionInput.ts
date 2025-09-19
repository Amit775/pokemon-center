import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { VersionGroupRegionCreateWithoutRegionInput } from "../inputs/VersionGroupRegionCreateWithoutRegionInput";
import { VersionGroupRegionUpdateWithoutRegionInput } from "../inputs/VersionGroupRegionUpdateWithoutRegionInput";
import { VersionGroupRegionWhereUniqueInput } from "../inputs/VersionGroupRegionWhereUniqueInput";

@TypeGraphQL.InputType("VersionGroupRegionUpsertWithWhereUniqueWithoutRegionInput", {})
export class VersionGroupRegionUpsertWithWhereUniqueWithoutRegionInput {
  @TypeGraphQL.Field(_type => VersionGroupRegionWhereUniqueInput, {
    nullable: false
  })
  where!: VersionGroupRegionWhereUniqueInput;

  @TypeGraphQL.Field(_type => VersionGroupRegionUpdateWithoutRegionInput, {
    nullable: false
  })
  update!: VersionGroupRegionUpdateWithoutRegionInput;

  @TypeGraphQL.Field(_type => VersionGroupRegionCreateWithoutRegionInput, {
    nullable: false
  })
  create!: VersionGroupRegionCreateWithoutRegionInput;
}
