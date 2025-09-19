import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { VersionGroupCreateWithoutGenerationInput } from "../inputs/VersionGroupCreateWithoutGenerationInput";
import { VersionGroupUpdateWithoutGenerationInput } from "../inputs/VersionGroupUpdateWithoutGenerationInput";
import { VersionGroupWhereUniqueInput } from "../inputs/VersionGroupWhereUniqueInput";

@TypeGraphQL.InputType("VersionGroupUpsertWithWhereUniqueWithoutGenerationInput", {})
export class VersionGroupUpsertWithWhereUniqueWithoutGenerationInput {
  @TypeGraphQL.Field(_type => VersionGroupWhereUniqueInput, {
    nullable: false
  })
  where!: VersionGroupWhereUniqueInput;

  @TypeGraphQL.Field(_type => VersionGroupUpdateWithoutGenerationInput, {
    nullable: false
  })
  update!: VersionGroupUpdateWithoutGenerationInput;

  @TypeGraphQL.Field(_type => VersionGroupCreateWithoutGenerationInput, {
    nullable: false
  })
  create!: VersionGroupCreateWithoutGenerationInput;
}
