import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PokemonDexNumberCreateManyPokedexInputEnvelope } from "../inputs/PokemonDexNumberCreateManyPokedexInputEnvelope";
import { PokemonDexNumberCreateOrConnectWithoutPokedexInput } from "../inputs/PokemonDexNumberCreateOrConnectWithoutPokedexInput";
import { PokemonDexNumberCreateWithoutPokedexInput } from "../inputs/PokemonDexNumberCreateWithoutPokedexInput";
import { PokemonDexNumberWhereUniqueInput } from "../inputs/PokemonDexNumberWhereUniqueInput";

@TypeGraphQL.InputType("PokemonDexNumberCreateNestedManyWithoutPokedexInput", {})
export class PokemonDexNumberCreateNestedManyWithoutPokedexInput {
  @TypeGraphQL.Field(_type => [PokemonDexNumberCreateWithoutPokedexInput], {
    nullable: true
  })
  create?: PokemonDexNumberCreateWithoutPokedexInput[] | undefined;

  @TypeGraphQL.Field(_type => [PokemonDexNumberCreateOrConnectWithoutPokedexInput], {
    nullable: true
  })
  connectOrCreate?: PokemonDexNumberCreateOrConnectWithoutPokedexInput[] | undefined;

  @TypeGraphQL.Field(_type => PokemonDexNumberCreateManyPokedexInputEnvelope, {
    nullable: true
  })
  createMany?: PokemonDexNumberCreateManyPokedexInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [PokemonDexNumberWhereUniqueInput], {
    nullable: true
  })
  connect?: PokemonDexNumberWhereUniqueInput[] | undefined;
}
