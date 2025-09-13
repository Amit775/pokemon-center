import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { LocationAreasUpdateManyWithoutLocationNestedInput } from "../inputs/LocationAreasUpdateManyWithoutLocationNestedInput";
import { PokemonEvolutionUpdateManyWithoutLocationNestedInput } from "../inputs/PokemonEvolutionUpdateManyWithoutLocationNestedInput";
import { RegionsUpdateOneWithoutLocationsNestedInput } from "../inputs/RegionsUpdateOneWithoutLocationsNestedInput";

@TypeGraphQL.InputType("LocationsUpdateWithoutGameIndicesInput", {})
export class LocationsUpdateWithoutGameIndicesInput {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  id?: number | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  identifier?: string | undefined;

  @TypeGraphQL.Field(_type => RegionsUpdateOneWithoutLocationsNestedInput, {
    nullable: true
  })
  region?: RegionsUpdateOneWithoutLocationsNestedInput | undefined;

  @TypeGraphQL.Field(_type => LocationAreasUpdateManyWithoutLocationNestedInput, {
    nullable: true
  })
  areas?: LocationAreasUpdateManyWithoutLocationNestedInput | undefined;

  @TypeGraphQL.Field(_type => PokemonEvolutionUpdateManyWithoutLocationNestedInput, {
    nullable: true
  })
  evolution?: PokemonEvolutionUpdateManyWithoutLocationNestedInput | undefined;
}
