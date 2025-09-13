import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MovesCreateNestedOneWithoutSuperContestCombosSecondInput } from "../inputs/MovesCreateNestedOneWithoutSuperContestCombosSecondInput";

@TypeGraphQL.InputType("SuperContestCombosCreateWithoutFirstMoveInput", {})
export class SuperContestCombosCreateWithoutFirstMoveInput {
  @TypeGraphQL.Field(_type => MovesCreateNestedOneWithoutSuperContestCombosSecondInput, {
    nullable: false
  })
  secondMove!: MovesCreateNestedOneWithoutSuperContestCombosSecondInput;
}
