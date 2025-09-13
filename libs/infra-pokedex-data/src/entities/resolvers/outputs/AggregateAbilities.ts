import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { AbilitiesAvgAggregate } from "../outputs/AbilitiesAvgAggregate";
import { AbilitiesCountAggregate } from "../outputs/AbilitiesCountAggregate";
import { AbilitiesMaxAggregate } from "../outputs/AbilitiesMaxAggregate";
import { AbilitiesMinAggregate } from "../outputs/AbilitiesMinAggregate";
import { AbilitiesSumAggregate } from "../outputs/AbilitiesSumAggregate";

@TypeGraphQL.ObjectType("AggregateAbilities", {})
export class AggregateAbilities {
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
