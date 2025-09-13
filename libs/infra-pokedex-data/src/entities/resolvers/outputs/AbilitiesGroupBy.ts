import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { AbilitiesAvgAggregate } from "../outputs/AbilitiesAvgAggregate";
import { AbilitiesCountAggregate } from "../outputs/AbilitiesCountAggregate";
import { AbilitiesMaxAggregate } from "../outputs/AbilitiesMaxAggregate";
import { AbilitiesMinAggregate } from "../outputs/AbilitiesMinAggregate";
import { AbilitiesSumAggregate } from "../outputs/AbilitiesSumAggregate";

@TypeGraphQL.ObjectType("AbilitiesGroupBy", {})
export class AbilitiesGroupBy {
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

  @TypeGraphQL.Field(_type => AbilitiesCountAggregate, {
    nullable: true
  })
  _count!: AbilitiesCountAggregate | null;

  @TypeGraphQL.Field(_type => AbilitiesAvgAggregate, {
    nullable: true
  })
  _avg!: AbilitiesAvgAggregate | null;

  @TypeGraphQL.Field(_type => AbilitiesSumAggregate, {
    nullable: true
  })
  _sum!: AbilitiesSumAggregate | null;

  @TypeGraphQL.Field(_type => AbilitiesMinAggregate, {
    nullable: true
  })
  _min!: AbilitiesMinAggregate | null;

  @TypeGraphQL.Field(_type => AbilitiesMaxAggregate, {
    nullable: true
  })
  _max!: AbilitiesMaxAggregate | null;
}
