import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MoveEffectsCreateOrConnectWithoutMovesInput } from "../inputs/MoveEffectsCreateOrConnectWithoutMovesInput";
import { MoveEffectsCreateWithoutMovesInput } from "../inputs/MoveEffectsCreateWithoutMovesInput";
import { MoveEffectsUpdateToOneWithWhereWithoutMovesInput } from "../inputs/MoveEffectsUpdateToOneWithWhereWithoutMovesInput";
import { MoveEffectsUpsertWithoutMovesInput } from "../inputs/MoveEffectsUpsertWithoutMovesInput";
import { MoveEffectsWhereInput } from "../inputs/MoveEffectsWhereInput";
import { MoveEffectsWhereUniqueInput } from "../inputs/MoveEffectsWhereUniqueInput";

@TypeGraphQL.InputType("MoveEffectsUpdateOneWithoutMovesNestedInput", {})
export class MoveEffectsUpdateOneWithoutMovesNestedInput {
  @TypeGraphQL.Field(_type => MoveEffectsCreateWithoutMovesInput, {
    nullable: true
  })
  create?: MoveEffectsCreateWithoutMovesInput | undefined;

  @TypeGraphQL.Field(_type => MoveEffectsCreateOrConnectWithoutMovesInput, {
    nullable: true
  })
  connectOrCreate?: MoveEffectsCreateOrConnectWithoutMovesInput | undefined;

  @TypeGraphQL.Field(_type => MoveEffectsUpsertWithoutMovesInput, {
    nullable: true
  })
  upsert?: MoveEffectsUpsertWithoutMovesInput | undefined;

  @TypeGraphQL.Field(_type => MoveEffectsWhereInput, {
    nullable: true
  })
  disconnect?: MoveEffectsWhereInput | undefined;

  @TypeGraphQL.Field(_type => MoveEffectsWhereInput, {
    nullable: true
  })
  delete?: MoveEffectsWhereInput | undefined;

  @TypeGraphQL.Field(_type => MoveEffectsWhereUniqueInput, {
    nullable: true
  })
  connect?: MoveEffectsWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => MoveEffectsUpdateToOneWithWhereWithoutMovesInput, {
    nullable: true
  })
  update?: MoveEffectsUpdateToOneWithWhereWithoutMovesInput | undefined;
}
