import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";
import { LocationArea } from "../models/LocationArea";
import { LocationGameIndex } from "../models/LocationGameIndex";
import { PokemonEvolution } from "../models/PokemonEvolution";
import { Region } from "../models/Region";
import { LocationCount } from "../resolvers/outputs/LocationCount";

@TypeGraphQL.ObjectType("Location", {})
export class Location {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  id!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  region_id?: number | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  identifier!: string;

  region?: Region | null;

  areas?: LocationArea[];

  gameIndices?: LocationGameIndex[];

  evolution?: PokemonEvolution[];

  @TypeGraphQL.Field(_type => LocationCount, {
    nullable: true
  })
  _count?: LocationCount | null;
}
