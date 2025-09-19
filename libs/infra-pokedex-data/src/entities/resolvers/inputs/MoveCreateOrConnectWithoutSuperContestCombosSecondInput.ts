import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MoveCreateWithoutSuperContestCombosSecondInput } from "../inputs/MoveCreateWithoutSuperContestCombosSecondInput";
import { MoveWhereUniqueInput } from "../inputs/MoveWhereUniqueInput";

@TypeGraphQL.InputType("MoveCreateOrConnectWithoutSuperContestCombosSecondInput", {})
export class MoveCreateOrConnectWithoutSuperContestCombosSecondInput {
  @TypeGraphQL.Field(_type => MoveWhereUniqueInput, {
    nullable: false
  })
  where!: MoveWhereUniqueInput;

  @TypeGraphQL.Field(_type => MoveCreateWithoutSuperContestCombosSecondInput, {
    nullable: false
  })
  create!: MoveCreateWithoutSuperContestCombosSecondInput;
}
