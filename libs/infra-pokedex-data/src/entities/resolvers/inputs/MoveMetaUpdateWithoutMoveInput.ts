import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MoveMetaAilmentsUpdateOneWithoutMetaNestedInput } from "../inputs/MoveMetaAilmentsUpdateOneWithoutMetaNestedInput";
import { MoveMetaCategoriesUpdateOneRequiredWithoutMetaNestedInput } from "../inputs/MoveMetaCategoriesUpdateOneRequiredWithoutMetaNestedInput";
import { MoveMetaStatChangesUpdateManyWithoutMetaNestedInput } from "../inputs/MoveMetaStatChangesUpdateManyWithoutMetaNestedInput";

@TypeGraphQL.InputType("MoveMetaUpdateWithoutMoveInput", {})
export class MoveMetaUpdateWithoutMoveInput {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  min_hits?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  max_hits?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  min_turns?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  max_turns?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  drain?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  healing?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  crit_rate?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  ailment_chance?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  flinch_chance?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  stat_chance?: number | undefined;

  @TypeGraphQL.Field(_type => MoveMetaCategoriesUpdateOneRequiredWithoutMetaNestedInput, {
    nullable: true
  })
  metaCategory?: MoveMetaCategoriesUpdateOneRequiredWithoutMetaNestedInput | undefined;

  @TypeGraphQL.Field(_type => MoveMetaAilmentsUpdateOneWithoutMetaNestedInput, {
    nullable: true
  })
  metaAilment?: MoveMetaAilmentsUpdateOneWithoutMetaNestedInput | undefined;

  @TypeGraphQL.Field(_type => MoveMetaStatChangesUpdateManyWithoutMetaNestedInput, {
    nullable: true
  })
  statChanges?: MoveMetaStatChangesUpdateManyWithoutMetaNestedInput | undefined;
}
