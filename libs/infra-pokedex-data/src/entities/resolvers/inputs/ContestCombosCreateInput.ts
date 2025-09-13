import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MovesCreateNestedOneWithoutContestCombosInput } from "../inputs/MovesCreateNestedOneWithoutContestCombosInput";
import { MovesCreateNestedOneWithoutContestCombosSecondInput } from "../inputs/MovesCreateNestedOneWithoutContestCombosSecondInput";

@TypeGraphQL.InputType("ContestCombosCreateInput", {})
export class ContestCombosCreateInput {
  @TypeGraphQL.Field(_type => MovesCreateNestedOneWithoutContestCombosInput, {
    nullable: false
  })
  firstMove!: MovesCreateNestedOneWithoutContestCombosInput;

  @TypeGraphQL.Field(_type => MovesCreateNestedOneWithoutContestCombosSecondInput, {
    nullable: false
  })
  secondMove!: MovesCreateNestedOneWithoutContestCombosSecondInput;
}
