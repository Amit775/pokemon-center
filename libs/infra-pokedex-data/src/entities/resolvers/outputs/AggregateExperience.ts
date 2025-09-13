import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ExperienceAvgAggregate } from "../outputs/ExperienceAvgAggregate";
import { ExperienceCountAggregate } from "../outputs/ExperienceCountAggregate";
import { ExperienceMaxAggregate } from "../outputs/ExperienceMaxAggregate";
import { ExperienceMinAggregate } from "../outputs/ExperienceMinAggregate";
import { ExperienceSumAggregate } from "../outputs/ExperienceSumAggregate";

@TypeGraphQL.ObjectType("AggregateExperience", {})
export class AggregateExperience {
  @TypeGraphQL.Field(_type => ExperienceCountAggregate, {
    nullable: true
  })
  _count!: ExperienceCountAggregate | null;

  @TypeGraphQL.Field(_type => ExperienceAvgAggregate, {
    nullable: true
  })
  _avg!: ExperienceAvgAggregate | null;

  @TypeGraphQL.Field(_type => ExperienceSumAggregate, {
    nullable: true
  })
  _sum!: ExperienceSumAggregate | null;

  @TypeGraphQL.Field(_type => ExperienceMinAggregate, {
    nullable: true
  })
  _min!: ExperienceMinAggregate | null;

  @TypeGraphQL.Field(_type => ExperienceMaxAggregate, {
    nullable: true
  })
  _max!: ExperienceMaxAggregate | null;
}
