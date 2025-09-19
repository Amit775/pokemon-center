import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { AbilityAvgAggregate } from "../outputs/AbilityAvgAggregate";
import { AbilityCountAggregate } from "../outputs/AbilityCountAggregate";
import { AbilityMaxAggregate } from "../outputs/AbilityMaxAggregate";
import { AbilityMinAggregate } from "../outputs/AbilityMinAggregate";
import { AbilitySumAggregate } from "../outputs/AbilitySumAggregate";

@TypeGraphQL.ObjectType("AbilityGroupBy", {})
export class AbilityGroupBy {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  id!: number;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  identifier!: string;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  generation_id!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  is_main_series!: number;

  @TypeGraphQL.Field(_type => AbilityCountAggregate, {
    nullable: true
  })
  _count!: AbilityCountAggregate | null;

  @TypeGraphQL.Field(_type => AbilityAvgAggregate, {
    nullable: true
  })
  _avg!: AbilityAvgAggregate | null;

  @TypeGraphQL.Field(_type => AbilitySumAggregate, {
    nullable: true
  })
  _sum!: AbilitySumAggregate | null;

  @TypeGraphQL.Field(_type => AbilityMinAggregate, {
    nullable: true
  })
  _min!: AbilityMinAggregate | null;

  @TypeGraphQL.Field(_type => AbilityMaxAggregate, {
    nullable: true
  })
  _max!: AbilityMaxAggregate | null;
}
