import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MovesUpdateManyWithoutContestEffectNestedInput } from "../inputs/MovesUpdateManyWithoutContestEffectNestedInput";

@TypeGraphQL.InputType("ContestEffectsUpdateInput", {})
export class ContestEffectsUpdateInput {
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

  @TypeGraphQL.Field(_type => MovesUpdateManyWithoutContestEffectNestedInput, {
    nullable: true
  })
  moves?: MovesUpdateManyWithoutContestEffectNestedInput | undefined;
}
