import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PokemonTypeCreateManyPokemonInput } from "../inputs/PokemonTypeCreateManyPokemonInput";

@TypeGraphQL.InputType("PokemonTypeCreateManyPokemonInputEnvelope", {})
export class PokemonTypeCreateManyPokemonInputEnvelope {
  @TypeGraphQL.Field(_type => [PokemonTypeCreateManyPokemonInput], {
    nullable: false
  })
  data!: PokemonTypeCreateManyPokemonInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
