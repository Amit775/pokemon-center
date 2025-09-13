import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";
import { LocationAreas } from "../models/LocationAreas";
import { LocationGameIndices } from "../models/LocationGameIndices";
import { PokemonEvolution } from "../models/PokemonEvolution";
import { Regions } from "../models/Regions";
import { LocationsCount } from "../resolvers/outputs/LocationsCount";

@TypeGraphQL.ObjectType("Locations", {})
export class Locations {
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

  region?: Regions | null;

  areas?: LocationAreas[];

  gameIndices?: LocationGameIndices[];

  evolution?: PokemonEvolution[];

  @TypeGraphQL.Field(_type => LocationsCount, {
    nullable: true
  })
  _count?: LocationsCount | null;
}
