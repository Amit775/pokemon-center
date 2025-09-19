import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MoveFlagMapScalarWhereInput } from "../inputs/MoveFlagMapScalarWhereInput";
import { MoveFlagMapUpdateManyMutationInput } from "../inputs/MoveFlagMapUpdateManyMutationInput";

@TypeGraphQL.InputType("MoveFlagMapUpdateManyWithWhereWithoutFlagInput", {})
export class MoveFlagMapUpdateManyWithWhereWithoutFlagInput {
  @TypeGraphQL.Field(_type => MoveFlagMapScalarWhereInput, {
    nullable: false
  })
  where!: MoveFlagMapScalarWhereInput;

  @TypeGraphQL.Field(_type => MoveFlagMapUpdateManyMutationInput, {
    nullable: false
  })
  data!: MoveFlagMapUpdateManyMutationInput;
}
