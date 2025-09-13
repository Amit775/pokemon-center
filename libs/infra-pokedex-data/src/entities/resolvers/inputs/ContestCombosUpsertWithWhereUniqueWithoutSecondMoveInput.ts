import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ContestCombosCreateWithoutSecondMoveInput } from "../inputs/ContestCombosCreateWithoutSecondMoveInput";
import { ContestCombosUpdateWithoutSecondMoveInput } from "../inputs/ContestCombosUpdateWithoutSecondMoveInput";
import { ContestCombosWhereUniqueInput } from "../inputs/ContestCombosWhereUniqueInput";

@TypeGraphQL.InputType("ContestCombosUpsertWithWhereUniqueWithoutSecondMoveInput", {})
export class ContestCombosUpsertWithWhereUniqueWithoutSecondMoveInput {
  @TypeGraphQL.Field(_type => ContestCombosWhereUniqueInput, {
    nullable: false
  })
  where!: ContestCombosWhereUniqueInput;

  @TypeGraphQL.Field(_type => ContestCombosUpdateWithoutSecondMoveInput, {
    nullable: false
  })
  update!: ContestCombosUpdateWithoutSecondMoveInput;

  @TypeGraphQL.Field(_type => ContestCombosCreateWithoutSecondMoveInput, {
    nullable: false
  })
  create!: ContestCombosCreateWithoutSecondMoveInput;
}
