import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MoveEffectCreateWithoutMovesInput } from "../inputs/MoveEffectCreateWithoutMovesInput";
import { MoveEffectUpdateWithoutMovesInput } from "../inputs/MoveEffectUpdateWithoutMovesInput";
import { MoveEffectWhereInput } from "../inputs/MoveEffectWhereInput";

@TypeGraphQL.InputType("MoveEffectUpsertWithoutMovesInput", {})
export class MoveEffectUpsertWithoutMovesInput {
  @TypeGraphQL.Field(_type => MoveEffectUpdateWithoutMovesInput, {
    nullable: false
  })
  update!: MoveEffectUpdateWithoutMovesInput;

  @TypeGraphQL.Field(_type => MoveEffectCreateWithoutMovesInput, {
    nullable: false
  })
  create!: MoveEffectCreateWithoutMovesInput;

  @TypeGraphQL.Field(_type => MoveEffectWhereInput, {
    nullable: true
  })
  where?: MoveEffectWhereInput | undefined;
}
