import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MoveEffectCreateWithoutMovesInput } from "../inputs/MoveEffectCreateWithoutMovesInput";
import { MoveEffectWhereUniqueInput } from "../inputs/MoveEffectWhereUniqueInput";

@TypeGraphQL.InputType("MoveEffectCreateOrConnectWithoutMovesInput", {})
export class MoveEffectCreateOrConnectWithoutMovesInput {
  @TypeGraphQL.Field(_type => MoveEffectWhereUniqueInput, {
    nullable: false
  })
  where!: MoveEffectWhereUniqueInput;

  @TypeGraphQL.Field(_type => MoveEffectCreateWithoutMovesInput, {
    nullable: false
  })
  create!: MoveEffectCreateWithoutMovesInput;
}
