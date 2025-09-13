import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MoveMetaCategoriesCreateNestedOneWithoutMetaInput } from "../inputs/MoveMetaCategoriesCreateNestedOneWithoutMetaInput";
import { MoveMetaStatChangesCreateNestedManyWithoutMetaInput } from "../inputs/MoveMetaStatChangesCreateNestedManyWithoutMetaInput";
import { MovesCreateNestedOneWithoutMetaInput } from "../inputs/MovesCreateNestedOneWithoutMetaInput";

@TypeGraphQL.InputType("MoveMetaCreateWithoutMetaAilmentInput", {})
export class MoveMetaCreateWithoutMetaAilmentInput {
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
    nullable: false
  })
  drain!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  healing!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  crit_rate!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  ailment_chance!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  flinch_chance!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  stat_chance!: number;

  @TypeGraphQL.Field(_type => MovesCreateNestedOneWithoutMetaInput, {
    nullable: false
  })
  move!: MovesCreateNestedOneWithoutMetaInput;

  @TypeGraphQL.Field(_type => MoveMetaCategoriesCreateNestedOneWithoutMetaInput, {
    nullable: false
  })
  metaCategory!: MoveMetaCategoriesCreateNestedOneWithoutMetaInput;

  @TypeGraphQL.Field(_type => MoveMetaStatChangesCreateNestedManyWithoutMetaInput, {
    nullable: true
  })
  statChanges?: MoveMetaStatChangesCreateNestedManyWithoutMetaInput | undefined;
}
