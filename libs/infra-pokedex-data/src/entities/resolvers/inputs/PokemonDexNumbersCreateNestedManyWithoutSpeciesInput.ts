import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PokemonDexNumbersCreateManySpeciesInputEnvelope } from "../inputs/PokemonDexNumbersCreateManySpeciesInputEnvelope";
import { PokemonDexNumbersCreateOrConnectWithoutSpeciesInput } from "../inputs/PokemonDexNumbersCreateOrConnectWithoutSpeciesInput";
import { PokemonDexNumbersCreateWithoutSpeciesInput } from "../inputs/PokemonDexNumbersCreateWithoutSpeciesInput";
import { PokemonDexNumbersWhereUniqueInput } from "../inputs/PokemonDexNumbersWhereUniqueInput";

@TypeGraphQL.InputType("PokemonDexNumbersCreateNestedManyWithoutSpeciesInput", {})
export class PokemonDexNumbersCreateNestedManyWithoutSpeciesInput {
  @TypeGraphQL.Field(_type => [PokemonDexNumbersCreateWithoutSpeciesInput], {
    nullable: true
  })
  create?: PokemonDexNumbersCreateWithoutSpeciesInput[] | undefined;

  @TypeGraphQL.Field(_type => [PokemonDexNumbersCreateOrConnectWithoutSpeciesInput], {
    nullable: true
  })
  connectOrCreate?: PokemonDexNumbersCreateOrConnectWithoutSpeciesInput[] | undefined;

  @TypeGraphQL.Field(_type => PokemonDexNumbersCreateManySpeciesInputEnvelope, {
    nullable: true
  })
  createMany?: PokemonDexNumbersCreateManySpeciesInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [PokemonDexNumbersWhereUniqueInput], {
    nullable: true
  })
  connect?: PokemonDexNumbersWhereUniqueInput[] | undefined;
}
