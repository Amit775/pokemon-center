import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MoveUpdateManyWithoutSuperContestEffectNestedInput } from "../inputs/MoveUpdateManyWithoutSuperContestEffectNestedInput";

@TypeGraphQL.InputType("SuperContestEffectUpdateInput", {})
export class SuperContestEffectUpdateInput {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  id?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  appeal?: number | undefined;

  @TypeGraphQL.Field(_type => MoveUpdateManyWithoutSuperContestEffectNestedInput, {
    nullable: true
  })
  moves?: MoveUpdateManyWithoutSuperContestEffectNestedInput | undefined;
}
