import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MovesCreateNestedOneWithoutContestCombosSecondInput } from "../inputs/MovesCreateNestedOneWithoutContestCombosSecondInput";

@TypeGraphQL.InputType("ContestCombosCreateWithoutFirstMoveInput", {})
export class ContestCombosCreateWithoutFirstMoveInput {
  @TypeGraphQL.Field(_type => MovesCreateNestedOneWithoutContestCombosSecondInput, {
    nullable: false
  })
  secondMove!: MovesCreateNestedOneWithoutContestCombosSecondInput;
}
