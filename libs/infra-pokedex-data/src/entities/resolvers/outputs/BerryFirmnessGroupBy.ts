import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BerryFirmnessAvgAggregate } from "../outputs/BerryFirmnessAvgAggregate";
import { BerryFirmnessCountAggregate } from "../outputs/BerryFirmnessCountAggregate";
import { BerryFirmnessMaxAggregate } from "../outputs/BerryFirmnessMaxAggregate";
import { BerryFirmnessMinAggregate } from "../outputs/BerryFirmnessMinAggregate";
import { BerryFirmnessSumAggregate } from "../outputs/BerryFirmnessSumAggregate";

@TypeGraphQL.ObjectType("BerryFirmnessGroupBy", {})
export class BerryFirmnessGroupBy {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  id!: number;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  identifier!: string;

  @TypeGraphQL.Field(_type => BerryFirmnessCountAggregate, {
    nullable: true
  })
  _count!: BerryFirmnessCountAggregate | null;

  @TypeGraphQL.Field(_type => BerryFirmnessAvgAggregate, {
    nullable: true
  })
  _avg!: BerryFirmnessAvgAggregate | null;

  @TypeGraphQL.Field(_type => BerryFirmnessSumAggregate, {
    nullable: true
  })
  _sum!: BerryFirmnessSumAggregate | null;

  @TypeGraphQL.Field(_type => BerryFirmnessMinAggregate, {
    nullable: true
  })
  _min!: BerryFirmnessMinAggregate | null;

  @TypeGraphQL.Field(_type => BerryFirmnessMaxAggregate, {
    nullable: true
  })
  _max!: BerryFirmnessMaxAggregate | null;
}
