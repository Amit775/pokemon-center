import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { VersionGroupsUpdateWithoutGenerationInput } from "../inputs/VersionGroupsUpdateWithoutGenerationInput";
import { VersionGroupsWhereUniqueInput } from "../inputs/VersionGroupsWhereUniqueInput";

@TypeGraphQL.InputType("VersionGroupsUpdateWithWhereUniqueWithoutGenerationInput", {})
export class VersionGroupsUpdateWithWhereUniqueWithoutGenerationInput {
  @TypeGraphQL.Field(_type => VersionGroupsWhereUniqueInput, {
    nullable: false
  })
  where!: VersionGroupsWhereUniqueInput;

  @TypeGraphQL.Field(_type => VersionGroupsUpdateWithoutGenerationInput, {
    nullable: false
  })
  data!: VersionGroupsUpdateWithoutGenerationInput;
}
