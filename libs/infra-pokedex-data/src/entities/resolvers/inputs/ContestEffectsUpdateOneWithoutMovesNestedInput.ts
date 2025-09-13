import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ContestEffectsCreateOrConnectWithoutMovesInput } from "../inputs/ContestEffectsCreateOrConnectWithoutMovesInput";
import { ContestEffectsCreateWithoutMovesInput } from "../inputs/ContestEffectsCreateWithoutMovesInput";
import { ContestEffectsUpdateToOneWithWhereWithoutMovesInput } from "../inputs/ContestEffectsUpdateToOneWithWhereWithoutMovesInput";
import { ContestEffectsUpsertWithoutMovesInput } from "../inputs/ContestEffectsUpsertWithoutMovesInput";
import { ContestEffectsWhereInput } from "../inputs/ContestEffectsWhereInput";
import { ContestEffectsWhereUniqueInput } from "../inputs/ContestEffectsWhereUniqueInput";

@TypeGraphQL.InputType("ContestEffectsUpdateOneWithoutMovesNestedInput", {})
export class ContestEffectsUpdateOneWithoutMovesNestedInput {
  @TypeGraphQL.Field(_type => ContestEffectsCreateWithoutMovesInput, {
    nullable: true
  })
  create?: ContestEffectsCreateWithoutMovesInput | undefined;

  @TypeGraphQL.Field(_type => ContestEffectsCreateOrConnectWithoutMovesInput, {
    nullable: true
  })
  connectOrCreate?: ContestEffectsCreateOrConnectWithoutMovesInput | undefined;

  @TypeGraphQL.Field(_type => ContestEffectsUpsertWithoutMovesInput, {
    nullable: true
  })
  upsert?: ContestEffectsUpsertWithoutMovesInput | undefined;

  @TypeGraphQL.Field(_type => ContestEffectsWhereInput, {
    nullable: true
  })
  disconnect?: ContestEffectsWhereInput | undefined;

  @TypeGraphQL.Field(_type => ContestEffectsWhereInput, {
    nullable: true
  })
  delete?: ContestEffectsWhereInput | undefined;

  @TypeGraphQL.Field(_type => ContestEffectsWhereUniqueInput, {
    nullable: true
  })
  connect?: ContestEffectsWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => ContestEffectsUpdateToOneWithWhereWithoutMovesInput, {
    nullable: true
  })
  update?: ContestEffectsUpdateToOneWithWhereWithoutMovesInput | undefined;
}
