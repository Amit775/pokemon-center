import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MoveCreateWithoutSuperContestCombosInput } from "../inputs/MoveCreateWithoutSuperContestCombosInput";
import { MoveWhereUniqueInput } from "../inputs/MoveWhereUniqueInput";

@TypeGraphQL.InputType("MoveCreateOrConnectWithoutSuperContestCombosInput", {})
export class MoveCreateOrConnectWithoutSuperContestCombosInput {
  @TypeGraphQL.Field(_type => MoveWhereUniqueInput, {
    nullable: false
  })
  where!: MoveWhereUniqueInput;

  @TypeGraphQL.Field(_type => MoveCreateWithoutSuperContestCombosInput, {
    nullable: false
  })
  create!: MoveCreateWithoutSuperContestCombosInput;
}
