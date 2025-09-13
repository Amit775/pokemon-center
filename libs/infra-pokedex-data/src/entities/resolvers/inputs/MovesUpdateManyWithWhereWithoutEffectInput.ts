import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MovesScalarWhereInput } from "../inputs/MovesScalarWhereInput";
import { MovesUpdateManyMutationInput } from "../inputs/MovesUpdateManyMutationInput";

@TypeGraphQL.InputType("MovesUpdateManyWithWhereWithoutEffectInput", {})
export class MovesUpdateManyWithWhereWithoutEffectInput {
  @TypeGraphQL.Field(_type => MovesScalarWhereInput, {
    nullable: false
  })
  where!: MovesScalarWhereInput;

  @TypeGraphQL.Field(_type => MovesUpdateManyMutationInput, {
    nullable: false
  })
  data!: MovesUpdateManyMutationInput;
}
