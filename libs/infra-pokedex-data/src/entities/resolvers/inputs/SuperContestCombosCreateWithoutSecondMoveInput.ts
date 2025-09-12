import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MovesCreateNestedOneWithoutSuperContestCombosInput } from "../inputs/MovesCreateNestedOneWithoutSuperContestCombosInput";

@TypeGraphQL.InputType("SuperContestCombosCreateWithoutSecondMoveInput", {})
export class SuperContestCombosCreateWithoutSecondMoveInput {
  @TypeGraphQL.Field(_type => MovesCreateNestedOneWithoutSuperContestCombosInput, {
    nullable: false
  })
  firstMove!: MovesCreateNestedOneWithoutSuperContestCombosInput;
}
