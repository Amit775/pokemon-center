import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MoveMetaAilmentUpdateOneWithoutMetaNestedInput } from "../inputs/MoveMetaAilmentUpdateOneWithoutMetaNestedInput";
import { MoveMetaCategoryUpdateOneRequiredWithoutMetaNestedInput } from "../inputs/MoveMetaCategoryUpdateOneRequiredWithoutMetaNestedInput";
import { MoveUpdateOneRequiredWithoutMetaNestedInput } from "../inputs/MoveUpdateOneRequiredWithoutMetaNestedInput";

@TypeGraphQL.InputType("MoveMetaUpdateWithoutStatChangesInput", {})
export class MoveMetaUpdateWithoutStatChangesInput {
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

  @TypeGraphQL.Field(_type => MoveUpdateOneRequiredWithoutMetaNestedInput, {
    nullable: true
  })
  move?: MoveUpdateOneRequiredWithoutMetaNestedInput | undefined;

  @TypeGraphQL.Field(_type => MoveMetaCategoryUpdateOneRequiredWithoutMetaNestedInput, {
    nullable: true
  })
  metaCategory?: MoveMetaCategoryUpdateOneRequiredWithoutMetaNestedInput | undefined;

  @TypeGraphQL.Field(_type => MoveMetaAilmentUpdateOneWithoutMetaNestedInput, {
    nullable: true
  })
  metaAilment?: MoveMetaAilmentUpdateOneWithoutMetaNestedInput | undefined;
}
