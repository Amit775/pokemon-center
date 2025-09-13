import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ContestCombosUpdateWithoutSecondMoveInput } from "../inputs/ContestCombosUpdateWithoutSecondMoveInput";
import { ContestCombosWhereUniqueInput } from "../inputs/ContestCombosWhereUniqueInput";

@TypeGraphQL.InputType("ContestCombosUpdateWithWhereUniqueWithoutSecondMoveInput", {})
export class ContestCombosUpdateWithWhereUniqueWithoutSecondMoveInput {
  @TypeGraphQL.Field(_type => ContestCombosWhereUniqueInput, {
    nullable: false
  })
  where!: ContestCombosWhereUniqueInput;

  @TypeGraphQL.Field(_type => ContestCombosUpdateWithoutSecondMoveInput, {
    nullable: false
  })
  data!: ContestCombosUpdateWithoutSecondMoveInput;
}
