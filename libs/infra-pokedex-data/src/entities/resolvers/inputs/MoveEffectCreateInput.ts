import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MoveCreateNestedManyWithoutEffectInput } from "../inputs/MoveCreateNestedManyWithoutEffectInput";

@TypeGraphQL.InputType("MoveEffectCreateInput", {})
export class MoveEffectCreateInput {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  id!: number;

  @TypeGraphQL.Field(_type => MoveCreateNestedManyWithoutEffectInput, {
    nullable: true
  })
  moves?: MoveCreateNestedManyWithoutEffectInput | undefined;
}
