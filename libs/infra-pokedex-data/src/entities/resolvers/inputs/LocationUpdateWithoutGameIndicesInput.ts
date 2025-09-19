import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { LocationAreaUpdateManyWithoutLocationNestedInput } from "../inputs/LocationAreaUpdateManyWithoutLocationNestedInput";
import { PokemonEvolutionUpdateManyWithoutLocationNestedInput } from "../inputs/PokemonEvolutionUpdateManyWithoutLocationNestedInput";
import { RegionUpdateOneWithoutLocationsNestedInput } from "../inputs/RegionUpdateOneWithoutLocationsNestedInput";

@TypeGraphQL.InputType("LocationUpdateWithoutGameIndicesInput", {})
export class LocationUpdateWithoutGameIndicesInput {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  id?: number | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  identifier?: string | undefined;

  @TypeGraphQL.Field(_type => RegionUpdateOneWithoutLocationsNestedInput, {
    nullable: true
  })
  region?: RegionUpdateOneWithoutLocationsNestedInput | undefined;

  @TypeGraphQL.Field(_type => LocationAreaUpdateManyWithoutLocationNestedInput, {
    nullable: true
  })
  areas?: LocationAreaUpdateManyWithoutLocationNestedInput | undefined;

  @TypeGraphQL.Field(_type => PokemonEvolutionUpdateManyWithoutLocationNestedInput, {
    nullable: true
  })
  evolution?: PokemonEvolutionUpdateManyWithoutLocationNestedInput | undefined;
}
