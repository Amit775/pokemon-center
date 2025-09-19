import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { VersionGroupRegionUpdateWithoutVersionGroupInput } from "../inputs/VersionGroupRegionUpdateWithoutVersionGroupInput";
import { VersionGroupRegionWhereUniqueInput } from "../inputs/VersionGroupRegionWhereUniqueInput";

@TypeGraphQL.InputType("VersionGroupRegionUpdateWithWhereUniqueWithoutVersionGroupInput", {})
export class VersionGroupRegionUpdateWithWhereUniqueWithoutVersionGroupInput {
  @TypeGraphQL.Field(_type => VersionGroupRegionWhereUniqueInput, {
    nullable: false
  })
  where!: VersionGroupRegionWhereUniqueInput;

  @TypeGraphQL.Field(_type => VersionGroupRegionUpdateWithoutVersionGroupInput, {
    nullable: false
  })
  data!: VersionGroupRegionUpdateWithoutVersionGroupInput;
}
