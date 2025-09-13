import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PokemonSpeciesUpdateWithoutEvolvesToInput } from "../inputs/PokemonSpeciesUpdateWithoutEvolvesToInput";
import { PokemonSpeciesWhereInput } from "../inputs/PokemonSpeciesWhereInput";

@TypeGraphQL.InputType("PokemonSpeciesUpdateToOneWithWhereWithoutEvolvesToInput", {})
export class PokemonSpeciesUpdateToOneWithWhereWithoutEvolvesToInput {
  @TypeGraphQL.Field(_type => PokemonSpeciesWhereInput, {
    nullable: true
  })
  where?: PokemonSpeciesWhereInput | undefined;

  @TypeGraphQL.Field(_type => PokemonSpeciesUpdateWithoutEvolvesToInput, {
    nullable: false
  })
  data!: PokemonSpeciesUpdateWithoutEvolvesToInput;
}
