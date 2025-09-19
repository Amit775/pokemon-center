import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BerryFlavorAvgAggregate } from "../outputs/BerryFlavorAvgAggregate";
import { BerryFlavorCountAggregate } from "../outputs/BerryFlavorCountAggregate";
import { BerryFlavorMaxAggregate } from "../outputs/BerryFlavorMaxAggregate";
import { BerryFlavorMinAggregate } from "../outputs/BerryFlavorMinAggregate";
import { BerryFlavorSumAggregate } from "../outputs/BerryFlavorSumAggregate";

@TypeGraphQL.ObjectType("AggregateBerryFlavor", {})
export class AggregateBerryFlavor {
  @TypeGraphQL.Field(_type => BerryFlavorCountAggregate, {
    nullable: true
  })
  _count!: BerryFlavorCountAggregate | null;

  @TypeGraphQL.Field(_type => BerryFlavorAvgAggregate, {
    nullable: true
  })
  _avg!: BerryFlavorAvgAggregate | null;

  @TypeGraphQL.Field(_type => BerryFlavorSumAggregate, {
    nullable: true
  })
  _sum!: BerryFlavorSumAggregate | null;

  @TypeGraphQL.Field(_type => BerryFlavorMinAggregate, {
    nullable: true
  })
  _min!: BerryFlavorMinAggregate | null;

  @TypeGraphQL.Field(_type => BerryFlavorMaxAggregate, {
    nullable: true
  })
  _max!: BerryFlavorMaxAggregate | null;
}
