import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MovesCreateWithoutContestEffectInput } from "../inputs/MovesCreateWithoutContestEffectInput";
import { MovesUpdateWithoutContestEffectInput } from "../inputs/MovesUpdateWithoutContestEffectInput";
import { MovesWhereUniqueInput } from "../inputs/MovesWhereUniqueInput";

@TypeGraphQL.InputType("MovesUpsertWithWhereUniqueWithoutContestEffectInput", {})
export class MovesUpsertWithWhereUniqueWithoutContestEffectInput {
  @TypeGraphQL.Field(_type => MovesWhereUniqueInput, {
    nullable: false
  })
  where!: MovesWhereUniqueInput;

  @TypeGraphQL.Field(_type => MovesUpdateWithoutContestEffectInput, {
    nullable: false
  })
  update!: MovesUpdateWithoutContestEffectInput;

  @TypeGraphQL.Field(_type => MovesCreateWithoutContestEffectInput, {
    nullable: false
  })
  create!: MovesCreateWithoutContestEffectInput;
}
