import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PokemonDexNumberCreateNestedManyWithoutPokedexInput } from "../inputs/PokemonDexNumberCreateNestedManyWithoutPokedexInput";
import { RegionCreateNestedOneWithoutPokedexesInput } from "../inputs/RegionCreateNestedOneWithoutPokedexesInput";

@TypeGraphQL.InputType("PokedexCreateWithoutVersionGroupsInput", {})
export class PokedexCreateWithoutVersionGroupsInput {
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
}
