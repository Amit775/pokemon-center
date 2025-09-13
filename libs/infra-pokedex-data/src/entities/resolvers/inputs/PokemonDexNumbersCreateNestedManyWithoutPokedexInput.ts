import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PokemonDexNumbersCreateManyPokedexInputEnvelope } from "../inputs/PokemonDexNumbersCreateManyPokedexInputEnvelope";
import { PokemonDexNumbersCreateOrConnectWithoutPokedexInput } from "../inputs/PokemonDexNumbersCreateOrConnectWithoutPokedexInput";
import { PokemonDexNumbersCreateWithoutPokedexInput } from "../inputs/PokemonDexNumbersCreateWithoutPokedexInput";
import { PokemonDexNumbersWhereUniqueInput } from "../inputs/PokemonDexNumbersWhereUniqueInput";

@TypeGraphQL.InputType("PokemonDexNumbersCreateNestedManyWithoutPokedexInput", {})
export class PokemonDexNumbersCreateNestedManyWithoutPokedexInput {
  @TypeGraphQL.Field(_type => [PokemonDexNumbersCreateWithoutPokedexInput], {
    nullable: true
  })
  create?: PokemonDexNumbersCreateWithoutPokedexInput[] | undefined;

  @TypeGraphQL.Field(_type => [PokemonDexNumbersCreateOrConnectWithoutPokedexInput], {
    nullable: true
  })
  connectOrCreate?: PokemonDexNumbersCreateOrConnectWithoutPokedexInput[] | undefined;

  @TypeGraphQL.Field(_type => PokemonDexNumbersCreateManyPokedexInputEnvelope, {
    nullable: true
  })
  createMany?: PokemonDexNumbersCreateManyPokedexInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [PokemonDexNumbersWhereUniqueInput], {
    nullable: true
  })
  connect?: PokemonDexNumbersWhereUniqueInput[] | undefined;
}
