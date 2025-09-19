import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MoveUpdateWithoutSuperContestEffectInput } from "../inputs/MoveUpdateWithoutSuperContestEffectInput";
import { MoveWhereUniqueInput } from "../inputs/MoveWhereUniqueInput";

@TypeGraphQL.InputType("MoveUpdateWithWhereUniqueWithoutSuperContestEffectInput", {})
export class MoveUpdateWithWhereUniqueWithoutSuperContestEffectInput {
  @TypeGraphQL.Field(_type => MoveWhereUniqueInput, {
    nullable: false
  })
  where!: MoveWhereUniqueInput;

  @TypeGraphQL.Field(_type => MoveUpdateWithoutSuperContestEffectInput, {
    nullable: false
  })
  data!: MoveUpdateWithoutSuperContestEffectInput;
}
