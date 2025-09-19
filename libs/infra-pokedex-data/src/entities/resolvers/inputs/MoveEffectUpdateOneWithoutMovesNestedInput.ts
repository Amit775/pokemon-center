import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MoveEffectCreateOrConnectWithoutMovesInput } from "../inputs/MoveEffectCreateOrConnectWithoutMovesInput";
import { MoveEffectCreateWithoutMovesInput } from "../inputs/MoveEffectCreateWithoutMovesInput";
import { MoveEffectUpdateToOneWithWhereWithoutMovesInput } from "../inputs/MoveEffectUpdateToOneWithWhereWithoutMovesInput";
import { MoveEffectUpsertWithoutMovesInput } from "../inputs/MoveEffectUpsertWithoutMovesInput";
import { MoveEffectWhereInput } from "../inputs/MoveEffectWhereInput";
import { MoveEffectWhereUniqueInput } from "../inputs/MoveEffectWhereUniqueInput";

@TypeGraphQL.InputType("MoveEffectUpdateOneWithoutMovesNestedInput", {})
export class MoveEffectUpdateOneWithoutMovesNestedInput {
  @TypeGraphQL.Field(_type => MoveEffectCreateWithoutMovesInput, {
    nullable: true
  })
  create?: MoveEffectCreateWithoutMovesInput | undefined;

  @TypeGraphQL.Field(_type => MoveEffectCreateOrConnectWithoutMovesInput, {
    nullable: true
  })
  connectOrCreate?: MoveEffectCreateOrConnectWithoutMovesInput | undefined;

  @TypeGraphQL.Field(_type => MoveEffectUpsertWithoutMovesInput, {
    nullable: true
  })
  upsert?: MoveEffectUpsertWithoutMovesInput | undefined;

  @TypeGraphQL.Field(_type => MoveEffectWhereInput, {
    nullable: true
  })
  disconnect?: MoveEffectWhereInput | undefined;

  @TypeGraphQL.Field(_type => MoveEffectWhereInput, {
    nullable: true
  })
  delete?: MoveEffectWhereInput | undefined;

  @TypeGraphQL.Field(_type => MoveEffectWhereUniqueInput, {
    nullable: true
  })
  connect?: MoveEffectWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => MoveEffectUpdateToOneWithWhereWithoutMovesInput, {
    nullable: true
  })
  update?: MoveEffectUpdateToOneWithWhereWithoutMovesInput | undefined;
}
