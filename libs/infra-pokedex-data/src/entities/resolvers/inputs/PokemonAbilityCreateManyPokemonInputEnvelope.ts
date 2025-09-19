import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PokemonAbilityCreateManyPokemonInput } from "../inputs/PokemonAbilityCreateManyPokemonInput";

@TypeGraphQL.InputType("PokemonAbilityCreateManyPokemonInputEnvelope", {})
export class PokemonAbilityCreateManyPokemonInputEnvelope {
  @TypeGraphQL.Field(_type => [PokemonAbilityCreateManyPokemonInput], {
    nullable: false
  })
  data!: PokemonAbilityCreateManyPokemonInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
