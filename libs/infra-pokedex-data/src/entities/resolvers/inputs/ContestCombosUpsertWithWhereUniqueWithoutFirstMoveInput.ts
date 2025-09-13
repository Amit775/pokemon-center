import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ContestCombosCreateWithoutFirstMoveInput } from "../inputs/ContestCombosCreateWithoutFirstMoveInput";
import { ContestCombosUpdateWithoutFirstMoveInput } from "../inputs/ContestCombosUpdateWithoutFirstMoveInput";
import { ContestCombosWhereUniqueInput } from "../inputs/ContestCombosWhereUniqueInput";

@TypeGraphQL.InputType("ContestCombosUpsertWithWhereUniqueWithoutFirstMoveInput", {})
export class ContestCombosUpsertWithWhereUniqueWithoutFirstMoveInput {
  @TypeGraphQL.Field(_type => ContestCombosWhereUniqueInput, {
    nullable: false
  })
  where!: ContestCombosWhereUniqueInput;

  @TypeGraphQL.Field(_type => ContestCombosUpdateWithoutFirstMoveInput, {
    nullable: false
  })
  update!: ContestCombosUpdateWithoutFirstMoveInput;

  @TypeGraphQL.Field(_type => ContestCombosCreateWithoutFirstMoveInput, {
    nullable: false
  })
  create!: ContestCombosCreateWithoutFirstMoveInput;
}
