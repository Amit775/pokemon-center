import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PokemonAbilitiesCreateManyPokemonInput } from "../inputs/PokemonAbilitiesCreateManyPokemonInput";

@TypeGraphQL.InputType("PokemonAbilitiesCreateManyPokemonInputEnvelope", {})
export class PokemonAbilitiesCreateManyPokemonInputEnvelope {
  @TypeGraphQL.Field(_type => [PokemonAbilitiesCreateManyPokemonInput], {
    nullable: false
  })
  data!: PokemonAbilitiesCreateManyPokemonInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
