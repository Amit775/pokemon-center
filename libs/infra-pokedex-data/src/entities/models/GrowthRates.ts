import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";
import { Experience } from "../models/Experience";
import { PokemonSpecies } from "../models/PokemonSpecies";
import { GrowthRatesCount } from "../resolvers/outputs/GrowthRatesCount";

@TypeGraphQL.ObjectType("GrowthRates", {})
export class GrowthRates {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  id!: number;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  identifier!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  formula!: string;

  species?: PokemonSpecies[];

  experience?: Experience[];

  @TypeGraphQL.Field(_type => GrowthRatesCount, {
    nullable: true
  })
  _count?: GrowthRatesCount | null;
}
