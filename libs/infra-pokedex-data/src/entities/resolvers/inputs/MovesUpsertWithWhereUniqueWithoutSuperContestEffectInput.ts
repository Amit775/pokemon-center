import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MovesCreateWithoutSuperContestEffectInput } from "../inputs/MovesCreateWithoutSuperContestEffectInput";
import { MovesUpdateWithoutSuperContestEffectInput } from "../inputs/MovesUpdateWithoutSuperContestEffectInput";
import { MovesWhereUniqueInput } from "../inputs/MovesWhereUniqueInput";

@TypeGraphQL.InputType("MovesUpsertWithWhereUniqueWithoutSuperContestEffectInput", {})
export class MovesUpsertWithWhereUniqueWithoutSuperContestEffectInput {
  @TypeGraphQL.Field(_type => MovesWhereUniqueInput, {
    nullable: false
  })
  where!: MovesWhereUniqueInput;

  @TypeGraphQL.Field(_type => MovesUpdateWithoutSuperContestEffectInput, {
    nullable: false
  })
  update!: MovesUpdateWithoutSuperContestEffectInput;

  @TypeGraphQL.Field(_type => MovesCreateWithoutSuperContestEffectInput, {
    nullable: false
  })
  create!: MovesCreateWithoutSuperContestEffectInput;
}
