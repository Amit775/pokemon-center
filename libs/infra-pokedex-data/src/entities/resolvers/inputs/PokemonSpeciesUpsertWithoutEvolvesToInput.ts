import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PokemonSpeciesCreateWithoutEvolvesToInput } from "../inputs/PokemonSpeciesCreateWithoutEvolvesToInput";
import { PokemonSpeciesUpdateWithoutEvolvesToInput } from "../inputs/PokemonSpeciesUpdateWithoutEvolvesToInput";
import { PokemonSpeciesWhereInput } from "../inputs/PokemonSpeciesWhereInput";

@TypeGraphQL.InputType("PokemonSpeciesUpsertWithoutEvolvesToInput", {})
export class PokemonSpeciesUpsertWithoutEvolvesToInput {
  @TypeGraphQL.Field(_type => PokemonSpeciesUpdateWithoutEvolvesToInput, {
    nullable: false
  })
  update!: PokemonSpeciesUpdateWithoutEvolvesToInput;

  @TypeGraphQL.Field(_type => PokemonSpeciesCreateWithoutEvolvesToInput, {
    nullable: false
  })
  create!: PokemonSpeciesCreateWithoutEvolvesToInput;

  @TypeGraphQL.Field(_type => PokemonSpeciesWhereInput, {
    nullable: true
  })
  where?: PokemonSpeciesWhereInput | undefined;
}
