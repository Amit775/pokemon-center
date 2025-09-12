import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PokemonEvolutionCreateManyTradeSpeciesInput } from "../inputs/PokemonEvolutionCreateManyTradeSpeciesInput";

@TypeGraphQL.InputType("PokemonEvolutionCreateManyTradeSpeciesInputEnvelope", {})
export class PokemonEvolutionCreateManyTradeSpeciesInputEnvelope {
  @TypeGraphQL.Field(_type => [PokemonEvolutionCreateManyTradeSpeciesInput], {
    nullable: false
  })
  data!: PokemonEvolutionCreateManyTradeSpeciesInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
