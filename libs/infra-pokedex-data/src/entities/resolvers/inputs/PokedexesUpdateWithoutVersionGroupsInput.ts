import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PokemonDexNumbersUpdateManyWithoutPokedexNestedInput } from "../inputs/PokemonDexNumbersUpdateManyWithoutPokedexNestedInput";
import { RegionsUpdateOneWithoutPokedexesNestedInput } from "../inputs/RegionsUpdateOneWithoutPokedexesNestedInput";

@TypeGraphQL.InputType("PokedexesUpdateWithoutVersionGroupsInput", {})
export class PokedexesUpdateWithoutVersionGroupsInput {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  id?: number | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  identifier?: string | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  is_main_series?: number | undefined;

  @TypeGraphQL.Field(_type => RegionsUpdateOneWithoutPokedexesNestedInput, {
    nullable: true
  })
  region?: RegionsUpdateOneWithoutPokedexesNestedInput | undefined;

  @TypeGraphQL.Field(_type => PokemonDexNumbersUpdateManyWithoutPokedexNestedInput, {
    nullable: true
  })
  dexNumbers?: PokemonDexNumbersUpdateManyWithoutPokedexNestedInput | undefined;
}
