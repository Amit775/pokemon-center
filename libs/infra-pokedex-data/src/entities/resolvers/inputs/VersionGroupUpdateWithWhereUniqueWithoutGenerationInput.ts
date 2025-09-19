import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { VersionGroupUpdateWithoutGenerationInput } from "../inputs/VersionGroupUpdateWithoutGenerationInput";
import { VersionGroupWhereUniqueInput } from "../inputs/VersionGroupWhereUniqueInput";

@TypeGraphQL.InputType("VersionGroupUpdateWithWhereUniqueWithoutGenerationInput", {})
export class VersionGroupUpdateWithWhereUniqueWithoutGenerationInput {
  @TypeGraphQL.Field(_type => VersionGroupWhereUniqueInput, {
    nullable: false
  })
  where!: VersionGroupWhereUniqueInput;

  @TypeGraphQL.Field(_type => VersionGroupUpdateWithoutGenerationInput, {
    nullable: false
  })
  data!: VersionGroupUpdateWithoutGenerationInput;
}
