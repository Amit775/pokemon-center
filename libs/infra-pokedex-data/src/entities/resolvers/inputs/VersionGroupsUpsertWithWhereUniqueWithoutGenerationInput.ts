import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { VersionGroupsCreateWithoutGenerationInput } from "../inputs/VersionGroupsCreateWithoutGenerationInput";
import { VersionGroupsUpdateWithoutGenerationInput } from "../inputs/VersionGroupsUpdateWithoutGenerationInput";
import { VersionGroupsWhereUniqueInput } from "../inputs/VersionGroupsWhereUniqueInput";

@TypeGraphQL.InputType("VersionGroupsUpsertWithWhereUniqueWithoutGenerationInput", {})
export class VersionGroupsUpsertWithWhereUniqueWithoutGenerationInput {
  @TypeGraphQL.Field(_type => VersionGroupsWhereUniqueInput, {
    nullable: false
  })
  where!: VersionGroupsWhereUniqueInput;

  @TypeGraphQL.Field(_type => VersionGroupsUpdateWithoutGenerationInput, {
    nullable: false
  })
  update!: VersionGroupsUpdateWithoutGenerationInput;

  @TypeGraphQL.Field(_type => VersionGroupsCreateWithoutGenerationInput, {
    nullable: false
  })
  create!: VersionGroupsCreateWithoutGenerationInput;
}
