import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MovesCreateNestedManyWithoutEffectInput } from "../inputs/MovesCreateNestedManyWithoutEffectInput";

@TypeGraphQL.InputType("MoveEffectsCreateInput", {})
export class MoveEffectsCreateInput {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  id!: number;

  @TypeGraphQL.Field(_type => MovesCreateNestedManyWithoutEffectInput, {
    nullable: true
  })
  moves?: MovesCreateNestedManyWithoutEffectInput | undefined;
}
