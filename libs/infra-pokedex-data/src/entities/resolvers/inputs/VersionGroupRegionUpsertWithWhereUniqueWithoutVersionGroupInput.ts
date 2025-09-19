import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { VersionGroupRegionCreateWithoutVersionGroupInput } from "../inputs/VersionGroupRegionCreateWithoutVersionGroupInput";
import { VersionGroupRegionUpdateWithoutVersionGroupInput } from "../inputs/VersionGroupRegionUpdateWithoutVersionGroupInput";
import { VersionGroupRegionWhereUniqueInput } from "../inputs/VersionGroupRegionWhereUniqueInput";

@TypeGraphQL.InputType("VersionGroupRegionUpsertWithWhereUniqueWithoutVersionGroupInput", {})
export class VersionGroupRegionUpsertWithWhereUniqueWithoutVersionGroupInput {
  @TypeGraphQL.Field(_type => VersionGroupRegionWhereUniqueInput, {
    nullable: false
  })
  where!: VersionGroupRegionWhereUniqueInput;

  @TypeGraphQL.Field(_type => VersionGroupRegionUpdateWithoutVersionGroupInput, {
    nullable: false
  })
  update!: VersionGroupRegionUpdateWithoutVersionGroupInput;

  @TypeGraphQL.Field(_type => VersionGroupRegionCreateWithoutVersionGroupInput, {
    nullable: false
  })
  create!: VersionGroupRegionCreateWithoutVersionGroupInput;
}
