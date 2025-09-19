import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CharacteristicAvgAggregate } from "../outputs/CharacteristicAvgAggregate";
import { CharacteristicCountAggregate } from "../outputs/CharacteristicCountAggregate";
import { CharacteristicMaxAggregate } from "../outputs/CharacteristicMaxAggregate";
import { CharacteristicMinAggregate } from "../outputs/CharacteristicMinAggregate";
import { CharacteristicSumAggregate } from "../outputs/CharacteristicSumAggregate";

@TypeGraphQL.ObjectType("CharacteristicGroupBy", {})
export class CharacteristicGroupBy {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  id!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  stat_id!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  gene_mod_5!: number;

  @TypeGraphQL.Field(_type => CharacteristicCountAggregate, {
    nullable: true
  })
  _count!: CharacteristicCountAggregate | null;

  @TypeGraphQL.Field(_type => CharacteristicAvgAggregate, {
    nullable: true
  })
  _avg!: CharacteristicAvgAggregate | null;

  @TypeGraphQL.Field(_type => CharacteristicSumAggregate, {
    nullable: true
  })
  _sum!: CharacteristicSumAggregate | null;

  @TypeGraphQL.Field(_type => CharacteristicMinAggregate, {
    nullable: true
  })
  _min!: CharacteristicMinAggregate | null;

  @TypeGraphQL.Field(_type => CharacteristicMaxAggregate, {
    nullable: true
  })
  _max!: CharacteristicMaxAggregate | null;
}
