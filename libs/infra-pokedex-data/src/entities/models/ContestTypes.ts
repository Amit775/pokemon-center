import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";
import { BerryFlavors } from "../models/BerryFlavors";
import { Moves } from "../models/Moves";
import { ContestTypesCount } from "../resolvers/outputs/ContestTypesCount";

@TypeGraphQL.ObjectType("ContestTypes", {})
export class ContestTypes {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  id!: number;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  identifier!: string;

  moves?: Moves[];

  berryFlavors?: BerryFlavors[];

  @TypeGraphQL.Field(_type => ContestTypesCount, {
    nullable: true
  })
  _count?: ContestTypesCount | null;
}
