import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CharacteristicsAvgAggregate } from "../outputs/CharacteristicsAvgAggregate";
import { CharacteristicsCountAggregate } from "../outputs/CharacteristicsCountAggregate";
import { CharacteristicsMaxAggregate } from "../outputs/CharacteristicsMaxAggregate";
import { CharacteristicsMinAggregate } from "../outputs/CharacteristicsMinAggregate";
import { CharacteristicsSumAggregate } from "../outputs/CharacteristicsSumAggregate";

@TypeGraphQL.ObjectType("AggregateCharacteristics", {})
export class AggregateCharacteristics {
  @TypeGraphQL.Field(_type => CharacteristicsCountAggregate, {
    nullable: true
  })
  _count!: CharacteristicsCountAggregate | null;

  @TypeGraphQL.Field(_type => CharacteristicsAvgAggregate, {
    nullable: true
  })
  _avg!: CharacteristicsAvgAggregate | null;

  @TypeGraphQL.Field(_type => CharacteristicsSumAggregate, {
    nullable: true
  })
  _sum!: CharacteristicsSumAggregate | null;

  @TypeGraphQL.Field(_type => CharacteristicsMinAggregate, {
    nullable: true
  })
  _min!: CharacteristicsMinAggregate | null;

  @TypeGraphQL.Field(_type => CharacteristicsMaxAggregate, {
    nullable: true
  })
  _max!: CharacteristicsMaxAggregate | null;
}
