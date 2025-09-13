import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MovesCreateNestedOneWithoutSuperContestCombosInput } from "../inputs/MovesCreateNestedOneWithoutSuperContestCombosInput";
import { MovesCreateNestedOneWithoutSuperContestCombosSecondInput } from "../inputs/MovesCreateNestedOneWithoutSuperContestCombosSecondInput";

@TypeGraphQL.InputType("SuperContestCombosCreateInput", {})
export class SuperContestCombosCreateInput {
  @TypeGraphQL.Field(_type => MovesCreateNestedOneWithoutSuperContestCombosInput, {
    nullable: false
  })
  firstMove!: MovesCreateNestedOneWithoutSuperContestCombosInput;

  @TypeGraphQL.Field(_type => MovesCreateNestedOneWithoutSuperContestCombosSecondInput, {
    nullable: false
  })
  secondMove!: MovesCreateNestedOneWithoutSuperContestCombosSecondInput;
}
