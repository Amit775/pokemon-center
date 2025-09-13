import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PokedexVersionGroupsUpdateManyWithoutPokedexNestedInput } from "../inputs/PokedexVersionGroupsUpdateManyWithoutPokedexNestedInput";
import { PokemonDexNumbersUpdateManyWithoutPokedexNestedInput } from "../inputs/PokemonDexNumbersUpdateManyWithoutPokedexNestedInput";

@TypeGraphQL.InputType("PokedexesUpdateWithoutRegionInput", {})
export class PokedexesUpdateWithoutRegionInput {
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

  @TypeGraphQL.Field(_type => PokemonDexNumbersUpdateManyWithoutPokedexNestedInput, {
    nullable: true
  })
  dexNumbers?: PokemonDexNumbersUpdateManyWithoutPokedexNestedInput | undefined;

  @TypeGraphQL.Field(_type => PokedexVersionGroupsUpdateManyWithoutPokedexNestedInput, {
    nullable: true
  })
  versionGroups?: PokedexVersionGroupsUpdateManyWithoutPokedexNestedInput | undefined;
}
