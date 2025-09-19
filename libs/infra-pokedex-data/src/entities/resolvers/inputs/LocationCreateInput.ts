import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { LocationAreaCreateNestedManyWithoutLocationInput } from "../inputs/LocationAreaCreateNestedManyWithoutLocationInput";
import { LocationGameIndexCreateNestedManyWithoutLocationInput } from "../inputs/LocationGameIndexCreateNestedManyWithoutLocationInput";
import { PokemonEvolutionCreateNestedManyWithoutLocationInput } from "../inputs/PokemonEvolutionCreateNestedManyWithoutLocationInput";
import { RegionCreateNestedOneWithoutLocationsInput } from "../inputs/RegionCreateNestedOneWithoutLocationsInput";

@TypeGraphQL.InputType("LocationCreateInput", {})
export class LocationCreateInput {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  id!: number;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  identifier!: string;

  @TypeGraphQL.Field(_type => RegionCreateNestedOneWithoutLocationsInput, {
    nullable: true
  })
  region?: RegionCreateNestedOneWithoutLocationsInput | undefined;

  @TypeGraphQL.Field(_type => LocationAreaCreateNestedManyWithoutLocationInput, {
    nullable: true
  })
  areas?: LocationAreaCreateNestedManyWithoutLocationInput | undefined;

  @TypeGraphQL.Field(_type => LocationGameIndexCreateNestedManyWithoutLocationInput, {
    nullable: true
  })
  gameIndices?: LocationGameIndexCreateNestedManyWithoutLocationInput | undefined;

  @TypeGraphQL.Field(_type => PokemonEvolutionCreateNestedManyWithoutLocationInput, {
    nullable: true
  })
  evolution?: PokemonEvolutionCreateNestedManyWithoutLocationInput | undefined;
}
