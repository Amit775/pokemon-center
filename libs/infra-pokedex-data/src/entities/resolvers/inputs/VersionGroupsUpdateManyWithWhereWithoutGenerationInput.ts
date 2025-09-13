import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { VersionGroupsScalarWhereInput } from "../inputs/VersionGroupsScalarWhereInput";
import { VersionGroupsUpdateManyMutationInput } from "../inputs/VersionGroupsUpdateManyMutationInput";

@TypeGraphQL.InputType("VersionGroupsUpdateManyWithWhereWithoutGenerationInput", {})
export class VersionGroupsUpdateManyWithWhereWithoutGenerationInput {
  @TypeGraphQL.Field(_type => VersionGroupsScalarWhereInput, {
    nullable: false
  })
  where!: VersionGroupsScalarWhereInput;

  @TypeGraphQL.Field(_type => VersionGroupsUpdateManyMutationInput, {
    nullable: false
  })
  data!: VersionGroupsUpdateManyMutationInput;
}
