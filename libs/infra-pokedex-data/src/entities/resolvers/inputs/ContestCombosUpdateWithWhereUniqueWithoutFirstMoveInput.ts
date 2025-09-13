import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ContestCombosUpdateWithoutFirstMoveInput } from "../inputs/ContestCombosUpdateWithoutFirstMoveInput";
import { ContestCombosWhereUniqueInput } from "../inputs/ContestCombosWhereUniqueInput";

@TypeGraphQL.InputType("ContestCombosUpdateWithWhereUniqueWithoutFirstMoveInput", {})
export class ContestCombosUpdateWithWhereUniqueWithoutFirstMoveInput {
  @TypeGraphQL.Field(_type => ContestCombosWhereUniqueInput, {
    nullable: false
  })
  where!: ContestCombosWhereUniqueInput;

  @TypeGraphQL.Field(_type => ContestCombosUpdateWithoutFirstMoveInput, {
    nullable: false
  })
  data!: ContestCombosUpdateWithoutFirstMoveInput;
}
