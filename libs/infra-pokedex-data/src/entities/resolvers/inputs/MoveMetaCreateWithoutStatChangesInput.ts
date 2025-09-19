import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MoveCreateNestedOneWithoutMetaInput } from "../inputs/MoveCreateNestedOneWithoutMetaInput";
import { MoveMetaAilmentCreateNestedOneWithoutMetaInput } from "../inputs/MoveMetaAilmentCreateNestedOneWithoutMetaInput";
import { MoveMetaCategoryCreateNestedOneWithoutMetaInput } from "../inputs/MoveMetaCategoryCreateNestedOneWithoutMetaInput";

@TypeGraphQL.InputType("MoveMetaCreateWithoutStatChangesInput", {})
export class MoveMetaCreateWithoutStatChangesInput {
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

  @TypeGraphQL.Field(_type => MoveCreateNestedOneWithoutMetaInput, {
    nullable: false
  })
  move!: MoveCreateNestedOneWithoutMetaInput;

  @TypeGraphQL.Field(_type => MoveMetaCategoryCreateNestedOneWithoutMetaInput, {
    nullable: false
  })
  metaCategory!: MoveMetaCategoryCreateNestedOneWithoutMetaInput;

  @TypeGraphQL.Field(_type => MoveMetaAilmentCreateNestedOneWithoutMetaInput, {
    nullable: true
  })
  metaAilment?: MoveMetaAilmentCreateNestedOneWithoutMetaInput | undefined;
}
