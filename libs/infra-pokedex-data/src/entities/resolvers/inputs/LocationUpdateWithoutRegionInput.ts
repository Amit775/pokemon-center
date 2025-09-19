import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { LocationAreaUpdateManyWithoutLocationNestedInput } from "../inputs/LocationAreaUpdateManyWithoutLocationNestedInput";
import { LocationGameIndexUpdateManyWithoutLocationNestedInput } from "../inputs/LocationGameIndexUpdateManyWithoutLocationNestedInput";
import { PokemonEvolutionUpdateManyWithoutLocationNestedInput } from "../inputs/PokemonEvolutionUpdateManyWithoutLocationNestedInput";

@TypeGraphQL.InputType("LocationUpdateWithoutRegionInput", {})
export class LocationUpdateWithoutRegionInput {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  id?: number | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  identifier?: string | undefined;

  @TypeGraphQL.Field(_type => LocationAreaUpdateManyWithoutLocationNestedInput, {
    nullable: true
  })
  areas?: LocationAreaUpdateManyWithoutLocationNestedInput | undefined;

  @TypeGraphQL.Field(_type => LocationGameIndexUpdateManyWithoutLocationNestedInput, {
    nullable: true
  })
  gameIndices?: LocationGameIndexUpdateManyWithoutLocationNestedInput | undefined;

  @TypeGraphQL.Field(_type => PokemonEvolutionUpdateManyWithoutLocationNestedInput, {
    nullable: true
  })
  evolution?: PokemonEvolutionUpdateManyWithoutLocationNestedInput | undefined;
}
