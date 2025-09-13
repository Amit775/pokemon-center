import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SuperContestEffectsCreateOrConnectWithoutMovesInput } from "../inputs/SuperContestEffectsCreateOrConnectWithoutMovesInput";
import { SuperContestEffectsCreateWithoutMovesInput } from "../inputs/SuperContestEffectsCreateWithoutMovesInput";
import { SuperContestEffectsUpdateToOneWithWhereWithoutMovesInput } from "../inputs/SuperContestEffectsUpdateToOneWithWhereWithoutMovesInput";
import { SuperContestEffectsUpsertWithoutMovesInput } from "../inputs/SuperContestEffectsUpsertWithoutMovesInput";
import { SuperContestEffectsWhereInput } from "../inputs/SuperContestEffectsWhereInput";
import { SuperContestEffectsWhereUniqueInput } from "../inputs/SuperContestEffectsWhereUniqueInput";

@TypeGraphQL.InputType("SuperContestEffectsUpdateOneWithoutMovesNestedInput", {})
export class SuperContestEffectsUpdateOneWithoutMovesNestedInput {
  @TypeGraphQL.Field(_type => SuperContestEffectsCreateWithoutMovesInput, {
    nullable: true
  })
  create?: SuperContestEffectsCreateWithoutMovesInput | undefined;

  @TypeGraphQL.Field(_type => SuperContestEffectsCreateOrConnectWithoutMovesInput, {
    nullable: true
  })
  connectOrCreate?: SuperContestEffectsCreateOrConnectWithoutMovesInput | undefined;

  @TypeGraphQL.Field(_type => SuperContestEffectsUpsertWithoutMovesInput, {
    nullable: true
  })
  upsert?: SuperContestEffectsUpsertWithoutMovesInput | undefined;

  @TypeGraphQL.Field(_type => SuperContestEffectsWhereInput, {
    nullable: true
  })
  disconnect?: SuperContestEffectsWhereInput | undefined;

  @TypeGraphQL.Field(_type => SuperContestEffectsWhereInput, {
    nullable: true
  })
  delete?: SuperContestEffectsWhereInput | undefined;

  @TypeGraphQL.Field(_type => SuperContestEffectsWhereUniqueInput, {
    nullable: true
  })
  connect?: SuperContestEffectsWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => SuperContestEffectsUpdateToOneWithWhereWithoutMovesInput, {
    nullable: true
  })
  update?: SuperContestEffectsUpdateToOneWithWhereWithoutMovesInput | undefined;
}
