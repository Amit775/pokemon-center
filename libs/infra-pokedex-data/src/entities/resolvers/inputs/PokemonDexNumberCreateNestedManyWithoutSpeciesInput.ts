import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PokemonDexNumberCreateManySpeciesInputEnvelope } from "../inputs/PokemonDexNumberCreateManySpeciesInputEnvelope";
import { PokemonDexNumberCreateOrConnectWithoutSpeciesInput } from "../inputs/PokemonDexNumberCreateOrConnectWithoutSpeciesInput";
import { PokemonDexNumberCreateWithoutSpeciesInput } from "../inputs/PokemonDexNumberCreateWithoutSpeciesInput";
import { PokemonDexNumberWhereUniqueInput } from "../inputs/PokemonDexNumberWhereUniqueInput";

@TypeGraphQL.InputType("PokemonDexNumberCreateNestedManyWithoutSpeciesInput", {})
export class PokemonDexNumberCreateNestedManyWithoutSpeciesInput {
  @TypeGraphQL.Field(_type => [PokemonDexNumberCreateWithoutSpeciesInput], {
    nullable: true
  })
  create?: PokemonDexNumberCreateWithoutSpeciesInput[] | undefined;

  @TypeGraphQL.Field(_type => [PokemonDexNumberCreateOrConnectWithoutSpeciesInput], {
    nullable: true
  })
  connectOrCreate?: PokemonDexNumberCreateOrConnectWithoutSpeciesInput[] | undefined;

  @TypeGraphQL.Field(_type => PokemonDexNumberCreateManySpeciesInputEnvelope, {
    nullable: true
  })
  createMany?: PokemonDexNumberCreateManySpeciesInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [PokemonDexNumberWhereUniqueInput], {
    nullable: true
  })
  connect?: PokemonDexNumberWhereUniqueInput[] | undefined;
}
