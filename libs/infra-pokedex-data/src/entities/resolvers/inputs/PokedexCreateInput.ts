import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PokedexVersionGroupCreateNestedManyWithoutPokedexInput } from "../inputs/PokedexVersionGroupCreateNestedManyWithoutPokedexInput";
import { PokemonDexNumberCreateNestedManyWithoutPokedexInput } from "../inputs/PokemonDexNumberCreateNestedManyWithoutPokedexInput";
import { RegionCreateNestedOneWithoutPokedexesInput } from "../inputs/RegionCreateNestedOneWithoutPokedexesInput";

@TypeGraphQL.InputType("PokedexCreateInput", {})
export class PokedexCreateInput {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  id!: number;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  identifier!: string;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  is_main_series!: number;

  @TypeGraphQL.Field(_type => RegionCreateNestedOneWithoutPokedexesInput, {
    nullable: true
  })
  region?: RegionCreateNestedOneWithoutPokedexesInput | undefined;

  @TypeGraphQL.Field(_type => PokemonDexNumberCreateNestedManyWithoutPokedexInput, {
    nullable: true
  })
  dexNumbers?: PokemonDexNumberCreateNestedManyWithoutPokedexInput | undefined;

  @TypeGraphQL.Field(_type => PokedexVersionGroupCreateNestedManyWithoutPokedexInput, {
    nullable: true
  })
  versionGroups?: PokedexVersionGroupCreateNestedManyWithoutPokedexInput | undefined;
}
