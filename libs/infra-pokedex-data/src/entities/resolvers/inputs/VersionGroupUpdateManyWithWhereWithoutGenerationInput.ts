import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { VersionGroupScalarWhereInput } from "../inputs/VersionGroupScalarWhereInput";
import { VersionGroupUpdateManyMutationInput } from "../inputs/VersionGroupUpdateManyMutationInput";

@TypeGraphQL.InputType("VersionGroupUpdateManyWithWhereWithoutGenerationInput", {})
export class VersionGroupUpdateManyWithWhereWithoutGenerationInput {
  @TypeGraphQL.Field(_type => VersionGroupScalarWhereInput, {
    nullable: false
  })
  where!: VersionGroupScalarWhereInput;

  @TypeGraphQL.Field(_type => VersionGroupUpdateManyMutationInput, {
    nullable: false
  })
  data!: VersionGroupUpdateManyMutationInput;
}
