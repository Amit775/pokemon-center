import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MovesUpdateManyWithoutSuperContestEffectNestedInput } from "../inputs/MovesUpdateManyWithoutSuperContestEffectNestedInput";

@TypeGraphQL.InputType("SuperContestEffectsUpdateInput", {})
export class SuperContestEffectsUpdateInput {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  id?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  appeal?: number | undefined;

  @TypeGraphQL.Field(_type => MovesUpdateManyWithoutSuperContestEffectNestedInput, {
    nullable: true
  })
  moves?: MovesUpdateManyWithoutSuperContestEffectNestedInput | undefined;
}
