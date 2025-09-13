import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { GenerationsAvgAggregate } from "../outputs/GenerationsAvgAggregate";
import { GenerationsCountAggregate } from "../outputs/GenerationsCountAggregate";
import { GenerationsMaxAggregate } from "../outputs/GenerationsMaxAggregate";
import { GenerationsMinAggregate } from "../outputs/GenerationsMinAggregate";
import { GenerationsSumAggregate } from "../outputs/GenerationsSumAggregate";

@TypeGraphQL.ObjectType("GenerationsGroupBy", {})
export class GenerationsGroupBy {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  id!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  main_region_id!: number;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  identifier!: string;

  @TypeGraphQL.Field(_type => GenerationsCountAggregate, {
    nullable: true
  })
  _count!: GenerationsCountAggregate | null;

  @TypeGraphQL.Field(_type => GenerationsAvgAggregate, {
    nullable: true
  })
  _avg!: GenerationsAvgAggregate | null;

  @TypeGraphQL.Field(_type => GenerationsSumAggregate, {
    nullable: true
  })
  _sum!: GenerationsSumAggregate | null;

  @TypeGraphQL.Field(_type => GenerationsMinAggregate, {
    nullable: true
  })
  _min!: GenerationsMinAggregate | null;

  @TypeGraphQL.Field(_type => GenerationsMaxAggregate, {
    nullable: true
  })
  _max!: GenerationsMaxAggregate | null;
}
