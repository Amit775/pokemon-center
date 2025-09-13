import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MoveEffectsUpdateWithoutMovesInput } from "../inputs/MoveEffectsUpdateWithoutMovesInput";
import { MoveEffectsWhereInput } from "../inputs/MoveEffectsWhereInput";

@TypeGraphQL.InputType("MoveEffectsUpdateToOneWithWhereWithoutMovesInput", {})
export class MoveEffectsUpdateToOneWithWhereWithoutMovesInput {
  @TypeGraphQL.Field(_type => MoveEffectsWhereInput, {
    nullable: true
  })
  where?: MoveEffectsWhereInput | undefined;

  @TypeGraphQL.Field(_type => MoveEffectsUpdateWithoutMovesInput, {
    nullable: false
  })
  data!: MoveEffectsUpdateWithoutMovesInput;
}
