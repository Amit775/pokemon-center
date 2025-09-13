import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";
import { Berries } from "../models/Berries";
import { BerryFirmnessCount } from "../resolvers/outputs/BerryFirmnessCount";

@TypeGraphQL.ObjectType("BerryFirmness", {})
export class BerryFirmness {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  id!: number;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  identifier!: string;

  berries?: Berries[];

  @TypeGraphQL.Field(_type => BerryFirmnessCount, {
    nullable: true
  })
  _count?: BerryFirmnessCount | null;
}
