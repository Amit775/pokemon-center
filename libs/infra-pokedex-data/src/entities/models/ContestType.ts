import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";
import { BerryFlavor } from "../models/BerryFlavor";
import { Move } from "../models/Move";
import { ContestTypeCount } from "../resolvers/outputs/ContestTypeCount";

@TypeGraphQL.ObjectType("ContestType", {})
export class ContestType {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  id!: number;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  identifier!: string;

  moves?: Move[];

  berryFlavors?: BerryFlavor[];

  @TypeGraphQL.Field(_type => ContestTypeCount, {
    nullable: true
  })
  _count?: ContestTypeCount | null;
}
