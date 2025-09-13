import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { LocationGameIndicesCreateNestedManyWithoutLocationInput } from "../inputs/LocationGameIndicesCreateNestedManyWithoutLocationInput";
import { PokemonEvolutionCreateNestedManyWithoutLocationInput } from "../inputs/PokemonEvolutionCreateNestedManyWithoutLocationInput";
import { RegionsCreateNestedOneWithoutLocationsInput } from "../inputs/RegionsCreateNestedOneWithoutLocationsInput";

@TypeGraphQL.InputType("LocationsCreateWithoutAreasInput", {})
export class LocationsCreateWithoutAreasInput {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  id!: number;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  identifier!: string;

  @TypeGraphQL.Field(_type => RegionsCreateNestedOneWithoutLocationsInput, {
    nullable: true
  })
  region?: RegionsCreateNestedOneWithoutLocationsInput | undefined;

  @TypeGraphQL.Field(_type => LocationGameIndicesCreateNestedManyWithoutLocationInput, {
    nullable: true
  })
  gameIndices?: LocationGameIndicesCreateNestedManyWithoutLocationInput | undefined;

  @TypeGraphQL.Field(_type => PokemonEvolutionCreateNestedManyWithoutLocationInput, {
    nullable: true
  })
  evolution?: PokemonEvolutionCreateNestedManyWithoutLocationInput | undefined;
}
