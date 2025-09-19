import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MoveUpdateManyWithoutContestEffectNestedInput } from "../inputs/MoveUpdateManyWithoutContestEffectNestedInput";

@TypeGraphQL.InputType("ContestEffectUpdateInput", {})
export class ContestEffectUpdateInput {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  id?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  appeal?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  jam?: number | undefined;

  @TypeGraphQL.Field(_type => MoveUpdateManyWithoutContestEffectNestedInput, {
    nullable: true
  })
  moves?: MoveUpdateManyWithoutContestEffectNestedInput | undefined;
}
