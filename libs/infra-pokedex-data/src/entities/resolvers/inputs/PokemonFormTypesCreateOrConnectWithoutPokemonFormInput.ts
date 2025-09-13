import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PokemonFormTypesCreateWithoutPokemonFormInput } from "../inputs/PokemonFormTypesCreateWithoutPokemonFormInput";
import { PokemonFormTypesWhereUniqueInput } from "../inputs/PokemonFormTypesWhereUniqueInput";

@TypeGraphQL.InputType("PokemonFormTypesCreateOrConnectWithoutPokemonFormInput", {})
export class PokemonFormTypesCreateOrConnectWithoutPokemonFormInput {
  @TypeGraphQL.Field(_type => PokemonFormTypesWhereUniqueInput, {
    nullable: false
  })
  where!: PokemonFormTypesWhereUniqueInput;

  @TypeGraphQL.Field(_type => PokemonFormTypesCreateWithoutPokemonFormInput, {
    nullable: false
  })
  create!: PokemonFormTypesCreateWithoutPokemonFormInput;
}
