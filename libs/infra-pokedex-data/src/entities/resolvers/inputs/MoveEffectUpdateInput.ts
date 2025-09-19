import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MoveUpdateManyWithoutEffectNestedInput } from "../inputs/MoveUpdateManyWithoutEffectNestedInput";

@TypeGraphQL.InputType("MoveEffectUpdateInput", {})
export class MoveEffectUpdateInput {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  id?: number | undefined;

  @TypeGraphQL.Field(_type => MoveUpdateManyWithoutEffectNestedInput, {
    nullable: true
  })
  moves?: MoveUpdateManyWithoutEffectNestedInput | undefined;
}
