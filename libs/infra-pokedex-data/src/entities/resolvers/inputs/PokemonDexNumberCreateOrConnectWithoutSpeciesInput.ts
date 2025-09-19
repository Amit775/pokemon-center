import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PokemonDexNumberCreateWithoutSpeciesInput } from "../inputs/PokemonDexNumberCreateWithoutSpeciesInput";
import { PokemonDexNumberWhereUniqueInput } from "../inputs/PokemonDexNumberWhereUniqueInput";

@TypeGraphQL.InputType("PokemonDexNumberCreateOrConnectWithoutSpeciesInput", {})
export class PokemonDexNumberCreateOrConnectWithoutSpeciesInput {
  @TypeGraphQL.Field(_type => PokemonDexNumberWhereUniqueInput, {
    nullable: false
  })
  where!: PokemonDexNumberWhereUniqueInput;

  @TypeGraphQL.Field(_type => PokemonDexNumberCreateWithoutSpeciesInput, {
    nullable: false
  })
  create!: PokemonDexNumberCreateWithoutSpeciesInput;
}
