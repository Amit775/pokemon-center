import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { VersionGroupRegionsCreateWithoutVersionGroupInput } from "../inputs/VersionGroupRegionsCreateWithoutVersionGroupInput";
import { VersionGroupRegionsUpdateWithoutVersionGroupInput } from "../inputs/VersionGroupRegionsUpdateWithoutVersionGroupInput";
import { VersionGroupRegionsWhereUniqueInput } from "../inputs/VersionGroupRegionsWhereUniqueInput";

@TypeGraphQL.InputType("VersionGroupRegionsUpsertWithWhereUniqueWithoutVersionGroupInput", {})
export class VersionGroupRegionsUpsertWithWhereUniqueWithoutVersionGroupInput {
  @TypeGraphQL.Field(_type => VersionGroupRegionsWhereUniqueInput, {
    nullable: false
  })
  where!: VersionGroupRegionsWhereUniqueInput;

  @TypeGraphQL.Field(_type => VersionGroupRegionsUpdateWithoutVersionGroupInput, {
    nullable: false
  })
  update!: VersionGroupRegionsUpdateWithoutVersionGroupInput;

  @TypeGraphQL.Field(_type => VersionGroupRegionsCreateWithoutVersionGroupInput, {
    nullable: false
  })
  create!: VersionGroupRegionsCreateWithoutVersionGroupInput;
}
