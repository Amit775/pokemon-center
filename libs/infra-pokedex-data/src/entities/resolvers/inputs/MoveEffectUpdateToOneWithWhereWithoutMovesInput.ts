import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MoveEffectUpdateWithoutMovesInput } from "../inputs/MoveEffectUpdateWithoutMovesInput";
import { MoveEffectWhereInput } from "../inputs/MoveEffectWhereInput";

@TypeGraphQL.InputType("MoveEffectUpdateToOneWithWhereWithoutMovesInput", {})
export class MoveEffectUpdateToOneWithWhereWithoutMovesInput {
  @TypeGraphQL.Field(_type => MoveEffectWhereInput, {
    nullable: true
  })
  where?: MoveEffectWhereInput | undefined;

  @TypeGraphQL.Field(_type => MoveEffectUpdateWithoutMovesInput, {
    nullable: false
  })
  data!: MoveEffectUpdateWithoutMovesInput;
}
