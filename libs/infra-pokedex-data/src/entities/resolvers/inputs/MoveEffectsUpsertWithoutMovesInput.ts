import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MoveEffectsCreateWithoutMovesInput } from "../inputs/MoveEffectsCreateWithoutMovesInput";
import { MoveEffectsUpdateWithoutMovesInput } from "../inputs/MoveEffectsUpdateWithoutMovesInput";
import { MoveEffectsWhereInput } from "../inputs/MoveEffectsWhereInput";

@TypeGraphQL.InputType("MoveEffectsUpsertWithoutMovesInput", {})
export class MoveEffectsUpsertWithoutMovesInput {
  @TypeGraphQL.Field(_type => MoveEffectsUpdateWithoutMovesInput, {
    nullable: false
  })
  update!: MoveEffectsUpdateWithoutMovesInput;

  @TypeGraphQL.Field(_type => MoveEffectsCreateWithoutMovesInput, {
    nullable: false
  })
  create!: MoveEffectsCreateWithoutMovesInput;

  @TypeGraphQL.Field(_type => MoveEffectsWhereInput, {
    nullable: true
  })
  where?: MoveEffectsWhereInput | undefined;
}
