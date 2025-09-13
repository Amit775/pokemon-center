import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MoveEffectsCreateOrConnectWithoutMovesInput } from "../inputs/MoveEffectsCreateOrConnectWithoutMovesInput";
import { MoveEffectsCreateWithoutMovesInput } from "../inputs/MoveEffectsCreateWithoutMovesInput";
import { MoveEffectsWhereUniqueInput } from "../inputs/MoveEffectsWhereUniqueInput";

@TypeGraphQL.InputType("MoveEffectsCreateNestedOneWithoutMovesInput", {})
export class MoveEffectsCreateNestedOneWithoutMovesInput {
  @TypeGraphQL.Field(_type => MoveEffectsCreateWithoutMovesInput, {
    nullable: true
  })
  create?: MoveEffectsCreateWithoutMovesInput | undefined;

  @TypeGraphQL.Field(_type => MoveEffectsCreateOrConnectWithoutMovesInput, {
    nullable: true
  })
  connectOrCreate?: MoveEffectsCreateOrConnectWithoutMovesInput | undefined;

  @TypeGraphQL.Field(_type => MoveEffectsWhereUniqueInput, {
    nullable: true
  })
  connect?: MoveEffectsWhereUniqueInput | undefined;
}
