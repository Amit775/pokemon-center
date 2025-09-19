import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MoveEffectCreateOrConnectWithoutMovesInput } from "../inputs/MoveEffectCreateOrConnectWithoutMovesInput";
import { MoveEffectCreateWithoutMovesInput } from "../inputs/MoveEffectCreateWithoutMovesInput";
import { MoveEffectWhereUniqueInput } from "../inputs/MoveEffectWhereUniqueInput";

@TypeGraphQL.InputType("MoveEffectCreateNestedOneWithoutMovesInput", {})
export class MoveEffectCreateNestedOneWithoutMovesInput {
  @TypeGraphQL.Field(_type => MoveEffectCreateWithoutMovesInput, {
    nullable: true
  })
  create?: MoveEffectCreateWithoutMovesInput | undefined;

  @TypeGraphQL.Field(_type => MoveEffectCreateOrConnectWithoutMovesInput, {
    nullable: true
  })
  connectOrCreate?: MoveEffectCreateOrConnectWithoutMovesInput | undefined;

  @TypeGraphQL.Field(_type => MoveEffectWhereUniqueInput, {
    nullable: true
  })
  connect?: MoveEffectWhereUniqueInput | undefined;
}
