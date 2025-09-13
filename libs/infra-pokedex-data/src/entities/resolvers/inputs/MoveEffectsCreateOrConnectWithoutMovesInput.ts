import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MoveEffectsCreateWithoutMovesInput } from "../inputs/MoveEffectsCreateWithoutMovesInput";
import { MoveEffectsWhereUniqueInput } from "../inputs/MoveEffectsWhereUniqueInput";

@TypeGraphQL.InputType("MoveEffectsCreateOrConnectWithoutMovesInput", {})
export class MoveEffectsCreateOrConnectWithoutMovesInput {
  @TypeGraphQL.Field(_type => MoveEffectsWhereUniqueInput, {
    nullable: false
  })
  where!: MoveEffectsWhereUniqueInput;

  @TypeGraphQL.Field(_type => MoveEffectsCreateWithoutMovesInput, {
    nullable: false
  })
  create!: MoveEffectsCreateWithoutMovesInput;
}
