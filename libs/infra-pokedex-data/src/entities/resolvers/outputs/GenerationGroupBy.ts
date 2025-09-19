import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { GenerationAvgAggregate } from "../outputs/GenerationAvgAggregate";
import { GenerationCountAggregate } from "../outputs/GenerationCountAggregate";
import { GenerationMaxAggregate } from "../outputs/GenerationMaxAggregate";
import { GenerationMinAggregate } from "../outputs/GenerationMinAggregate";
import { GenerationSumAggregate } from "../outputs/GenerationSumAggregate";

@TypeGraphQL.ObjectType("GenerationGroupBy", {})
export class GenerationGroupBy {
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

  @TypeGraphQL.Field(_type => GenerationCountAggregate, {
    nullable: true
  })
  _count!: GenerationCountAggregate | null;

  @TypeGraphQL.Field(_type => GenerationAvgAggregate, {
    nullable: true
  })
  _avg!: GenerationAvgAggregate | null;

  @TypeGraphQL.Field(_type => GenerationSumAggregate, {
    nullable: true
  })
  _sum!: GenerationSumAggregate | null;

  @TypeGraphQL.Field(_type => GenerationMinAggregate, {
    nullable: true
  })
  _min!: GenerationMinAggregate | null;

  @TypeGraphQL.Field(_type => GenerationMaxAggregate, {
    nullable: true
  })
  _max!: GenerationMaxAggregate | null;
}
