import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PokemonStatsCreateManyPokemonInput } from "../inputs/PokemonStatsCreateManyPokemonInput";

@TypeGraphQL.InputType("PokemonStatsCreateManyPokemonInputEnvelope", {})
export class PokemonStatsCreateManyPokemonInputEnvelope {
  @TypeGraphQL.Field(_type => [PokemonStatsCreateManyPokemonInput], {
    nullable: false
  })
  data!: PokemonStatsCreateManyPokemonInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
