import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PokemonMovesCreateManyPokemonInput } from "../inputs/PokemonMovesCreateManyPokemonInput";

@TypeGraphQL.InputType("PokemonMovesCreateManyPokemonInputEnvelope", {})
export class PokemonMovesCreateManyPokemonInputEnvelope {
  @TypeGraphQL.Field(_type => [PokemonMovesCreateManyPokemonInput], {
    nullable: false
  })
  data!: PokemonMovesCreateManyPokemonInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
