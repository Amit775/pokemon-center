import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MoveCreateWithoutSuperContestEffectInput } from "../inputs/MoveCreateWithoutSuperContestEffectInput";
import { MoveWhereUniqueInput } from "../inputs/MoveWhereUniqueInput";

@TypeGraphQL.InputType("MoveCreateOrConnectWithoutSuperContestEffectInput", {})
export class MoveCreateOrConnectWithoutSuperContestEffectInput {
  @TypeGraphQL.Field(_type => MoveWhereUniqueInput, {
    nullable: false
  })
  where!: MoveWhereUniqueInput;

  @TypeGraphQL.Field(_type => MoveCreateWithoutSuperContestEffectInput, {
    nullable: false
  })
  create!: MoveCreateWithoutSuperContestEffectInput;
}
